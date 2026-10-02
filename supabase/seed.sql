-- Seed Dataset for LendPulse P2P Platform
-- Contains 20 Borrowers, 20 Lenders, Marketplace Loans, Micro-Pledges, Secondary Notes, and Repayment Ledgers.

-- Clear existing data if needed
TRUNCATE TABLE public.repayments, public.secondary_notes, public.pledges, public.loans, public.profiles CASCADE;

-- 1. Insert 20 Borrowers
INSERT INTO public.profiles (id, full_name, email, role, avatar_url, credit_score, verified_income, dti_ratio, wallet_balance) VALUES
('usr_b01', 'Elena Rostova', 'elena.rostova@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', 742, 8500.00, '22%', 2450.00),
('usr_b02', 'Marcus Vance', 'marcus.vance@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', 780, 11200.00, '18%', 5100.00),
('usr_b03', 'Sophia Lin', 'sophia.lin@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80', 695, 6400.00, '31%', 1800.00),
('usr_b04', 'David Miller', 'david.miller@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', 650, 5100.00, '38%', 1200.00),
('usr_b05', 'Amanda Jenkins', 'amanda.jenkins@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80', 765, 9800.00, '15%', 3400.00),
('usr_b06', 'Carlos Gomez', 'carlos.gomez@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80', 615, 4300.00, '42%', 850.00),
('usr_b07', 'Sarah Connor', 'sarah.connor@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', 730, 7900.00, '24%', 2900.00),
('usr_b08', 'James Harrison', 'james.harrison@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80', 685, 6100.00, '29%', 1650.00),
('usr_b09', 'Priya Sharma', 'priya.sharma@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80', 775, 12500.00, '16%', 6200.00),
('usr_b10', 'Robert Sterling', 'robert.sterling@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80', 670, 5800.00, '33%', 1400.00),
('usr_b11', 'Emily Zhang', 'emily.zhang@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80', 750, 8900.00, '21%', 3100.00),
('usr_b12', 'Michael Brown', 'michael.brown@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80', 630, 4800.00, '39%', 950.00),
('usr_b13', 'Jessica Wu', 'jessica.wu@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&q=80', 740, 8200.00, '23%', 2750.00),
('usr_b14', 'Daniel Craig', 'daniel.craig@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80', 660, 5500.00, '36%', 1300.00),
('usr_b15', 'Rachel Adams', 'rachel.adams@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80', 710, 7100.00, '27%', 2100.00),
('usr_b16', 'Alexander Wright', 'alexander.wright@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80', 790, 14000.00, '12%', 8500.00),
('usr_b17', 'Hannah Abbott', 'hannah.abbott@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&q=80', 645, 4900.00, '37%', 1100.00),
('usr_b18', 'Kevin OConnor', 'kevin.oconnor@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=120&q=80', 725, 7600.00, '25%', 2400.00),
('usr_b19', 'Maria Santos', 'maria.santos@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80', 680, 6200.00, '30%', 1700.00),
('usr_b20', 'Thomas Shelby', 'thomas.shelby@p2pdemo.com', 'borrower', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80', 620, 4500.00, '41%', 900.00);

-- 2. Insert 20 Lenders
INSERT INTO public.profiles (id, full_name, email, role, avatar_url, credit_score, verified_income, dti_ratio, wallet_balance) VALUES
('usr_l01', 'Brian K.', 'brian.k@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80', 780, 0.00, '0%', 15400.00),
('usr_l02', 'Apex Capital Fund', 'apex.capital@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80', 820, 0.00, '0%', 250000.00),
('usr_l03', 'Linda Croft', 'linda.croft@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80', 760, 0.00, '0%', 18500.00),
('usr_l04', 'Satoshi N.', 'satoshi.n@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=120&q=80', 850, 0.00, '0%', 42000.00),
('usr_l05', 'Quantum Yield Group', 'quantum.yield@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80', 810, 0.00, '0%', 180000.00),
('usr_l06', 'Victoria Vance', 'victoria.vance@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80', 770, 0.00, '0%', 22300.00),
('usr_l07', 'Aaron Paul', 'aaron.paul@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80', 740, 0.00, '0%', 9600.00),
('usr_l08', 'Catherine Janeway', 'catherine.janeway@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80', 790, 0.00, '0%', 31000.00),
('usr_l09', 'Derek Morgan', 'derek.morgan@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', 750, 0.00, '0%', 14200.00),
('usr_l10', 'Elizabeth Bennet', 'elizabeth.bennet@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', 730, 0.00, '0%', 8900.00),
('usr_l11', 'Felix Leiter', 'felix.leiter@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', 765, 0.00, '0%', 27500.00),
('usr_l12', 'Grace Hopper', 'grace.hopper@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80', 830, 0.00, '0%', 65000.00),
('usr_l13', 'Howard Stark', 'howard.stark@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80', 840, 0.00, '0%', 120000.00),
('usr_l14', 'Irene Adler', 'irene.adler@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', 780, 0.00, '0%', 19800.00),
('usr_l15', 'John Watson', 'john.watson@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80', 720, 0.00, '0%', 11500.00),
('usr_l16', 'Karen Page', 'karen.page@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&q=80', 710, 0.00, '0%', 7400.00),
('usr_l17', 'Leonard McCoy', 'leonard.mccoy@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80', 755, 0.00, '0%', 16900.00),
('usr_l18', 'Maya Lin', 'maya.lin@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80', 775, 0.00, '0%', 24100.00),
('usr_l19', 'Nathan Drake', 'nathan.drake@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80', 745, 0.00, '0%', 13800.00),
('usr_l20', 'Olivia Dunham', 'olivia.dunham@p2pdemo.com', 'lender', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80', 795, 0.00, '0%', 29000.00);

-- 3. Insert Borrower Loans
INSERT INTO public.loans (id, borrower_id, purpose, requested_amount, funded_amount, apr, term_months, risk_grade, status, kyc_verified) VALUES
('LN-9042', 'usr_b01', 'Tech Startup Capital Expansion', 15000.00, 11250.00, 10.50, 24, 'A2', 'Funding', true),
('LN-8812', 'usr_b02', 'High Interest Debt Consolidation', 25000.00, 22500.00, 9.80, 36, 'A1', 'Funding', true),
('LN-7734', 'usr_b03', 'Boutique Coffee Shop Equipment', 12000.00, 7800.00, 13.20, 24, 'B1', 'Funding', true),
('LN-6541', 'usr_b04', 'Solar Panel Home Installation', 8000.00, 3200.00, 16.50, 36, 'C2', 'Funding', true),
('LN-5120', 'usr_b05', 'Medical Licensing Certification', 18000.00, 18000.00, 9.50, 24, 'A1', 'Active', true),
('LN-4099', 'usr_b06', 'E-commerce Inventory Restock', 5000.00, 4200.00, 19.50, 12, 'D1', 'Funding', false),
('LN-3105', 'usr_b07', 'Home Kitchen Renovation', 14000.00, 10500.00, 10.80, 36, 'A2', 'Funding', true),
('LN-2041', 'usr_b08', 'Automotive Repair & Upgrades', 6500.00, 3900.00, 13.80, 18, 'B2', 'Funding', true),
('LN-1090', 'usr_b09', 'Commercial Real Estate Lease', 35000.00, 35000.00, 8.50, 48, 'A1', 'Active', true),
('LN-9011', 'usr_b10', 'Credit Card Refinancing', 9500.00, 5700.00, 14.20, 24, 'B2', 'Funding', true),
('LN-8022', 'usr_b11', 'Data Science Bootcamp Tuition', 11000.00, 8800.00, 10.20, 24, 'A2', 'Funding', true),
('LN-7033', 'usr_b12', 'Small Business Working Capital', 7000.00, 2100.00, 17.80, 12, 'C3', 'Funding', false),
('LN-6044', 'usr_b13', 'Dental Surgery & Healthcare', 13500.00, 13500.00, 10.50, 24, 'A2', 'Active', true),
('LN-5055', 'usr_b14', 'Green Greenhouse Agriculture', 10000.00, 4500.00, 15.50, 36, 'C1', 'Funding', true),
('LN-4066', 'usr_b15', 'Professional Studio Camera Rig', 8500.00, 6800.00, 12.50, 18, 'B1', 'Funding', true),
('LN-3077', 'usr_b16', 'Executive MBA Tuition', 28000.00, 28000.00, 8.20, 36, 'A1', 'Active', true),
('LN-2088', 'usr_b17', 'HVAC Air Conditioning Replacement', 6000.00, 1800.00, 16.80, 24, 'C2', 'Funding', true),
('LN-1099', 'usr_b18', 'Roof Leak Emergency Repair', 9000.00, 7200.00, 11.20, 24, 'A2', 'Funding', true),
('LN-9100', 'usr_b19', 'Handcrafted Jewelry Inventory', 7500.00, 4500.00, 13.50, 18, 'B2', 'Funding', true),
('LN-8111', 'usr_b20', 'Used Commercial Delivery Van', 12000.00, 3600.00, 18.90, 36, 'D1', 'Funding', false);

-- 4. Insert Micro-Note Pledges by Lenders
INSERT INTO public.pledges (id, lender_id, loan_id, pledge_amount, monthly_yield, status) VALUES
('PLG-001', 'usr_l01', 'LN-9042', 250.00, 2.18, 'active'),
('PLG-002', 'usr_l02', 'LN-8812', 5000.00, 40.83, 'active'),
('PLG-003', 'usr_l03', 'LN-7734', 500.00, 5.50, 'active'),
('PLG-004', 'usr_l04', 'LN-5120', 1000.00, 7.91, 'active'),
('PLG-005', 'usr_l05', 'LN-1090', 10000.00, 70.83, 'active'),
('PLG-006', 'usr_l06', 'LN-3077', 2500.00, 17.08, 'active'),
('PLG-007', 'usr_l07', 'LN-9042', 100.00, 0.87, 'active'),
('PLG-008', 'usr_l08', 'LN-6044', 1500.00, 13.12, 'active'),
('PLG-009', 'usr_l09', 'LN-8812', 1000.00, 8.16, 'active'),
('PLG-010', 'usr_l10', 'LN-7734', 250.00, 2.75, 'active');

-- 5. Insert Secondary Market Resale Notes
INSERT INTO public.secondary_notes (id, seller_id, loan_id, pledge_id, remaining_principal, ask_price, yield_to_maturity, status) VALUES
('NOTE-104', 'usr_l01', 'LN-5120', 'PLG-004', 385.20, 380.00, 10.80, 'listed'),
('NOTE-209', 'usr_l02', 'LN-9011', NULL, 720.00, 715.00, 14.10, 'listed'),
('NOTE-305', 'usr_l03', 'LN-6044', NULL, 190.50, 190.50, 10.50, 'listed');

-- 6. Insert Borrower Repayment Schedule Ledger (LN-9042)
INSERT INTO public.repayments (loan_id, installment_num, due_date, total_amount, principal_amount, interest_amount, remaining_balance, status) VALUES
('LN-9042', 1, '2026-05-15', 695.80, 564.55, 131.25, 14435.45, 'PAID'),
('LN-9042', 2, '2026-06-15', 695.80, 569.49, 126.31, 13865.96, 'PAID'),
('LN-9042', 3, '2026-07-15', 695.80, 574.47, 121.33, 13291.49, 'PAID'),
('LN-9042', 4, '2026-08-15', 695.80, 579.50, 116.30, 12711.99, 'PAID'),
('LN-9042', 5, '2026-09-15', 695.80, 584.57, 111.23, 12127.42, 'PAID'),
('LN-9042', 6, '2026-10-15', 695.80, 589.68, 106.12, 11537.74, 'DUE NOW'),
('LN-9042', 7, '2026-11-15', 695.80, 594.84, 100.96, 10942.90, 'UPCOMING'),
('LN-9042', 8, '2026-12-15', 695.80, 600.05, 95.75, 10342.85, 'UPCOMING');
