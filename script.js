/* ================================
   ✨ PREMIUM DARK SPARKLE THEME ✨
   Advanced Vanilla JavaScript
   ================================ */

// ================================
// PAGE LOADER - HIDE IMMEDIATELY
// ================================

(function() {
    const pageLoader = document.getElementById('pageLoader');
    
    function hideLoader() {
        if (pageLoader) {
            pageLoader.classList.add('hidden');
            pageLoader.style.display = 'none';
            pageLoader.style.opacity = '0';
        }
    }
    
    // Multiple timing approaches for reliability
    setTimeout(hideLoader, 1500);
    setTimeout(hideLoader, 3000); // Failsafe
    
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(hideLoader, 1500);
    });
    
    window.addEventListener('load', () => {
        setTimeout(hideLoader, 1500);
    });
})();

// ================================
// DOM ELEMENTS
// ================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const sparklesContainer = document.getElementById('sparklesContainer');
const scrollTop = document.getElementById('scrollTop');

// ================================
// SPARKLE GENERATOR
// ================================

function createSparkle(x, y) {
    if (!sparklesContainer) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 3000);
}

let sparkleInterval;
window.addEventListener('scroll', () => {
    if (!sparkleInterval) {
        sparkleInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight + window.scrollY;
                if (Math.random() > 0.5) {
                    createSparkle(x, y);
                }
            }
        }, 200);
    }
});

window.addEventListener('scroll', () => {
    if (sparkleInterval && window.scrollY === 0) {
        clearInterval(sparkleInterval);
        sparkleInterval = null;
    }
});

// ================================
// HAMBURGER MENU TOGGLE
// ================================

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });
}

// Close menu when a link is clicked
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// ================================
// SMOOTH SCROLL NAVIGATION
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================================
// ADVANCED SCROLL ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const elementsToObserve = document.querySelectorAll(
    '.service-card, .testimonial-card, .timeline-item, .skill-badge, .contact-method'
);

elementsToObserve.forEach(el => {
    scrollObserver.observe(el);
});

// ================================
// NAVBAR SCROLL EFFECTS
// ================================

window.addEventListener('scroll', () => {
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.15)';
        navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// ================================
// SCROLL TO TOP BUTTON
// ================================

if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    });
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================
// CARD MOUSE TRACKING
// ================================

const cards = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// ================================
// BUTTON SPARKLE EFFECTS
// ================================

document.querySelectorAll('button, .btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const x = e.pageX - button.getBoundingClientRect().left;
        const y = e.pageY - button.getBoundingClientRect().top;
        
        createSparkle(x, y);
    });
});

// ================================
// CONTACT METHODS ANIMATION
// ================================

const contactMethods = document.querySelectorAll('.contact-method');
contactMethods.forEach((method, index) => {
    method.style.animationDelay = (index * 0.1) + 's';
});

// ================================
// SERVICE CARDS STAGGER
// ================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
});

// ================================
// KEYBOARD ACCESSIBILITY
// ================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================
// COLOR CYCLING FOR TEXT GLOW
// ================================

const colors = [
    'rgba(0, 245, 255, 0.6)',      // Cyan
    'rgba(0, 153, 255, 0.6)',      // Blue
    'rgba(139, 92, 246, 0.6)',     // Purple
    'rgba(236, 72, 153, 0.6)'      // Pink
];

let colorIndex = 0;
const glowElements = document.querySelectorAll('.text-glow');

setInterval(() => {
    glowElements.forEach(el => {
        el.style.textShadow = `0 0 20px ${colors[colorIndex]}`;
    });
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

// ================================
// ERROR HANDLING & LOGGING
// ================================

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Console branding
console.log(
    '%c✨ Habeeba Faiza Portfolio ✨',
    'color: #00f5ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00f5ff;'
);
console.log(
    '%cBuilt with HTML5, CSS3 & Vanilla JavaScript',
    'color: #8b5cf6; font-size: 14px;'
);

