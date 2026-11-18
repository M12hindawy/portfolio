// ===== MAIN JAVASCRIPT FUNCTIONALITY =====
// This file contains all the interactive features for the portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Load data from admin panel or default data
    loadPortfolioData();
    
    // Initialize all components
    initializeTheme();
    initializeNavigation();
    initializeTypingAnimation();
    initializeScrollAnimations();
    initializeSkills();
    initializeServices();
    initializeProjects();
    initializeTestimonials();
    initializeAchievements();
    initializeContactForm();
    initializeSmoothScroll();
});

// Load portfolio data from admin panel or default
function loadPortfolioData() {
    // Try to load from admin panel localStorage first
    const adminData = localStorage.getItem('portfolioData');
    if (adminData) {
        window.portfolioData = { ...window.portfolioData, ...JSON.parse(adminData) };
    }
    
    // Fallback to default data if no admin data exists
    if (!window.portfolioData) {
        window.portfolioData = {
            
        };
    }
}

// ===== THEME TOGGLE FUNCTIONALITY =====
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.body.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            }
        }
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    const texts = window.portfolioData?.typingTexts || portfolioData.typingTexts;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before starting new text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(typeText, 1000);
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .services-grid, .projects-grid, .testimonials-carousel, .achievements-grid, .contact-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== SKILLS GRID =====
function initializeSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    if (skillsGrid.children.length > 0) return; // Skip if static HTML exists
    
    // Use admin data if available, otherwise use default data
    const skills = window.portfolioData?.skills || portfolioData.skills;
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        skillsGrid.appendChild(skillElement);
    });
}

// ===== SERVICES GRID =====
function initializeServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    if (servicesGrid.children.length > 0) return; // Skip if static HTML exists
    
    // Use admin data if available, otherwise use default data
    const services = window.portfolioData?.services || portfolioData.services;
    
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-card';
        serviceElement.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceElement);
    });
}

// ===== PROJECTS GRID =====
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!projectsGrid) return;
    if (projectsGrid.children.length > 0) return; // Skip dynamic render if static cards exist
    
    // Render projects
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        // Use admin data if available, otherwise use default data
        const projects = window.portfolioData?.projects || portfolioData.projects;
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="project-overlay">
                        <a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectElement);
        });
    }
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
    
    // Initial render
    renderProjects();
}

// ===== TESTIMONIALS CAROUSEL =====
function initializeTestimonials() {
    const carousel = document.getElementById('testimonials-carousel');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    let currentSlide = 0;
    
    // Create testimonials track
    const track = document.createElement('div');
    track.className = 'testimonials-track';
    
    // Use admin data if available, otherwise use default data
    const testimonials = window.portfolioData?.testimonials || portfolioData.testimonials;
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-card';
        testimonialElement.innerHTML = `
            <p class="testimonial-content">"${testimonial.content}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.author.image}" alt="${testimonial.author.name}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.author.name}</h4>
                    <p>${testimonial.author.position}</p>
                </div>
            </div>
        `;
        track.appendChild(testimonialElement);
    });
    
    carousel.appendChild(track);
    
    // Navigation functions
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
    }
    
    function nextSlide() {
        const testimonials = window.portfolioData?.testimonials || portfolioData.testimonials;
        currentSlide = (currentSlide + 1) % testimonials.length;
        updateCarousel();
    }
    
    function prevSlide() {
        const testimonials = window.portfolioData?.testimonials || portfolioData.testimonials;
        currentSlide = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play carousel
    setInterval(nextSlide, 5000);
}

// ===== ACHIEVEMENTS GRID =====
function initializeAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;
    if (achievementsGrid.children.length > 0) return; // Skip if static HTML exists

    const achievements = window.portfolioData?.achievements || portfolioData.achievements || [];

    if (achievements.length === 0) {
        achievementsGrid.innerHTML = '';
        return;
    }

    achievements.forEach(ach => {
        const el = document.createElement('div');
        el.className = 'achievement-card';
        el.innerHTML = `
            <div class="achievement-image">${ach.image ? `<img src="${ach.image}" alt="${ach.title}">` : ''}</div>
            <div class="achievement-content">
                <h3 class="achievement-title">${ach.title}</h3>
                <p class="achievement-meta">${ach.year || ''}</p>
                <p class="achievement-description">${ach.description || ''}</p>
                ${ach.pdfUrl ? `<a href="${ach.pdfUrl}" class="btn btn-outline" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> View Certificate</a>` : ''}
            </div>
        `;
        achievementsGrid.appendChild(el);
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ===== SMOOTH SCROLL =====
function initializeSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// Initialize accessibility features
initializeAccessibility();
initializeLazyLoading();
