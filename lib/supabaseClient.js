// Supabase Client Initialization Engine with Fallback Support
// Securely loads credentials from environment variables

const SUPABASE_URL = (typeof process !== 'undefined' && process.env && process.env.SUPABASE_URL)
    || (typeof window !== 'undefined' && window.SUPABASE_URL)
    || 'https://your-supabase-project-id.supabase.co';

const SUPABASE_ANON_KEY = (typeof process !== 'undefined' && process.env && process.env.SUPABASE_ANON_KEY)
    || (typeof window !== 'undefined' && window.SUPABASE_ANON_KEY)
    || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy-anon-key';

let supabase = null;

// Initialize Supabase if client library is available
if (typeof supabase !== 'undefined' && window.supabase && window.supabase.createClient) {
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('[LendPulse Engine] Supabase Client initialized successfully.');
    } catch (e) {
        console.warn('[LendPulse Engine] Supabase Client setup warning:', e.message);
    }
}

// Export helper module for Node / Vercel Serverless environment
if (typeof module !== 'undefined' && module.exports) {
    const { createClient } = require('@supabase/supabase-js');
    const url = process.env.SUPABASE_URL || 'https://your-supabase-project-id.supabase.co';
    const key = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy-anon-key';
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || key;

    const supabaseClient = createClient(url, key);
    const supabaseAdmin = createClient(url, serviceKey);

    module.exports = {
        supabaseClient,
        supabaseAdmin,
        isConfigured: () => Boolean(process.env.SUPABASE_URL && !process.env.SUPABASE_URL.includes('your-supabase-project-id'))
    };
}
