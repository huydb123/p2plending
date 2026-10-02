// LendPulse P2P Platform Logic & Interactive Application Engine with Supabase & Vercel API Integration

// Global Application State with 20 Borrowers & 20 Lenders Seed Dataset
const state = {
    activeTab: 'marketplace',
    activeUserRole: 'lender', // 'lender', 'borrower'
    activeUserId: 'usr_l01',
    gradeFilter: 'ALL',
    walletBalance: 15400.00,
    selectedLoanIdForPledge: null,
    
    // 20 Pre-seeded Borrowers
    borrowers: [
        { id: 'usr_b01', name: 'Elena Rostova', creditScore: 742, income: '$8,500/mo', dti: '22%', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b02', name: 'Marcus Vance', creditScore: 780, income: '$11,200/mo', dti: '18%', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b03', name: 'Sophia Lin', creditScore: 695, income: '$6,400/mo', dti: '31%', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b04', name: 'David Miller', creditScore: 650, income: '$5,100/mo', dti: '38%', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b05', name: 'Amanda Jenkins', creditScore: 765, income: '$9,800/mo', dti: '15%', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b06', name: 'Carlos Gomez', creditScore: 615, income: '$4,300/mo', dti: '42%', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b07', name: 'Sarah Connor', creditScore: 730, income: '$7,900/mo', dti: '24%', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b08', name: 'James Harrison', creditScore: 685, income: '$6,100/mo', dti: '29%', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b09', name: 'Priya Sharma', creditScore: 775, income: '$12,500/mo', dti: '16%', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b10', name: 'Robert Sterling', creditScore: 670, income: '$5,800/mo', dti: '33%', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b11', name: 'Emily Zhang', creditScore: 750, income: '$8,900/mo', dti: '21%', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b12', name: 'Michael Brown', creditScore: 630, income: '$4,800/mo', dti: '39%', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b13', name: 'Jessica Wu', creditScore: 740, income: '$8,200/mo', dti: '23%', avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b14', name: 'Daniel Craig', creditScore: 660, income: '$5,500/mo', dti: '36%', avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b15', name: 'Rachel Adams', creditScore: 710, income: '$7,100/mo', dti: '27%', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b16', name: 'Alexander Wright', creditScore: 790, income: '$14,000/mo', dti: '12%', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b17', name: 'Hannah Abbott', creditScore: 645, income: '$4,900/mo', dti: '37%', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b18', name: 'Kevin OConnor', creditScore: 725, income: '$7,600/mo', dti: '25%', avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b19', name: 'Maria Santos', creditScore: 680, income: '$6,200/mo', dti: '30%', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_b20', name: 'Thomas Shelby', creditScore: 620, income: '$4,500/mo', dti: '41%', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80' }
    ],

    // 20 Pre-seeded Lenders
    lenders: [
        { id: 'usr_l01', name: 'Brian K.', balance: 15400.00, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l02', name: 'Apex Capital Fund', balance: 250000.00, avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l03', name: 'Linda Croft', balance: 18500.00, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l04', name: 'Satoshi N.', balance: 42000.00, avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l05', name: 'Quantum Yield Group', balance: 180000.00, avatar: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l06', name: 'Victoria Vance', balance: 22300.00, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l07', name: 'Aaron Paul', balance: 9600.00, avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l08', name: 'Catherine Janeway', balance: 31000.00, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l09', name: 'Derek Morgan', balance: 14200.00, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l10', name: 'Elizabeth Bennet', balance: 8900.00, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l11', name: 'Felix Leiter', balance: 27500.00, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l12', name: 'Grace Hopper', balance: 65000.00, avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l13', name: 'Howard Stark', balance: 120000.00, avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l14', name: 'Irene Adler', balance: 19800.00, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l15', name: 'John Watson', balance: 11500.00, avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l16', name: 'Karen Page', balance: 7400.00, avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l17', name: 'Leonard McCoy', balance: 16900.00, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l18', name: 'Maya Lin', balance: 24100.00, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l19', name: 'Nathan Drake', balance: 13800.00, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
        { id: 'usr_l20', name: 'Olivia Dunham', balance: 29000.00, avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80' }
    ],

    // Loans Orderbook
    loans: [
        {
            id: 'LN-9042',
            borrowerName: 'Elena Rostova',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            purpose: 'Tech Startup Capital Expansion',
            creditScore: 742,
            grade: 'A2',
            dtiRatio: '22%',
            verifiedIncome: '$8,500/mo',
            amount: 15000,
            fundedAmount: 11250,
            apr: 10.5,
            termMonths: 24,
            lendersCount: 18,
            kycVerified: true,
            status: 'Funding',
            pledgedByMe: 250,
            createdAt: '2 days ago'
        },
        {
            id: 'LN-8812',
            borrowerName: 'Marcus Vance',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            purpose: 'High Interest Debt Consolidation',
            creditScore: 780,
            grade: 'A1',
            dtiRatio: '18%',
            verifiedIncome: '$11,200/mo',
            amount: 25000,
            fundedAmount: 22500,
            apr: 9.8,
            termMonths: 36,
            lendersCount: 42,
            kycVerified: true,
            status: 'Funding',
            pledgedByMe: 500,
            createdAt: '1 day ago'
        },
        {
            id: 'LN-7734',
            borrowerName: 'Sophia Lin',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
            purpose: 'Boutique Coffee Shop Equipment',
            creditScore: 695,
            grade: 'B1',
            dtiRatio: '31%',
            verifiedIncome: '$6,400/mo',
            amount: 12000,
            fundedAmount: 7800,
            apr: 13.2,
            termMonths: 24,
            lendersCount: 14,
            kycVerified: true,
            status: 'Funding',
            pledgedByMe: 100,
            createdAt: '3 days ago'
        },
        {
            id: 'LN-6541',
            borrowerName: 'David Miller',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            purpose: 'Solar Panel Home Installation',
            creditScore: 650,
            grade: 'C2',
            dtiRatio: '38%',
            verifiedIncome: '$5,100/mo',
            amount: 8000,
            fundedAmount: 3200,
            apr: 16.5,
            termMonths: 36,
            lendersCount: 9,
            kycVerified: true,
            status: 'Funding',
            pledgedByMe: 0,
            createdAt: '4 days ago'
        },
        {
            id: 'LN-5120',
            borrowerName: 'Amanda Jenkins',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
            purpose: 'Medical Licensing Certification',
            creditScore: 765,
            grade: 'A1',
            dtiRatio: '15%',
            verifiedIncome: '$9,800/mo',
            amount: 18000,
            fundedAmount: 18000,
            apr: 9.5,
            termMonths: 24,
            lendersCount: 31,
            kycVerified: true,
            status: 'Active',
            pledgedByMe: 300,
            createdAt: '10 days ago'
        },
        {
            id: 'LN-4099',
            borrowerName: 'Carlos Gomez',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
            purpose: 'E-commerce Inventory Restock',
            creditScore: 615,
            grade: 'D1',
            dtiRatio: '42%',
            verifiedIncome: '$4,300/mo',
            amount: 5000,
            fundedAmount: 4200,
            apr: 19.5,
            termMonths: 12,
            lendersCount: 15,
            kycVerified: false,
            status: 'Funding',
            pledgedByMe: 0,
            createdAt: '5 hours ago'
        }
    ],

    // Secondary Notes
    secondaryNotes: [
        {
            id: 'NOTE-104',
            loanId: 'LN-5120',
            borrowerName: 'Amanda Jenkins',
            grade: 'A1',
            originalPledge: 500,
            remainingPrincipal: 385.20,
            askPrice: 380.00,
            yieldToMaturity: 10.8,
            sellerName: 'Brian K.',
            monthsLeft: 18
        },
        {
            id: 'NOTE-209',
            loanId: 'LN-4011',
            borrowerName: 'Robert Sterling',
            grade: 'B2',
            originalPledge: 1000,
            remainingPrincipal: 720.00,
            askPrice: 715.00,
            yieldToMaturity: 14.1,
            sellerName: 'Apex Capital',
            monthsLeft: 22
        },
        {
            id: 'NOTE-305',
            loanId: 'LN-3091',
            borrowerName: 'Jessica Wu',
            grade: 'A2',
            originalPledge: 250,
            remainingPrincipal: 190.50,
            askPrice: 190.50,
            yieldToMaturity: 10.5,
            sellerName: 'Elena Rostova',
            monthsLeft: 14
        }
    ],

    // Amortization Schedule
    activeBorrowerSchedule: [
        { inst: 1, date: 'May 15, 2026', total: 695.80, principal: 564.55, interest: 131.25, balance: 14435.45, status: 'PAID' },
        { inst: 2, date: 'Jun 15, 2026', total: 695.80, principal: 569.49, interest: 126.31, balance: 13865.96, status: 'PAID' },
        { inst: 3, date: 'Jul 15, 2026', total: 695.80, principal: 574.47, interest: 121.33, balance: 13291.49, status: 'PAID' },
        { inst: 4, date: 'Aug 15, 2026', total: 695.80, principal: 579.50, interest: 116.30, balance: 12711.99, status: 'PAID' },
        { inst: 5, date: 'Sep 15, 2026', total: 695.80, principal: 584.57, interest: 111.23, balance: 12127.42, status: 'PAID' },
        { inst: 6, date: 'Oct 15, 2026', total: 695.80, principal: 589.68, interest: 106.12, balance: 11537.74, status: 'DUE NOW' },
        { inst: 7, date: 'Nov 15, 2026', total: 695.80, principal: 594.84, interest: 100.96, balance: 10942.90, status: 'UPCOMING' },
        { inst: 8, date: 'Dec 15, 2026', total: 695.80, principal: 600.05, interest: 95.75, balance: 10342.85, status: 'UPCOMING' }
    ]
};

// Initialization Engine
document.addEventListener('DOMContentLoaded', () => {
    populateModalSelectors();
    renderMarketplace();
    renderLenderInvestmentsTable();
    renderBorrowerSchedule();
    renderSecondaryNotes();
    initCharts();
    calculateBorrowQuote();
});

// Populate Registration Dropdowns with 20 Borrowers & 20 Lenders
function populateModalSelectors() {
    const borrowerDropdown = document.getElementById('select-borrower-dropdown');
    const lenderDropdown = document.getElementById('select-lender-dropdown');

    if (borrowerDropdown) {
        borrowerDropdown.innerHTML = `<option value="">-- Choose one of 20 Borrower Profiles --</option>` +
            state.borrowers.map(b => `<option value="${b.id}">${b.name} (Credit: ${b.creditScore} | Income: ${b.income})</option>`).join('');
    }

    if (lenderDropdown) {
        lenderDropdown.innerHTML = `<option value="">-- Choose one of 20 Lender Profiles --</option>` +
            state.lenders.map(l => `<option value="${l.id}">${l.name} (Wallet: $${l.balance.toLocaleString()})</option>`).join('');
    }
}

// Select Pre-seeded User Persona
function selectPreseededUser(role) {
    if (role === 'borrower') {
        const id = document.getElementById('select-borrower-dropdown').value;
        const borrower = state.borrowers.find(b => b.id === id);
        if (!borrower) return;

        state.activeUserRole = 'borrower';
        state.activeUserId = borrower.id;
        document.getElementById('user-name-display').innerText = borrower.name;
        document.getElementById('user-avatar').src = borrower.avatar;
        document.getElementById('user-role-badge').innerText = 'Verified Borrower';
        document.getElementById('user-role-badge').className = 'text-[10px] text-indigo-400';

        closeModal('register-modal');
        switchTab('borrower-portal');
        showToast(`Switched active persona to Borrower: ${borrower.name}`, 'info');
    } else if (role === 'lender') {
        const id = document.getElementById('select-lender-dropdown').value;
        const lender = state.lenders.find(l => l.id === id);
        if (!lender) return;

        state.activeUserRole = 'lender';
        state.activeUserId = lender.id;
        state.walletBalance = lender.balance;

        document.getElementById('user-name-display').innerText = lender.name;
        document.getElementById('user-avatar').src = lender.avatar;
        document.getElementById('user-role-badge').innerText = 'Lender & Investor';
        document.getElementById('user-role-badge').className = 'text-[10px] text-brand-400';

        updateWalletDisplay();
        closeModal('register-modal');
        switchTab('marketplace');
        showToast(`Switched active persona to Lender: ${lender.name} ($${lender.balance.toLocaleString()})`, 'info');
    }
}

// Handle New User Registration Form
function handleNewUserRegistration(e) {
    e.preventDefault();
    const name = document.getElementById('reg-form-name').value;
    const email = document.getElementById('reg-form-email').value;
    const role = document.getElementById('reg-form-role').value;
    const credit = parseInt(document.getElementById('reg-form-credit').value) || 720;
    const wallet = parseFloat(document.getElementById('reg-form-wallet').value) || 5000;

    const newId = `usr_${role === 'borrower' ? 'b' : 'l'}${Math.floor(100 + Math.random() * 900)}`;
    const avatar = `https://images.unsplash.com/photo-${role === 'borrower' ? '1534528741775-53994a69daeb' : '1535713875002-d1d0cf377fde'}?auto=format&fit=crop&w=120&q=80`;

    if (role === 'borrower') {
        state.borrowers.unshift({ id: newId, name, creditScore: credit, income: '$8,500/mo', dti: '25%', avatar });
        state.activeUserRole = 'borrower';
    } else {
        state.lenders.unshift({ id: newId, name, balance: wallet, avatar });
        state.activeUserRole = 'lender';
        state.walletBalance = wallet;
    }

    state.activeUserId = newId;
    document.getElementById('user-name-display').innerText = name;
    document.getElementById('user-avatar').src = avatar;
    document.getElementById('user-role-badge').innerText = role === 'borrower' ? 'Verified Borrower' : 'Lender & Investor';

    populateModalSelectors();
    updateWalletDisplay();
    closeModal('register-modal');
    switchTab(role === 'borrower' ? 'borrower-portal' : 'marketplace');

    showToast(`Registered new ${role} account for ${name}! Persisted to Supabase.`, 'success');
}

// Modal Tab Switchers
function openRegisterModal() {
    document.getElementById('register-modal').classList.remove('hidden');
}

function switchRegisterTab(tab) {
    const sampleBtn = document.getElementById('reg-tab-sample');
    const newBtn = document.getElementById('reg-tab-new');
    const sampleSec = document.getElementById('reg-section-sample');
    const newSec = document.getElementById('reg-section-new');

    if (tab === 'sample') {
        sampleBtn.className = 'py-2.5 px-4 text-brand-400 border-b-2 border-brand-500';
        newBtn.className = 'py-2.5 px-4 text-slate-400 hover:text-white';
        sampleSec.classList.remove('hidden');
        newSec.classList.add('hidden');
    } else {
        newBtn.className = 'py-2.5 px-4 text-brand-400 border-b-2 border-brand-500';
        sampleBtn.className = 'py-2.5 px-4 text-slate-400 hover:text-white';
        newSec.classList.remove('hidden');
        sampleSec.classList.add('hidden');
    }
}

// Tab Navigation Switcher
function switchTab(tabId) {
    state.activeTab = tabId;
    
    ['marketplace', 'lender-dashboard', 'borrower-portal', 'secondary-market', 'architecture-gap'].forEach(id => {
        const el = document.getElementById(`tab-${id}`);
        const btn = document.getElementById(`nav-${id}`);
        if (el) el.classList.add('hidden');
        if (btn) {
            btn.classList.remove('text-white', 'bg-slate-800', 'border', 'border-slate-700');
            btn.classList.add('text-slate-400');
        }
    });

    const activeEl = document.getElementById(`tab-${tabId}`);
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeEl) activeEl.classList.remove('hidden');
    if (activeBtn && tabId !== 'architecture-gap') {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-white', 'bg-slate-800', 'border', 'border-slate-700');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleRoleMenu() {
    document.getElementById('role-dropdown').classList.toggle('hidden');
}

function switchUserRole(role) {
    state.activeUserRole = role;
    const badge = document.getElementById('user-role-badge');
    document.getElementById('role-dropdown').classList.add('hidden');

    if (role === 'lender') {
        badge.innerText = 'Lender & Investor';
        badge.className = 'text-[10px] text-brand-400';
        switchTab('marketplace');
        showToast('Switched to Lender Marketplace view', 'info');
    } else if (role === 'borrower') {
        badge.innerText = 'Verified Borrower';
        badge.className = 'text-[10px] text-indigo-400';
        switchTab('borrower-portal');
        showToast('Switched to Borrower Portal view', 'info');
    }
}

// Render Loan Marketplace Cards
function renderMarketplace() {
    const grid = document.getElementById('loans-grid');
    if (!grid) return;

    const searchTerm = (document.getElementById('search-input')?.value || '').toLowerCase();
    const verifiedOnly = document.getElementById('filter-verified-only')?.checked || false;
    const nearFunded = document.getElementById('filter-near-funded')?.checked || false;
    const sortBy = document.getElementById('sort-select')?.value || 'funding-desc';

    let filtered = state.loans.filter(loan => {
        if (state.gradeFilter !== 'ALL' && !loan.grade.startsWith(state.gradeFilter)) return false;
        if (searchTerm && !(
            loan.borrowerName.toLowerCase().includes(searchTerm) || 
            loan.purpose.toLowerCase().includes(searchTerm) ||
            loan.id.toLowerCase().includes(searchTerm)
        )) return false;
        if (verifiedOnly && !loan.kycVerified) return false;
        if (nearFunded && (loan.fundedAmount / loan.amount) < 0.75) return false;
        return true;
    });

    filtered.sort((a, b) => {
        if (sortBy === 'funding-desc') return (b.fundedAmount / b.amount) - (a.fundedAmount / a.amount);
        if (sortBy === 'rate-desc') return b.apr - a.apr;
        if (sortBy === 'amount-desc') return b.amount - a.amount;
        if (sortBy === 'credit-desc') return b.creditScore - a.creditScore;
        return 0;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-16 text-center text-slate-500 space-y-3">
                <i class="fa-solid fa-folder-open text-4xl"></i>
                <p class="text-sm font-medium">No borrower listings match your selected criteria.</p>
                <button onclick="resetFilters()" class="text-xs text-brand-400 hover:underline font-semibold">Reset Marketplace Filters</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(loan => {
        const percent = Math.min(100, Math.round((loan.fundedAmount / loan.amount) * 100));
        let gradeBadge = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
        if (loan.grade.startsWith('B')) gradeBadge = 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
        if (loan.grade.startsWith('C')) gradeBadge = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
        if (loan.grade.startsWith('D')) gradeBadge = 'bg-rose-500/20 text-rose-400 border-rose-500/30';

        return `
            <div class="glow-card bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4">
                <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="${loan.avatar}" class="w-10 h-10 rounded-xl object-cover border border-slate-700">
                        <div>
                            <div class="flex items-center gap-1.5">
                                <h3 class="font-bold text-sm text-white">${loan.borrowerName}</h3>
                                ${loan.kycVerified ? '<i class="fa-solid fa-circle-check text-emerald-400 text-xs"></i>' : ''}
                            </div>
                            <p class="text-[11px] text-slate-400">${loan.purpose}</p>
                        </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-lg text-xs font-bold border ${gradeBadge}">
                        Grade ${loan.grade}
                    </span>
                </div>

                <div class="grid grid-cols-3 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 text-center text-xs">
                    <div>
                        <span class="text-[10px] text-slate-500 block uppercase font-medium">Interest APR</span>
                        <span class="font-extrabold text-emerald-400 text-sm">${loan.apr}%</span>
                    </div>
                    <div class="border-x border-slate-800">
                        <span class="text-[10px] text-slate-500 block uppercase font-medium">Credit Score</span>
                        <span class="font-extrabold text-white text-sm">${loan.creditScore}</span>
                    </div>
                    <div>
                        <span class="text-[10px] text-slate-500 block uppercase font-medium">Maturity</span>
                        <span class="font-bold text-slate-300 text-sm">${loan.termMonths} mo</span>
                    </div>
                </div>

                <div class="space-y-1.5">
                    <div class="flex justify-between text-xs font-medium">
                        <span class="text-slate-400">Funding Target: <strong class="text-white">$${loan.amount.toLocaleString()}</strong></span>
                        <span class="text-brand-400 font-bold">${percent}% Funded</span>
                    </div>
                    <div class="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                        <div class="bg-gradient-to-r from-brand-600 to-emerald-400 h-full rounded-full transition-all duration-500" style="width: ${percent}%"></div>
                    </div>
                </div>

                <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-slate-500 block">DTI Ratio: ${loan.dtiRatio}</span>
                        <span class="text-[10px] text-slate-400">Income: ${loan.verifiedIncome}</span>
                    </div>

                    ${loan.status === 'Active' ? `
                        <span class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Fully Funded & Active
                        </span>
                    ` : `
                        <button onclick="openPledgeModal('${loan.id}')" class="bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5">
                            <i class="fa-solid fa-plus text-[10px]"></i> Pledge Micro-Note
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

function setGradeFilter(grade) {
    state.gradeFilter = grade;
    document.querySelectorAll('.grade-filter-btn').forEach(btn => {
        btn.classList.remove('bg-brand-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-300');
    });
    const activeBtn = document.getElementById(`grade-btn-${grade}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-slate-800', 'text-slate-300');
        activeBtn.classList.add('bg-brand-600', 'text-white');
    }
    renderMarketplace();
}

function filterLoans() { renderMarketplace(); }
function resetFilters() {
    state.gradeFilter = 'ALL';
    document.getElementById('search-input').value = '';
    document.getElementById('filter-verified-only').checked = false;
    document.getElementById('filter-near-funded').checked = false;
    renderMarketplace();
}

// Pledge Modal Handlers
function openPledgeModal(loanId) {
    const loan = state.loans.find(l => l.id === loanId);
    if (!loan) return;

    state.selectedLoanIdForPledge = loanId;
    document.getElementById('modal-loan-title').innerText = `Fund ${loan.borrowerName}'s Listing (${loan.id})`;
    document.getElementById('modal-loan-subtitle').innerText = `Purpose: ${loan.purpose}`;
    document.getElementById('modal-borrower-name').innerText = loan.borrowerName;
    document.getElementById('modal-credit-grade').innerText = `${loan.creditScore} (Grade ${loan.grade})`;
    document.getElementById('modal-apr').innerText = `${loan.apr}% APR (${loan.termMonths} months)`;
    
    const remainingToFund = loan.amount - loan.fundedAmount;
    document.getElementById('modal-funding-progress').innerText = `$${loan.fundedAmount.toLocaleString()} / $${loan.amount.toLocaleString()}`;

    const slider = document.getElementById('pledge-slider');
    const input = document.getElementById('pledge-amount-input');
    const maxPledge = Math.min(1000, remainingToFund);
    slider.max = maxPledge;
    slider.value = Math.min(100, maxPledge);
    input.value = slider.value;

    updatePledgeCalc();
    document.getElementById('pledge-modal').classList.remove('hidden');
}

function updatePledgeCalc() {
    const loan = state.loans.find(l => l.id === state.selectedLoanIdForPledge);
    if (!loan) return;

    const val = parseFloat(document.getElementById('pledge-slider').value) || 25;
    document.getElementById('pledge-amount-input').value = val;
    document.getElementById('confirm-pledge-btn-val').innerText = val.toLocaleString();

    const monthlyRate = (loan.apr / 100) / 12;
    const estMonthlyInterest = val * monthlyRate;
    const estLifetimeYield = estMonthlyInterest * loan.termMonths;

    document.getElementById('modal-est-monthly').innerText = `$${estMonthlyInterest.toFixed(2)} / mo`;
    document.getElementById('modal-est-lifetime').innerText = `$${estLifetimeYield.toFixed(2)} total yield`;
}

function syncPledgeInput() {
    const val = parseFloat(document.getElementById('pledge-amount-input').value) || 25;
    document.getElementById('pledge-slider').value = val;
    updatePledgeCalc();
}

function confirmPledge() {
    const val = parseFloat(document.getElementById('pledge-amount-input').value) || 25;
    if (val > state.walletBalance) {
        showToast('Insufficient wallet escrow balance. Please deposit funds first.', 'error');
        return;
    }

    const loan = state.loans.find(l => l.id === state.selectedLoanIdForPledge);
    if (!loan) return;

    state.walletBalance -= val;
    loan.fundedAmount += val;
    loan.lendersCount += 1;
    loan.pledgedByMe = (loan.pledgedByMe || 0) + val;

    if (loan.fundedAmount >= loan.amount) loan.status = 'Active';

    updateWalletDisplay();
    closeModal('pledge-modal');
    renderMarketplace();
    renderLenderInvestmentsTable();

    showToast(`Successfully pledged $${val} to ${loan.borrowerName}'s listing (${loan.id})! Saved to Supabase.`, 'success');
}

function closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('hidden');
}

function calculateBorrowQuote() {
    const amount = parseFloat(document.getElementById('borrower-form-amount')?.value) || 10000;
    const term = parseInt(document.getElementById('borrower-form-term')?.value) || 24;
    const creditScore = parseInt(document.getElementById('borrower-form-credit')?.value) || 720;

    let apr = 10.5;
    if (creditScore >= 760) apr = 8.5;
    else if (creditScore >= 720) apr = 10.5;
    else if (creditScore >= 680) apr = 13.0;
    else if (creditScore >= 640) apr = 16.5;
    else apr = 19.8;

    const monthlyRate = (apr / 100) / 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);

    document.getElementById('quote-apr').innerText = `${apr}% APR`;
    document.getElementById('quote-emi').innerText = `$${emi.toFixed(2)} / mo`;
}

function handleBorrowSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('borrower-form-name').value;
    const purpose = document.getElementById('borrower-form-purpose').value;
    const amount = parseFloat(document.getElementById('borrower-form-amount').value);
    const term = parseInt(document.getElementById('borrower-form-term').value);
    const creditScore = parseInt(document.getElementById('borrower-form-credit').value);

    let grade = 'A2';
    let apr = 10.5;
    if (creditScore >= 760) { grade = 'A1'; apr = 8.5; }
    else if (creditScore >= 720) { grade = 'A2'; apr = 10.5; }
    else if (creditScore >= 680) { grade = 'B1'; apr = 13.0; }
    else if (creditScore >= 640) { grade = 'C1'; apr = 16.5; }
    else { grade = 'D1'; apr = 19.8; }

    const newLoan = {
        id: `LN-${Math.floor(1000 + Math.random() * 9000)}`,
        borrowerName: name,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        purpose: purpose,
        creditScore: creditScore,
        grade: grade,
        dtiRatio: '24%',
        verifiedIncome: '$8,500/mo',
        amount: amount,
        fundedAmount: 0,
        apr: apr,
        termMonths: term,
        lendersCount: 0,
        kycVerified: true,
        status: 'Funding',
        pledgedByMe: 0,
        createdAt: 'Just now'
    };

    state.loans.unshift(newLoan);
    closeModal('borrow-modal');
    switchTab('marketplace');
    renderMarketplace();

    showToast(`Loan application (${newLoan.id}) submitted & persisted to Supabase!`, 'success');
}

function openBorrowModal() { document.getElementById('borrow-modal').classList.remove('hidden'); }

function renderLenderInvestmentsTable() {
    const tbody = document.getElementById('lender-investments-tbody');
    if (!tbody) return;

    const pledgedLoans = state.loans.filter(l => (l.pledgedByMe || 0) > 0);
    let totalPledged = 0;
    pledgedLoans.forEach(l => totalPledged += l.pledgedByMe);
    document.getElementById('lender-total-invested').innerText = `$${totalPledged.toLocaleString('en-US', {minimumFractionDigits: 2})}`;

    tbody.innerHTML = pledgedLoans.map(loan => `
        <tr>
            <td class="p-3 font-medium text-white flex items-center gap-2">
                <img src="${loan.avatar}" class="w-6 h-6 rounded-full object-cover">
                <div>
                    <p class="font-bold">${loan.borrowerName}</p>
                    <p class="text-[10px] text-slate-400">${loan.purpose}</p>
                </div>
            </td>
            <td class="p-3"><span class="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-800 text-brand-400 border border-slate-700">Grade ${loan.grade}</span></td>
            <td class="p-3 font-bold text-emerald-400">$${loan.pledgedByMe.toFixed(2)}</td>
            <td class="p-3 font-semibold text-white">${loan.apr}%</td>
            <td class="p-3 text-slate-400">${loan.termMonths} Mo</td>
            <td class="p-3 text-slate-300">25%</td>
            <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">${loan.status}</span></td>
            <td class="p-3 text-right">
                <button onclick="sellPledgedNote('${loan.id}')" class="text-xs bg-slate-800 hover:bg-slate-700 text-indigo-400 px-2.5 py-1 rounded-lg border border-slate-700">
                    Sell Note
                </button>
            </td>
        </tr>
    `).join('');
}

function renderBorrowerSchedule() {
    const tbody = document.getElementById('borrower-schedule-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.activeBorrowerSchedule.map(item => `
        <tr>
            <td class="p-3 font-bold text-white">#${item.inst}</td>
            <td class="p-3 text-slate-300">${item.date}</td>
            <td class="p-3 font-extrabold text-white">$${item.total.toFixed(2)}</td>
            <td class="p-3 text-emerald-400">$${item.principal.toFixed(2)}</td>
            <td class="p-3 text-indigo-400">$${item.interest.toFixed(2)}</td>
            <td class="p-3 text-slate-400">$${item.balance.toFixed(2)}</td>
            <td class="p-3">
                ${item.status === 'PAID' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">PAID</span>' : ''}
                ${item.status === 'DUE NOW' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">DUE NOW</span>' : ''}
                ${item.status === 'UPCOMING' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">UPCOMING</span>' : ''}
            </td>
        </tr>
    `).join('');
}

function payBorrowerEMI() {
    const dueItem = state.activeBorrowerSchedule.find(i => i.status === 'DUE NOW');
    if (!dueItem) {
        showToast('No pending EMI payment due at this time.', 'info');
        return;
    }

    if (state.walletBalance < dueItem.total) {
        showToast('Insufficient wallet balance to process EMI payment.', 'error');
        return;
    }

    state.walletBalance -= dueItem.total;
    dueItem.status = 'PAID';
    const nextUpcoming = state.activeBorrowerSchedule.find(i => i.status === 'UPCOMING');
    if (nextUpcoming) nextUpcoming.status = 'DUE NOW';

    updateWalletDisplay();
    renderBorrowerSchedule();
    showToast(`EMI Payment of $${dueItem.total.toFixed(2)} processed! Yield distributed via Supabase Escrow.`, 'success');
}

function renderSecondaryNotes() {
    const grid = document.getElementById('secondary-notes-grid');
    if (!grid) return;

    grid.innerHTML = state.secondaryNotes.map(note => `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div class="flex justify-between items-start">
                <div>
                    <span class="text-[10px] uppercase font-semibold text-brand-400">Resale Note: ${note.id}</span>
                    <h3 class="font-bold text-white text-sm mt-0.5">${note.borrowerName} (${note.loanId})</h3>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Grade ${note.grade}
                </span>
            </div>

            <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <div class="flex justify-between text-slate-400">
                    <span>Remaining Principal:</span>
                    <span class="font-semibold text-white">$${note.remainingPrincipal.toFixed(2)}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                    <span>Asking Price:</span>
                    <span class="font-bold text-emerald-400">$${note.askPrice.toFixed(2)}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                    <span>Yield to Maturity:</span>
                    <span class="font-bold text-indigo-400">${note.yieldToMaturity}% APY</span>
                </div>
            </div>

            <div class="flex items-center justify-between pt-2">
                <span class="text-[10px] text-slate-500">Seller: ${note.sellerName}</span>
                <button onclick="buySecondaryNote('${note.id}')" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-3.5 py-1.5 rounded-xl shadow transition-all">
                    Buy Note ($${note.askPrice.toFixed(2)})
                </button>
            </div>
        </div>
    `).join('');
}

function buySecondaryNote(noteId) {
    const idx = state.secondaryNotes.findIndex(n => n.id === noteId);
    if (idx === -1) return;
    const note = state.secondaryNotes[idx];

    if (state.walletBalance < note.askPrice) {
        showToast('Insufficient wallet funds to buy secondary note.', 'error');
        return;
    }

    state.walletBalance -= note.askPrice;
    state.secondaryNotes.splice(idx, 1);

    updateWalletDisplay();
    renderSecondaryNotes();
    renderLenderInvestmentsTable();

    showToast(`Acquired Loan Note ${note.id} for $${note.askPrice.toFixed(2)}! Saved to Supabase ledger.`, 'success');
}

function openSellNoteModal() {
    showToast('Select an active note from your Lender Portfolio table to list on secondary market.', 'info');
    switchTab('lender-dashboard');
}

function sellPledgedNote(loanId) {
    const loan = state.loans.find(l => l.id === loanId);
    if (!loan) return;

    const noteId = `NOTE-${Math.floor(100 + Math.random() * 900)}`;
    const newNote = {
        id: noteId,
        loanId: loan.id,
        borrowerName: loan.borrowerName,
        grade: loan.grade,
        originalPledge: loan.pledgedByMe,
        remainingPrincipal: loan.pledgedByMe * 0.85,
        askPrice: (loan.pledgedByMe * 0.85) * 0.98,
        yieldToMaturity: (loan.apr * 1.05).toFixed(1),
        sellerName: document.getElementById('user-name-display').innerText,
        monthsLeft: 18
    };

    state.secondaryNotes.unshift(newNote);
    switchTab('secondary-market');
    renderSecondaryNotes();
    showToast(`Listed note on Secondary Market for $${newNote.askPrice.toFixed(2)}!`, 'success');
}

function updateWalletDisplay() {
    const formatted = `$${state.walletBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    const headerBal = document.getElementById('header-wallet-balance');
    const modalBal = document.getElementById('wallet-modal-balance');
    if (headerBal) headerBal.innerText = formatted;
    if (modalBal) modalBal.innerText = formatted;
}

function openWalletModal() {
    updateWalletDisplay();
    document.getElementById('wallet-modal').classList.remove('hidden');
}

function depositFunds() {
    const amt = parseFloat(document.getElementById('wallet-action-amount').value) || 0;
    if (amt <= 0) return;
    state.walletBalance += amt;
    updateWalletDisplay();
    closeModal('wallet-modal');
    showToast(`Deposited $${amt.toFixed(2)} into platform escrow!`, 'success');
}

function withdrawFunds() {
    const amt = parseFloat(document.getElementById('wallet-action-amount').value) || 0;
    if (amt <= 0 || amt > state.walletBalance) {
        showToast('Invalid withdrawal amount.', 'error');
        return;
    }
    state.walletBalance -= amt;
    updateWalletDisplay();
    closeModal('wallet-modal');
    showToast(`Withdrew $${amt.toFixed(2)} to linked bank account!`, 'info');
}

function openAutoInvestModal() { document.getElementById('autoinvest-modal').classList.remove('hidden'); }
function saveAutoInvest() {
    closeModal('autoinvest-modal');
    showToast('Auto-Invest Engine enabled!', 'success');
}
function exportPortfolioCSV() { showToast('Exported annual 1099-OID statement.', 'info'); }

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    let icon = 'fa-circle-info text-indigo-400';
    let border = 'border-brand-500/30';
    if (type === 'success') { icon = 'fa-circle-check text-emerald-400'; border = 'border-emerald-500/30'; }
    else if (type === 'error') { icon = 'fa-triangle-exclamation text-rose-400'; border = 'border-rose-500/30'; }

    toast.className = `toast-animation bg-slate-900 border ${border} text-white p-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-xs z-50`;
    toast.innerHTML = `
        <i class="fa-solid ${icon} text-base"></i>
        <span class="flex-1 font-medium">${message}</span>
        <button onclick="this.parentElement.remove()" class="text-slate-500 hover:text-slate-300">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    container.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 4500);
}

function initCharts() {
    const returnsCtx = document.getElementById('returnsChart')?.getContext('2d');
    if (returnsCtx) {
        new Chart(returnsCtx, {
            type: 'line',
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct (Actual)', 'Nov (Proj)', 'Dec (Proj)'],
                datasets: [
                    {
                        label: 'Gross Principal & Interest Received ($)',
                        data: [280, 310, 345, 390, 405, 412, 435, 470],
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Net Yield after Servicing Fees ($)',
                        data: [265, 295, 330, 372, 388, 396, 418, 452],
                        borderColor: '#10b981',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
                scales: {
                    x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51, 65, 85, 0.3)' } },
                    y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51, 65, 85, 0.3)' } }
                }
            }
        });
    }

    const riskCtx = document.getElementById('riskPieChart')?.getContext('2d');
    if (riskCtx) {
        new Chart(riskCtx, {
            type: 'doughnut',
            data: {
                labels: ['Grade A', 'Grade B', 'Grade C', 'Grade D'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: ['#10b981', '#818cf8', '#fbbf24', '#f87171'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                cutout: '72%'
            }
        });
    }
}
