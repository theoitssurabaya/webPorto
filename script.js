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
        
        // Background parallax effect
        const moveX = (mouseX / window.innerWidth - 0.5) * 30;
        const moveY = (mouseY / window.innerHeight - 0.5) * 30;
        document.body.style.setProperty('--mouse-x-parallax', `${moveX}px`);
        document.body.style.setProperty('--mouse-y-parallax', `${moveY}px`);
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
        nav.style.background = 'rgba(17, 24, 39, 0.85)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(17, 24, 39, 0.6)';
        nav.style.boxShadow = 'var(--glass-shadow)';
    }
    
    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    if (scrollProgress) {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${(totalScroll / windowHeight) * 100}%`;
        scrollProgress.style.width = scroll;
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

// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
}

// Interactive Selector (Experience Section)
const selectorTabs = document.querySelectorAll('.selector-tab');
const selectorContents = document.querySelectorAll('.selector-content');
const tabIndicator = document.querySelector('.selector-tab-indicator');
const tabsContainer = document.querySelector('.selector-tabs-container');
const tabsWrapper = document.querySelector('.selector-tabs');

function updateIndicator(activeTab) {
    if (!activeTab || !tabIndicator) return;
    
    // Check if we are in mobile layout (horizontal tabs)
    if (window.innerWidth <= 768) {
        tabIndicator.style.top = 'auto';
        tabIndicator.style.height = '3px';
        
        // Calculate offset accounting for any scrolling
        const scrollLeft = tabsWrapper ? tabsWrapper.scrollLeft : 0;
        tabIndicator.style.left = `${activeTab.offsetLeft - scrollLeft}px`;
        tabIndicator.style.width = `${activeTab.offsetWidth}px`;
    } else {
        // Desktop layout (vertical tabs)
        tabIndicator.style.left = '-2px';
        tabIndicator.style.width = '3px';
        tabIndicator.style.top = `${activeTab.offsetTop}px`;
        tabIndicator.style.height = `${activeTab.offsetHeight}px`;
    }
}

if (selectorTabs.length > 0) {
    // Initialize indicator on load
    const initialActive = document.querySelector('.selector-tab.active') || selectorTabs[0];
    
    // Use setTimeout to ensure DOM is fully rendered before calculating positions
    setTimeout(() => updateIndicator(initialActive), 100);
    
    // Update on window resize and scroll (if mobile scrollable tabs)
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.selector-tab.active');
        updateIndicator(activeTab);
    });
    
    if (tabsWrapper) {
        tabsWrapper.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) {
                const activeTab = document.querySelector('.selector-tab.active');
                updateIndicator(activeTab);
            }
        });
    }

    selectorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            selectorTabs.forEach(t => t.classList.remove('active'));
            selectorContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Update indicator position
            updateIndicator(tab);
            
            // Show corresponding content
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}