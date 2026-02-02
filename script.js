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

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Product modal functionality
const modal = document.getElementById('productModal');
const quickViewButtons = document.querySelectorAll('.quick-view');
const modalClose = document.querySelector('.modal-close');

// Product data
const products = [
    { name: 'Essential Oversized Tee', price: '$45', label: 'OVERSIZED TEE' },
    { name: 'Utility Cargo Pants', price: '$85', label: 'CARGO PANTS' },
    { name: 'Classic Hoodie', price: '$75', label: 'HOODIE' },
    { name: 'Minimalist Bomber', price: '$120', label: 'JACKET' },
    { name: 'Tapered Sweatpants', price: '$65', label: 'SWEATPANTS' },
    { name: 'Button Down Shirt', price: '$55', label: 'SHIRT' }
];

// Open modal on quick view button click
quickViewButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(products[index]);
    });
});

// Also open modal when clicking on product card
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        openModal(products[index]);
    });
});

function openModal(product) {
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalProductName').textContent = product.label;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Size selector
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Contact form submission with Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Get form data
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success message
            formStatus.style.display = 'block';
            formStatus.style.color = '#22c55e';
            formStatus.innerHTML = '✓ Thanks! Your message has been sent successfully. We\'ll get back to you soon!';
            contactForm.reset();
        } else {
            // Error message
            formStatus.style.display = 'block';
            formStatus.style.color = '#ef4444';
            formStatus.innerHTML = '✗ Oops! There was a problem sending your message. Please try again.';
        }
    } catch (error) {
        // Network error
        formStatus.style.display = 'block';
        formStatus.style.color = '#ef4444';
        formStatus.innerHTML = '✗ Network error. Please check your connection and try again.';
    }
    
    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    
    // Clear status after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.section-header, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Add to cart animation simulation
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.href.includes('#contact')) {
            e.preventDefault();
            closeModal();
            
            // Scroll to contact section
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    });
});
