// Simple Authentication System for Trading Signal Website
// Trading Signal Pro - AI Powered Signals

console.log('🔐 Auth system loaded');

// Login function
function login(event) {
    event.preventDefault(); // Prevent form reload
    
    console.log('🚀 Login attempt...');
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!username || !password) {
        showMessage('❌ Username dan password harus diisi!', 'error');
        return;
    }
    
    // Demo accounts - BISA DITAMBAHIN
    const demoAccounts = {
        'trader': '123',
        'admin': 'admin123',
        'user': 'user123',
        'gold': 'gold123'
    };
    
    // Check credentials
    if (demoAccounts[username] && demoAccounts[username] === password) {
        // Save to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('loginTime', new Date().toISOString());
        
        showMessage('✅ Login berhasil! Redirecting...', 'success');
        
        // Redirect to dashboard after 1 second
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
        
    } else {
        showMessage('❌ Login gagal! Coba:\nUsername: trader\nPassword: 123', 'error');
    }
}

// Show message function
function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 12px;
        margin: 15px 0;
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        ${type === 'error' ? 'background: #ff4444; color: white;' : 'background: #00C851; color: white;'}
    `;
    
    // Insert after form
    const form = document.querySelector('.login-form');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
}

// Register function (placeholder)
function register() {
    showMessage('📝 Fitur registrasi akan datang! Gunakan akun demo:\nUsername: trader\nPassword: 123', 'info');
}

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');
    showMessage('👋 Logout berhasil!', 'success');
    
    setTimeout(() => {
    console.log('🔄 Redirecting to dashboard...');
    window.location.href = 'https://gavinflino.github.io/trading-signal-website/dashboard.html';
}, 1000);

// Display username if logged in
function displayUsername() {
    const username = localStorage.getItem('username');
    if (username) {
        const userElements = document.querySelectorAll('.username-display');
        userElements.forEach(element => {
            element.textContent = username;
        });
    }
}

// Auto-check auth on pages that require login
if (window.location.pathname.includes('dashboard.html') || 
    window.location.pathname.includes('bot-selection.html') ||
    window.location.pathname.includes('signal-page.html')) {
    checkAuth();
}

console.log('✅ Auth system ready');
