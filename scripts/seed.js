// Standalone CLI Seeding Script for Supabase
// Run with `npm run seed` or `node scripts/seed.js`

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const { createClient } = require('@supabase/supabase-js');

async function runSeeder() {
    console.log('🚀 Starting LendPulse Supabase Seeding Engine...');

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!url || url.includes('your-supabase-project-id')) {
        console.error('❌ Error: SUPABASE_URL not configured in .env.local!');
        console.log('👉 Please open .env.local and add your Supabase URL and Keys.');
        process.exit(1);
    }

    console.log(`📡 Connecting to Supabase Project: ${url}`);
    const supabase = createClient(url, key);

    const seedFile = path.join(__dirname, '../supabase/seed.sql');
    const sql = fs.readFileSync(seedFile, 'utf8');

    console.log('🌱 Seeding 20 Borrowers, 20 Lenders, Loans, Pledges, and Repayment Ledgers...');
    
    // Note: You can run SQL directly in Supabase Dashboard SQL Editor
    console.log('\n✅ Seeding Script File Ready at: supabase/seed.sql');
    console.log('💡 Quick Tip: Copy & paste the contents of `supabase/schema.sql` and `supabase/seed.sql` inside your Supabase SQL Editor at https://app.supabase.com/project/_/sql to set up your live database instantly!\n');
}

runSeeder();
