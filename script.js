// Main JavaScript for SuperTools Website

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('SuperTools website loaded successfully!');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // Example function for future tool implementations
    window.generateTempEmail = function() {
        const domains = ['1secmail.com', 'temp-mail.org', 'guerrillamail.com'];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        const username = Math.random().toString(36).substring(2, 10);
        return `${username}@${randomDomain}`;
    };

    // Console greeting
    console.log('%c🚀 SuperTools - All Your Tools in One Place!', 
        'color: #2563eb; font-size: 16px; font-weight: bold;');
});

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Theme switcher (for future implementation)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Check saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
      }
