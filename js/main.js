// ==========================================
// CREATIVE LINK - Interactive Features
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initMobileMenu();
  initInteractiveCards();
  initSmoothScroll();
  initContactForm();
  updateYear();
});

// ==========================================
// 1. SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  document.querySelectorAll('.section, .membership-card, .contact-card, .project-card').forEach(el => {
    observer.observe(el);
  });
}

// ==========================================
// 2. MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
  // Create mobile menu button
  const header = document.querySelector('.header-bar');
  const nav = document.querySelector('.site-nav');
  
  // Create hamburger button
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.setAttribute('aria-label', 'Toggle menu');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  
  // Insert button before nav
  nav.parentElement.insertBefore(menuBtn, nav);
  
  // Toggle menu
  menuBtn.addEventListener('click', function() {
    nav.classList.toggle('mobile-nav-active');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('mobile-nav-active'));
  });
  
  // Close menu when link clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-nav-active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================
// 3. INTERACTIVE CARD EFFECTS
// ==========================================
function initInteractiveCards() {
  const cards = document.querySelectorAll('.membership-card, .contact-card, .project-card, .team-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// ==========================================
// 4. SMOOTH SCROLL BEHAVIOR
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ==========================================
// 5. FORM INTERACTIONS
// ==========================================
function initContactForm() {
  // Add focus states to all form inputs
  const inputs = document.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('input-focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('input-focused');
    });
  });
}

// ==========================================
// 6. UPDATE YEAR DYNAMICALLY
// ==========================================
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 7. SCROLL PROGRESS INDICATOR
// ==========================================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY / windowHeight;
    progressBar.style.width = (scrolled * 100) + '%';
  });
}

// ==========================================
// 8. NAVBAR SCROLL EFFECT
// ==========================================
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  let lastScrollY = 0;
  
  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    lastScrollY = currentScrollY;
  });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
  initScrollProgress();
  initNavbarScroll();
});

// ==========================================
// 9. MEMBERSHIP TOGGLE
// ==========================================
function initMembershipFilter() {
  const tabs = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('fade-in'), 10);
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in');
        }
      });
    });
  });
}

