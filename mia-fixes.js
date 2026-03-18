// ═══════════════════════════════════════════════════════════════
// MIA IA SYSTEM — Patch JS v1.0 (18/03/2026)
// Handles: navbar auto-hide, scroll-reveal, menu anchors,
//          background particles, FAQ accordion
// ═══════════════════════════════════════════════════════════════

(function () {
  'use strict';
  if (window.MIA_FIXES_DONE) return;
  window.MIA_FIXES_DONE = true;

  function init() {
    setupBackgroundParticles();
    setupNavbarAutoHide();
    setupMenuAnchors();
    setupScrollReveal();
    setupFAQAccordion();
  }

  // ─────────────────────────────────────────────
  // #5 BACKGROUND PARTICLES — Orbes gradient animés
  // ─────────────────────────────────────────────
  function setupBackgroundParticles() {
    // Vérifier qu'on est sur une page avec <main>
    var main = document.querySelector('main');
    if (!main) return;

    // Créer le container de particules
    var particles = document.createElement('div');
    particles.className = 'mia-bg-particles';
    particles.setAttribute('aria-hidden', 'true');

    // Troisième orbe (purple)
    var orb3 = document.createElement('div');
    orb3.className = 'mia-orb-3';
    particles.appendChild(orb3);

    // Insérer au tout début du body
    document.body.insertBefore(particles, document.body.firstChild);
  }

  // ─────────────────────────────────────────────
  // #6 NAVBAR AUTO-HIDE ON SCROLL
  // Cache au scroll down, réapparaît au scroll up
  // ─────────────────────────────────────────────
  function setupNavbarAutoHide() {
    var header = document.querySelector('header.fixed') ||
                 document.querySelector('header[style*="position: fixed"]') ||
                 document.querySelector('header');
    if (!header) return;

    var lastScrollY = 0;
    var ticking = false;
    var scrollThreshold = 80; // pixels avant de cacher
    var delta = 5; // sensibilité minimale

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentScrollY = window.scrollY;
          var diff = currentScrollY - lastScrollY;

          // Appliquer le fond glass si on a scrollé
          if (currentScrollY > 50) {
            header.classList.add('mia-nav-scrolled');
          } else {
            header.classList.remove('mia-nav-scrolled');
            header.classList.remove('mia-nav-hidden');
          }

          // Auto-hide logic: seulement si on a assez scrollé
          if (currentScrollY > scrollThreshold) {
            if (diff > delta) {
              // Scroll DOWN → cacher
              header.classList.add('mia-nav-hidden');
            } else if (diff < -delta) {
              // Scroll UP → montrer
              header.classList.remove('mia-nav-hidden');
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ─────────────────────────────────────────────
  // #2 FIX MENU NAVIGATION
  // Les boutons Services/Tarifs/FAQ/Contact → scroll to anchor
  // ─────────────────────────────────────────────
  function setupMenuAnchors() {
    // Map des labels vers les IDs de section
    var menuMap = {
      'Accueil': '#hero',
      'Services': '#features',
      'Tarifs': '#pricing',
      'FAQ': '#faq',
      'Contact': '#contact'
    };

    // Trouver tous les boutons dans le header et footer
    var buttons = document.querySelectorAll('header button, footer button');

    buttons.forEach(function (btn) {
      var text = btn.textContent.trim().replace(/\s+/g, ' ');
      // Extraire juste le premier mot (le label peut contenir SVG text)
      var label = text.split('\n')[0].trim();

      Object.keys(menuMap).forEach(function (key) {
        if (label === key || label.startsWith(key)) {
          var targetId = menuMap[key];
          var target = document.querySelector(targetId);
          if (target) {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              // Offset pour le header fixe
              var headerH = document.querySelector('header') ?
                            document.querySelector('header').offsetHeight : 70;
              var top = target.getBoundingClientRect().top + window.scrollY - headerH - 10;
              window.scrollTo({ top: top, behavior: 'smooth' });

              // Montrer la navbar si elle était cachée
              var header = document.querySelector('header');
              if (header) header.classList.remove('mia-nav-hidden');
            });
          }
        }
      });
    });
  }

  // ─────────────────────────────────────────────
  // SCROLL REVEAL — Animation au scroll
  // Les éléments avec opacity:0 sont déjà forcés visibles par le CSS.
  // Ici on ajoute une animation subtile de "fade-in" au scroll.
  // ─────────────────────────────────────────────
  function setupScrollReveal() {
    // Cibler les sections principales et les cards
    var selectors = [
      '.section > .container-custom > div:first-child',  // Section titles
      '.feature-card',                                      // Feature cards
      '.pricing-card',                                      // Pricing cards
      '.pricing-card-highlight',                            // Pricing highlight
      '.faq-item',                                          // FAQ items
      '.glass',                                             // Glass panels
      '#hero .relative.z-10 > *'                            // Hero children
    ];

    var elements = document.querySelectorAll(selectors.join(', '));

    if (!elements.length || !('IntersectionObserver' in window)) return;

    // Ajouter la classe mia-reveal avec stagger
    var gridParents = new Map();

    elements.forEach(function (el) {
      // Ignorer les éléments dans le hero (déjà visibles)
      if (el.closest('#hero') && el.closest('.inline-flex')) return;

      el.classList.add('mia-reveal');

      // Stagger pour les cards dans un même grid
      var parent = el.parentElement;
      if (parent && (parent.classList.contains('grid') ||
                     parent.style.display === 'grid')) {
        if (!gridParents.has(parent)) {
          gridParents.set(parent, 0);
        }
        var idx = gridParents.get(parent);
        el.setAttribute('data-delay', idx);
        gridParents.set(parent, idx + 1);
      }
    });

    // Observer
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('mia-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.mia-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ─────────────────────────────────────────────
  // FAQ ACCORDION — Ouvrir/fermer les questions
  // ─────────────────────────────────────────────
  function setupFAQAccordion() {
    var faqButtons = document.querySelectorAll('.faq-question');
    if (!faqButtons.length) return;

    faqButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var faqItem = btn.closest('.faq-item');
        var content = faqItem ? faqItem.querySelector('.overflow-hidden') : null;
        var answer = faqItem ? faqItem.querySelector('.faq-answer') : null;
        var chevron = btn.querySelector('svg:last-child');

        if (!content || !answer) return;

        var isOpen = content.style.height !== '0px' && content.style.height !== '';

        // Fermer tous les autres
        document.querySelectorAll('.faq-item').forEach(function (item) {
          var c = item.querySelector('.overflow-hidden');
          var ch = item.querySelector('.faq-question svg:last-child');
          if (c && item !== faqItem) {
            c.style.height = '0px';
            c.style.opacity = '0';
            c.style.transition = 'height 0.3s ease, opacity 0.3s ease';
            if (ch) ch.style.transform = 'rotate(0deg)';
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          // Fermer
          content.style.height = '0px';
          content.style.opacity = '0';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          // Ouvrir
          content.style.transition = 'height 0.3s ease, opacity 0.3s ease';
          content.style.height = answer.scrollHeight + 20 + 'px';
          content.style.opacity = '1';
          if (chevron) chevron.style.transform = 'rotate(180deg)';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Ouvrir la première par défaut
    var firstBtn = faqButtons[0];
    if (firstBtn) {
      setTimeout(function () { firstBtn.click(); }, 100);
    }
  }

  // ─────────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
