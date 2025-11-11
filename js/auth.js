// Simple Authentication System for Trading Signal Website
console.log('🔐 Auth system loaded');

// Login function
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showMessage('❌ Username dan password harus diisi!', 'error');
        return;
    }
    
    const demoAccounts = {
        'trader': '123',
        'admin': 'admin123',
        'user': 'user123'
    };
    
    if (demoAccounts[username] && demoAccounts[username] === password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        showMessage('✅ Login berhasil! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html?login=success';
        }, 1000);
        
    } else {
        showMessage('❌ Login gagal! Coba: trader / 123', 'error');
    }
}

// Show message function
function showMessage(message, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;
    messageDiv.textContent = message;
    
    if (type === 'error') {
        messageDiv.style.background = '#ff4444';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.style.background = '#00C851';
        messageDiv.style.color = 'white';
    }
    
    messageDiv.style.padding = '12px';
    messageDiv.style.margin = '15px 0';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontWeight = 'bold';
    
    const form = document.querySelector('.login-form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form.nextSibling);
    }
}

// Register function
function register() {
    showMessage('📝 Fitur registrasi akan datang! Gunakan akun demo: trader / 123', 'info');
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
    alert('👋 Logout berhasil!');
    window.location.href = 'index.html';
}

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

// Auto-check auth
if (window.location.pathname.includes('dashboard.html')) {
    checkAuth();
}

console.log('✅ Auth system ready');
