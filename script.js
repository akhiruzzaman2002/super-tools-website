// SuperTools - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    console.log('SuperTools loaded successfully!');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Add animation to tool cards on scroll
    const animateOnScroll = function() {
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize card animation styles
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll and on load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Simple counter animation for the hero section
    const counterAnimation = function() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(counterAnimation, 1);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    // Check if counters exist on the page
    if (document.querySelector('.counter')) {
        counterAnimation();
    }
    
    // Mobile menu toggle (if needed in the future)
    console.log('All JavaScript functionality loaded!');
});
