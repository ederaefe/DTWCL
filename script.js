/**
 * DTW CONSULT — CORE INTERACTION ENGINE
 * Vanilla JS script managing mobile navigation, scroll-reveal transitions,
 * active path indicators, FAQ accordions, and Formspree intake submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initFAQAccordion();
  initFormspreeIntake();
  initHeroVideoPlayback();
});

/**
 * 1. NAVIGATION CONTROL & MOBILE DRAWER
 */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      // Prevent background body scroll when drawer is open
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
  }

  // Auto-indicate active page based on current URL path
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      // Handle homepage variations (index.html, root /, etc.)
      const isHome = href === 'index.html' || href === './' || href === '/';
      const isPathHome = currentPath === '/' || currentPath.endsWith('index.html');
      
      if (isHome && isPathHome) {
        link.classList.add('active');
      } else if (!isHome && href !== '#' && currentPath.endsWith(href)) {
        link.classList.add('active');
      }
    }
  });

  // Close mobile drawer if user links click
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && mobileNav) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/**
 * 2. SCROLL REVEAL & HEADER STICKY EFFECTS (M4, M19)
 */
function initScrollEffects() {
  const header = document.querySelector('.header-nav');
  
  // Sticky nav header scroll state (M4)
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run initially in case page loaded scrolled

  // Scroll reveal IntersectionObserver (M1, M2, M3, M19)
  const animElements = document.querySelectorAll('.animate');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '0px 0px -40px 0px', // trigger slightly before entering view
      threshold: 0.15 // 15% of element visible
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve once animation is executed to optimize scroll thread
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    animElements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * 3. FAQ ACCORDION INTERACTION (M13, M14)
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other active items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = '0';
          }
        });
        
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = '0';
        } else {
          item.classList.add('active');
          // Dynamically compute size (plus room for padding)
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
}

/**
 * 4. SECURE INTAKE REGISTRY SUBMISSION (Formspree fetch API)
 */
function initFormspreeIntake() {
  const intakeForm = document.getElementById('intake-form');
  const formCard = document.querySelector('.form-card');
  
  if (intakeForm && formCard) {
    intakeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = intakeForm.querySelector('button[type="submit"]');
      const submitError = document.getElementById('submit-error');
      
      // Basic input verification
      const nameVal = document.getElementById('name')?.value;
      const emailVal = document.getElementById('email')?.value;
      if (!nameVal || !emailVal) return;
      
      // Update UI state to submitting
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting to Registry...';
      }
      if (submitError) {
        submitError.textContent = '';
        submitError.style.display = 'none';
      }
      
      // Package payload dynamically
      const formData = new FormData(intakeForm);
      const dataPayload = {};
      formData.forEach((value, key) => {
        dataPayload[key] = value;
      });
      
      try {
        const response = await fetch('https://formspree.io/f/mzdnzael', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataPayload)
        });
        
        if (response.ok) {
          // Success: swap card view to custom verified confirmation screen
          formCard.innerHTML = `
            <div style="text-align: center; padding: 2rem 0;" class="animate visible">
              <div style="color: var(--color-gold); margin-bottom: 1.5rem; display: flex; justify-content: center;">
                <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 style="font-family: Space Grotesk, sans-serif; text-transform: uppercase; font-size: 1.25rem; font-weight: 700; letter-spacing: 1px; margin-bottom: 1rem;">
                Submission Verified
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; color: var(--text-muted);">
                Your baseline details have been securely logged in our transition registry. A DTW Advisor will reach out via email within 24 hours.
              </p>
              <button onclick="window.location.reload();" class="btn btn-secondary">
                Log Another Inquiry
              </button>
            </div>
          `;
        } else {
          // Failure response handling
          const errorData = await response.json();
          throw new Error(errorData.error || 'Intake submission failed. Check fields and retry.');
        }
      } catch (err) {
        // Network/Execution failure handling
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit to Intake Registry';
        }
        if (submitError) {
          submitError.textContent = err.message || 'Intake registry is offline. Please email dtwconsultng@gmail.com directly.';
          submitError.style.display = 'block';
        }
      }
    });
  }
}

/**
 * 5. CINEMATIC HERO VIDEO PLAYBACK CONTROL
 */
function initHeroVideoPlayback() {
  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo) {
    const setSpeedAndFade = () => {
      heroVideo.playbackRate = 0.45; // Smooth slow motion speed
      heroVideo.classList.add('playing'); // Trigger smooth CSS fade-in
    };

    // Apply speed and fade once metadata has loaded
    heroVideo.addEventListener('loadedmetadata', setSpeedAndFade);
    
    // Fallback: apply speed and fade on initial play event
    heroVideo.addEventListener('play', setSpeedAndFade);

    // If metadata is already loaded (cached), apply immediately
    if (heroVideo.readyState >= 1) {
      setSpeedAndFade();
    }

    // ----------------------------------------------------
    // FALLBACK 2: Auto-Loop Event Reinforcer
    // ----------------------------------------------------
    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = 0;
      heroVideo.play().catch(err => console.log("Loop play blocked:", err));
    });

    // ----------------------------------------------------
    // FALLBACK 3: User-Gesture Interaction Autoplay Bypass
    // ----------------------------------------------------
    const playAttempt = () => {
      if (heroVideo.paused) {
        heroVideo.play()
          .then(() => {
            setSpeedAndFade();
            removeInteractionListeners();
          })
          .catch(err => console.log("Interaction play blocked:", err));
      }
    };

    const removeInteractionListeners = () => {
      document.removeEventListener('click', playAttempt);
      document.removeEventListener('scroll', playAttempt);
      document.removeEventListener('touchstart', playAttempt);
    };

    // Check if autoplay succeeded after 1 second
    setTimeout(() => {
      if (heroVideo.paused) {
        // Autoplay was blocked! Bind one-time listeners for first user gesture.
        document.addEventListener('click', playAttempt, { once: true });
        document.addEventListener('scroll', playAttempt, { once: true });
        document.addEventListener('touchstart', playAttempt, { once: true });
      }
    }, 1000);
  }
}
