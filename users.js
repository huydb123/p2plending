// Vercel Serverless Function: /api/users
// Manages User Profiles (20 Borrowers, 20 Lenders) and User Registration

const { supabaseClient, isConfigured } = require('../lib/supabaseClient');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        if (req.method === 'GET') {
            const { role } = req.query;

            if (isConfigured()) {
                let query = supabaseClient.from('profiles').select('*');
                if (role) query = query.eq('role', role);
                
                const { data, error } = await query.order('created_at', { ascending: true });
                if (error) throw error;
                return res.status(200).json({ success: true, users: data, source: 'supabase' });
            } else {
                return res.status(200).json({ 
                    success: true, 
                    source: 'mock',
                    message: 'Running in local fallback mode. See static seed dataset.'
                });
            }
        }

        // Register New Borrower or Lender
        if (req.method === 'POST') {
            const { fullName, email, role, creditScore, verifiedIncome, initialDeposit } = req.body;

            const userId = `usr_${role === 'borrower' ? 'b' : 'l'}${Math.floor(100 + Math.random() * 900)}`;
            const newProfile = {
                id: userId,
                full_name: fullName,
                email: email,
                role: role, // 'borrower' or 'lender'
                avatar_url: `https://images.unsplash.com/photo-${role === 'borrower' ? '1534528741775-53994a69daeb' : '1535713875002-d1d0cf377fde'}?auto=format&fit=crop&w=120&q=80`,
                credit_score: parseInt(creditScore || 720),
                verified_income: parseFloat(verifiedIncome || 7500.00),
                dti_ratio: '25%',
                wallet_balance: parseFloat(initialDeposit || 1000.00)
            };

            if (isConfigured()) {
                const { data, error } = await supabaseClient.from('profiles').insert([newProfile]).select();
                if (error) throw error;
                return res.status(201).json({ success: true, user: data[0], source: 'supabase' });
            } else {
                return res.status(201).json({ success: true, user: newProfile, source: 'mock' });
            }
        }

        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (err) {
        console.error('[API /api/users Error]:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
