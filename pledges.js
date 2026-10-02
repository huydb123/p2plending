// Vercel Serverless Function: /api/pledges
// Handles micro-pledges and fractional note funding transactions

const { supabaseClient, isConfigured } = require('../lib/supabaseClient');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        if (req.method === 'POST') {
            const { lenderId, loanId, pledgeAmount, apr } = req.body;

            const pledgeId = `PLG-${Math.floor(1000 + Math.random() * 9000)}`;
            const monthlyYield = (parseFloat(pledgeAmount) * (parseFloat(apr) / 100)) / 12;

            const newPledge = {
                id: pledgeId,
                lender_id: lenderId || 'usr_l01',
                loan_id: loanId,
                pledge_amount: parseFloat(pledgeAmount),
                monthly_yield: parseFloat(monthlyYield.toFixed(2)),
                status: 'active'
            };

            if (isConfigured()) {
                // Insert pledge record
                const { data: pledgeData, error: pledgeErr } = await supabaseClient.from('pledges').insert([newPledge]).select();
                if (pledgeErr) throw pledgeErr;

                // Update loan funded_amount in Supabase
                const { data: loanData } = await supabaseClient.from('loans').select('funded_amount, requested_amount').eq('id', loanId).single();
                if (loanData) {
                    const newFunded = parseFloat(loanData.funded_amount) + parseFloat(pledgeAmount);
                    const newStatus = newFunded >= parseFloat(loanData.requested_amount) ? 'Active' : 'Funding';
                    
                    await supabaseClient.from('loans').update({
                        funded_amount: newFunded,
                        status: newStatus
                    }).eq('id', loanId);
                }

                return res.status(201).json({ success: true, pledge: pledgeData[0], source: 'supabase' });
            } else {
                return res.status(201).json({ success: true, pledge: newPledge, source: 'mock' });
            }
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (err) {
        console.error('[API /api/pledges Error]:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
