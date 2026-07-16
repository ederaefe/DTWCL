/**
 * DTW CONSULT — CORE INTERACTION & SPA ROUTING ENGINE
 * Master script managing mobile navigation, dynamic routing (SPA), scroll-reveal transitions,
 * active path indicators, FAQ accordions, Formspree intake, and background video controls.
 */

// Global cache for the home page content
let homeHtml = '';
window.__SPA_ROUTER__ = true;

document.addEventListener('DOMContentLoaded', () => {
  // Cache the default index.html main container content for instant home page return
  const appContent = document.getElementById('app-content');
  if (appContent) {
    homeHtml = appContent.innerHTML;
  }

  // Bind Hamburger Drawer triggers
  initNavigation();

  // Initialize Global Scroll Reveal
  initScrollEffects();

  // Initial routing check (for direct links redirected via query params)
  const params = new URLSearchParams(window.location.search);
  const targetPage = params.get('page');
  if (targetPage) {
    navigate(targetPage, false);
    // Replace URL cleanly without query parameters
    const cleanUrl = targetPage === 'home' || targetPage === 'index' ? '/' : `/${targetPage}`;
    history.replaceState({ page: targetPage }, '', cleanUrl);
  } else {
    // If it's a direct load on the homepage, initialize homepage-specific scripts
    initFAQAccordion();
    initHeroVideoPlayback();
  }

  // Intercept all link clicks for Single Page Application navigation
  document.addEventListener('click', handleSpaNavigation);
});

// Listen to browser Back/Forward navigation
window.addEventListener('popstate', (e) => {
  const state = e.state;
  if (state && state.page) {
    navigate(state.page, false);
  } else {
    navigate('home', false);
  }
});

/**
 * SPA ROUTER & NAVIGATION ENGINE
 */
function handleSpaNavigation(e) {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // Ignore external links, mailto, tel, hashes, and the admin updater page
  if (
    href.startsWith('http') && !href.startsWith(window.location.origin) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#') ||
    href.includes('updater')
  ) {
    return;
  }

  // Handle local pages
  if (href.endsWith('.html') || href === '/' || href === 'index.html' || !href.includes('.')) {
    e.preventDefault();
    const page = (href === '/' || href === 'index.html' || href === '') 
      ? 'home' 
      : href.replace('.html', '').replace(/^\//, '');
    navigate(page);

    // Auto-close mobile drawer menu if open
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (hamburger && mobileNav && mobileNav.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

async function navigate(page, pushStateEnabled = true) {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;

  // Normalize page name
  const pageName = page === 'index' ? 'home' : page;

  // Update active links state
  updateActiveLinks(pageName);

  if (pageName === 'home') {
    appContent.innerHTML = homeHtml;
    document.title = "DTW Consult — Strategic Educational & Career Advisory | Lagos, Nigeria";
    if (pushStateEnabled) history.pushState({ page: 'home' }, '', '/');
    
    // Re-initialize home-specific interactive modules
    initFAQAccordion();
    initScrollEffects();
    initHeroVideoPlayback();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Show a clean, premium loading indicator
  appContent.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 55vh; background: var(--bg-dark);">
      <div style="width: 3.5rem; height: 3.5rem; border: 3px solid rgba(210,158,15,0.2); border-top-color: var(--color-gold); border-radius: 50%; animation: spin 0.8s infinite linear;"></div>
    </div>
  `;

  try {
    const response = await fetch(`${pageName}.html`);
    if (!response.ok) throw new Error("Requested page not found.");
    const htmlText = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // Swap only the main content
    const newMain = doc.querySelector('main');
    if (newMain) {
      appContent.innerHTML = newMain.innerHTML;
    } else {
      appContent.innerHTML = htmlText;
    }

    // Set page title
    const newTitle = doc.querySelector('title')?.textContent || "DTW Consult";
    document.title = newTitle;

    // Push standard Clean URL history state
    if (pushStateEnabled) {
      history.pushState({ page: pageName }, '', `/${pageName}`);
    }

    // Reinitialize specific components depending on the loaded page
    if (pageName === 'about') {
      // About page no longer has video
    } else if (pageName === 'contact') {
      initFormspreeIntake();
    } else if (pageName === 'updates') {
      loadUpdates();
    }

    initScrollEffects();
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (err) {
    console.error("Navigation error:", err);
    appContent.innerHTML = `
      <div style="text-align: center; padding: 6rem 2rem; background: var(--bg-dark); color: #fff;">
        <h2 style="font-family: 'Gravitas One', cursive; margin-bottom: 1rem; color: #e53e3e;">Page Load Failed</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">${err.message}</p>
        <button onclick="navigate('home')" class="btn btn-secondary">Return Home</button>
      </div>
    `;
  }
}

function updateActiveLinks(page) {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href) {
      const linkPage = href.replace('.html', '').replace(/^\//, '');
      if (linkPage === page || (page === 'home' && (linkPage === 'index' || linkPage === ''))) {
        link.classList.add('active');
      }
    }
  });
}

/**
 * 2. HAMBURGER MOBILE NAVIGATION DRAWER
 */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (hamburger && mobileNav) {
    // Clone hamburger to clear previous event listeners (to prevent memory leaks / double bindings)
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);

    newHamburger.addEventListener('click', () => {
      const isActive = newHamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
  }
}

/**
 * 3. SCROLL REVEAL & HEADER STICKY EFFECTS
 */
function initScrollEffects() {
  const header = document.querySelector('.header-nav');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const animElements = document.querySelectorAll('.animate');
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animElements.forEach(el => revealObserver.observe(el));
  } else {
    animElements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * 4. FAQ ACCORDION INTERACTION (HOMEPAGE)
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = '0';
          }
        });
        
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = '0';
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
}

/**
 * 5. FORMSPREE INTAKE REGISTRY FORM (CONTACT)
 */
function initFormspreeIntake() {
  const intakeForm = document.getElementById('intake-form');
  const formCard = document.querySelector('.form-card');
  
  if (intakeForm && formCard) {
    intakeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = intakeForm.querySelector('button[type="submit"]');
      const submitError = document.getElementById('submit-error');
      
      const nameVal = document.getElementById('name')?.value;
      const emailVal = document.getElementById('email')?.value;
      if (!nameVal || !emailVal) return;
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting to Registry...';
      }
      if (submitError) {
        submitError.textContent = '';
        submitError.style.display = 'none';
      }
      
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
          const errorData = await response.json();
          throw new Error(errorData.error || 'Intake submission failed. Check fields and retry.');
        }
      } catch (err) {
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
 * 6. CINEMATIC HERO VIDEO PLAYBACK CONTROL (ABOUT)
 */
function initHeroVideoPlayback() {
  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo) {
    const setSpeedAndFade = () => {
      heroVideo.playbackRate = 0.45;
      heroVideo.classList.add('playing');
    };
    
    setTimeout(() => heroVideo.classList.add('playing'), 100);

    heroVideo.addEventListener('loadedmetadata', setSpeedAndFade);
    heroVideo.addEventListener('play', setSpeedAndFade);

    if (heroVideo.readyState >= 1) {
      setSpeedAndFade();
    }
    
    heroVideo.play().catch(e => console.log("Initial play blocked", e));

    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = 0;
      heroVideo.play().catch(err => console.log("Loop play blocked:", err));
    });

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

    setTimeout(() => {
      if (heroVideo.paused) {
        document.addEventListener('click', playAttempt, { once: true });
        document.addEventListener('scroll', playAttempt, { once: true });
        document.addEventListener('touchstart', playAttempt, { once: true });
      }
    }, 1000);
  }
}

/**
 * 7. DYNAMIC ANNOUNCEMENT FEED LOADER (UPDATES)
 */
function getDirectImageUrl(url) {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
}

function formatDate(isoString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', options);
}

async function loadUpdates() {
  const container = document.getElementById('updates-container');
  if (!container) return;

  try {
    const res = await fetch('data/updates.json?t=' + new Date().getTime());
    if (!res.ok) throw new Error("Could not load updates");
    const updates = await res.json();
    
    container.innerHTML = '';
    container.className = 'updates-feed';
    
    if (updates.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 4rem;">No updates at the moment. Check back soon!</p>';
      return;
    }

    updates.forEach(item => {
      const card = document.createElement('article');
      card.className = 'update-card animate fade-up';
      
      let imgHtml = '';
      if (item.image) {
        const directImg = getDirectImageUrl(item.image);
        imgHtml = `<img src="${directImg}" alt="Update Image" class="update-image" loading="lazy">`;
      }

      let linkHtml = '';
      if (item.link) {
        linkHtml = `
          <a href="${item.link}" target="_blank" rel="noopener" class="update-link">
            Read More 
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        `;
      }

      card.innerHTML = `
        ${imgHtml}
        <div class="update-content">
          <span class="update-date">${formatDate(item.date)}</span>
          <p class="update-text">${item.text.replace(/\n/g, '<br>')}</p>
          ${linkHtml}
        </div>
      `;
      container.appendChild(card);
    });

    if (typeof initScrollEffects === 'function') {
      setTimeout(initScrollEffects, 100);
    }

  } catch (err) {
    console.error(err);
    container.innerHTML = '<p style="text-align: center; color: #e53e3e; padding: 4rem;">Unable to load updates at this time.</p>';
  }
}
