// Vercel Serverless Function: /api/loans
// Handles listing loan orderbook and creating new underwritten loan requests

const { supabaseClient, isConfigured } = require('../lib/supabaseClient');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'GET') {
            const { grade, search, status } = req.query;

            if (isConfigured()) {
                let query = supabaseClient.from('loans').select('*, profiles:borrower_id(*)');
                
                if (grade && grade !== 'ALL') {
                    query = query.ilike('risk_grade', `${grade}%`);
                }
                if (status) {
                    query = query.eq('status', status);
                }

                const { data, error } = await query.order('created_at', { ascending: false });
                if (error) throw error;
                return res.status(200).json({ success: true, loans: data, source: 'supabase' });
            } else {
                return res.status(200).json({ 
                    success: true, 
                    source: 'mock',
                    message: 'Supabase credentials not configured in .env.local yet. Operating in local mode.'
                });
            }
        }

        if (req.method === 'POST') {
            const { borrowerId, borrowerName, purpose, amount, termMonths, creditScore } = req.body;

            // Simple underwriting calculation
            let grade = 'A2';
            let apr = 10.5;
            if (creditScore >= 760) { grade = 'A1'; apr = 8.5; }
            else if (creditScore >= 720) { grade = 'A2'; apr = 10.5; }
            else if (creditScore >= 680) { grade = 'B1'; apr = 13.0; }
            else if (creditScore >= 640) { grade = 'C1'; apr = 16.5; }
            else { grade = 'D1'; apr = 19.8; }

            const loanId = `LN-${Math.floor(1000 + Math.random() * 9000)}`;

            const newLoan = {
                id: loanId,
                borrower_id: borrowerId || 'usr_b01',
                purpose: purpose || 'General Capital',
                requested_amount: parseFloat(amount),
                funded_amount: 0.00,
                apr: apr,
                term_months: parseInt(termMonths),
                risk_grade: grade,
                status: 'Funding',
                kyc_verified: true
            };

            if (isConfigured()) {
                const { data, error } = await supabaseClient.from('loans').insert([newLoan]).select();
                if (error) throw error;
                return res.status(201).json({ success: true, loan: data[0], source: 'supabase' });
            } else {
                return res.status(201).json({ success: true, loan: newLoan, source: 'mock' });
            }
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (err) {
        console.error('[API /api/loans Error]:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
