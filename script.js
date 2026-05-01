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

// Email copy functionality and click handling
document.querySelectorAll('.email-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = "theopinem05@gmail.com";
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Visual feedback based on whether it's an icon or a button with text
            if (link.querySelector('span')) {
                const span = link.querySelector('span');
                const originalText = span.innerText;
                span.innerText = "Email Copied!";
                setTimeout(() => {
                    span.innerText = originalText;
                }, 2000);
            } else {
                // If it's just the icon, change its styling temporarily
                const originalBg = link.style.background;
                const originalColor = link.style.color;
                link.style.background = "rgba(16, 185, 129, 0.2)"; // green success
                link.style.color = "#10b981";
                setTimeout(() => {
                    link.style.background = originalBg;
                    link.style.color = originalColor;
                }, 2000);
            }
            
            // Try to open mail client as well
            setTimeout(() => {
                window.location.href = "mailto:" + email;
            }, 500);
        }).catch(() => {
            // Fallback if clipboard fails
            window.location.href = "mailto:" + email;
        });
    });
});