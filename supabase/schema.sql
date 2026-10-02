-- Supabase Database Schema for LendPulse P2P Platform
-- Run this SQL in your Supabase SQL Editor (https://app.supabase.com/project/_/sql)

-- 1. Create User Profiles Table (Borrowers and Lenders)
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('borrower', 'lender', 'underwriter', 'admin')),
    avatar_url TEXT,
    credit_score INT DEFAULT 700,
    verified_income NUMERIC(12, 2) DEFAULT 0.00,
    dti_ratio VARCHAR(10) DEFAULT '25%',
    wallet_balance NUMERIC(12, 2) DEFAULT 10000.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Loans Table
CREATE TABLE IF NOT EXISTS public.loans (
    id VARCHAR(20) PRIMARY KEY,
    borrower_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    purpose TEXT NOT NULL,
    requested_amount NUMERIC(12, 2) NOT NULL,
    funded_amount NUMERIC(12, 2) DEFAULT 0.00,
    apr NUMERIC(5, 2) NOT NULL,
    term_months INT NOT NULL,
    risk_grade VARCHAR(5) NOT NULL,
    status VARCHAR(20) DEFAULT 'Funding' CHECK (status IN ('Funding', 'Active', 'Paid Off', 'Defaulted')),
    kyc_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Pledges Table (Micro-notes funded by lenders)
CREATE TABLE IF NOT EXISTS public.pledges (
    id VARCHAR(30) PRIMARY KEY,
    lender_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    loan_id VARCHAR(20) NOT NULL REFERENCES public.loans(id) ON DELETE CASCADE,
    pledge_amount NUMERIC(12, 2) NOT NULL,
    monthly_yield NUMERIC(12, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'reselling', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create Secondary Market Notes Table
CREATE TABLE IF NOT EXISTS public.secondary_notes (
    id VARCHAR(30) PRIMARY KEY,
    seller_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    loan_id VARCHAR(20) NOT NULL REFERENCES public.loans(id) ON DELETE CASCADE,
    pledge_id VARCHAR(30) REFERENCES public.pledges(id) ON DELETE CASCADE,
    remaining_principal NUMERIC(12, 2) NOT NULL,
    ask_price NUMERIC(12, 2) NOT NULL,
    yield_to_maturity NUMERIC(5, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'listed' CHECK (status IN ('listed', 'sold', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Create Repayments Amortization Ledger Table
CREATE TABLE IF NOT EXISTS public.repayments (
    id SERIAL PRIMARY KEY,
    loan_id VARCHAR(20) NOT NULL REFERENCES public.loans(id) ON DELETE CASCADE,
    installment_num INT NOT NULL,
    due_date DATE NOT NULL,
    total_amount NUMERIC(12, 2) NOT NULL,
    principal_amount NUMERIC(12, 2) NOT NULL,
    interest_amount NUMERIC(12, 2) NOT NULL,
    remaining_balance NUMERIC(12, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'UPCOMING' CHECK (status IN ('PAID', 'DUE NOW', 'UPCOMING', 'LATE')),
    paid_at TIMESTAMP WITH TIME ZONE
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_loans_status ON public.loans(status);
CREATE INDEX IF NOT EXISTS idx_loans_grade ON public.loans(risk_grade);
CREATE INDEX IF NOT EXISTS idx_pledges_lender ON public.pledges(lender_id);
CREATE INDEX IF NOT EXISTS idx_pledges_loan ON public.pledges(loan_id);
CREATE INDEX IF NOT EXISTS idx_secondary_status ON public.secondary_notes(status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pledges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.secondary_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.repayments ENABLE ROW LEVEL SECURITY;

-- Permissive public read access policies for marketplace browsing
CREATE POLICY "Allow public read access to profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to loans" ON public.loans FOR SELECT USING (true);
CREATE POLICY "Allow public read access to pledges" ON public.pledges FOR SELECT USING (true);
CREATE POLICY "Allow public read access to secondary notes" ON public.secondary_notes FOR SELECT USING (true);
CREATE POLICY "Allow public read access to repayments" ON public.repayments FOR SELECT USING (true);

-- Insert/Update policies for client app mutations
CREATE POLICY "Allow public insert to profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to profiles" ON public.profiles FOR UPDATE USING (true);
CREATE POLICY "Allow public insert to loans" ON public.loans FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to loans" ON public.loans FOR UPDATE USING (true);
CREATE POLICY "Allow public insert to pledges" ON public.pledges FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to secondary notes" ON public.secondary_notes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to secondary notes" ON public.secondary_notes FOR UPDATE USING (true);
CREATE POLICY "Allow public update to repayments" ON public.repayments FOR UPDATE USING (true);
