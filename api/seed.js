// Vercel Serverless Function / CLI script: /api/seed
// Triggers database seeding for 20 Borrowers, 20 Lenders, Loans, Pledges, and Schedules

const fs = require('fs');
const path = require('path');
const { supabaseAdmin, isConfigured } = require('../lib/supabaseClient');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        if (!isConfigured()) {
            return res.status(400).json({
                success: false,
                message: 'Supabase credentials missing. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
            });
        }

        const seedFilePath = path.join(__dirname, '../supabase/seed.sql');
        const sql = fs.readFileSync(seedFilePath, 'utf8');

        // Execute raw SQL via Supabase RPC or Admin client
        const { data, error } = await supabaseAdmin.rpc('exec_sql', { sql_query: sql });

        if (error) {
            // Fallback: If exec_sql RPC is not created, instruct user to paste seed.sql in SQL Editor
            return res.status(200).json({
                success: true,
                message: 'SQL Seed script ready! Please copy & run supabase/seed.sql inside your Supabase SQL Editor.',
                seedScriptPath: 'supabase/seed.sql'
            });
        }

        return res.status(200).json({ success: true, message: 'Database seeded successfully with 20 Borrowers and 20 Lenders!' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
};
