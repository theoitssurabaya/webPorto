// Initialize AOS (Animate On Scroll)
AOS.init({ duration: 1000, once: true, offset: 50 });

// Custom Cursor Implementation
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Desktop only cursor logic
if (window.matchMedia("(pointer: fine)").matches) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move core cursor instantly
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    // Smooth follower animation loop
    function animate() {
        // Easing factor
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
    }
    animate();

    // Hover effect on interactable elements
    const interactables = document.querySelectorAll('a, button, .project-card, .social-icon, .timeline-content, .skill-category, .cert-badge');
    
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0)`;
            follower.style.width = '50px';
            follower.style.height = '50px';
            follower.style.background = 'rgba(59, 130, 246, 0.1)';
            follower.style.borderColor = 'rgba(59, 130, 246, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
            follower.style.width = '30px';
            follower.style.height = '30px';
            follower.style.background = 'transparent';
            follower.style.borderColor = 'rgba(59, 130, 246, 0.5)';
        });
    });
}

// Interactive Project Card Glow
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Add blur effect to nav when scrolled
    const nav = document.querySelector('.nav-container');
    if (scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.85)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.7)';
        nav.style.boxShadow = 'var(--glass-shadow)';
    }
});