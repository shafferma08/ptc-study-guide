document.addEventListener('DOMContentLoaded', () => {
    
    // Add hover effects to all cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Subtle click feedback
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
    });

    // Box Model Interactive Demo Logic (if present)
    const boxDemo = document.querySelector('.box-model-demo-container');
    if (boxDemo) {
        // We can add more complex interactivity here later
        // For now, let's just make it pulse on click
        boxDemo.addEventListener('click', () => {
            boxDemo.classList.add('active');
            setTimeout(() => boxDemo.classList.remove('active'), 500);
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    console.log('PTC Study Guide App Loaded');
});
