// ═══════════════════════════════════════════════════════════════
// MIA IA SYSTEM — Patch JS v3.0 (18/03/2026)
// Canvas particles + orbes + navbar + menu + FAQ
// ═══════════════════════════════════════════════════════════════
(function () {
  'use strict';
  if (window.MIA_FIXES_DONE) return;
  window.MIA_FIXES_DONE = true;

  function init() {
    setupParticlesCanvas();
    setupGradientOrbs();
    setupNavbarAutoHide();
    setupMenuAnchors();
    setupScrollReveal();
    setupFAQAccordion();
  }

  // ─── CANVAS PARTICLES — petits points flottants ───
  function setupParticlesCanvas() {
    var canvas = document.createElement('canvas');
    canvas.id = 'mia-particles-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var PARTICLE_COUNT = 50;
    var colors = [
      'rgba(0, 180, 220, ',    // cyan
      'rgba(212, 175, 55, ',    // gold
      'rgba(99, 102, 241, ',    // purple
      'rgba(255, 255, 255, '    // white
    ];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Créer les particules
    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        opacitySpeed: (Math.random() - 0.5) * 0.005,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Mouvement
        p.x += p.speedX;
        p.y += p.speedY;

        // Pulsation opacité
        p.opacity += p.opacitySpeed;
        if (p.opacity > 0.6 || p.opacity < 0.05) {
          p.opacitySpeed *= -1;
        }

        // Reboucler
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Dessiner
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity.toFixed(2) + ')';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ─── GRADIENT ORBS — divs animés ───
  function setupGradientOrbs() {
    var container = document.createElement('div');
    container.className = 'mia-bg-orbs';
    container.setAttribute('aria-hidden', 'true');

    var orbs = ['mia-orb-cyan', 'mia-orb-gold', 'mia-orb-purple'];
    for (var i = 0; i < orbs.length; i++) {
      var orb = document.createElement('div');
      orb.className = 'mia-orb ' + orbs[i];
      container.appendChild(orb);
    }

    document.body.insertBefore(container, document.body.firstChild);
  }

  // ─── NAVBAR AUTO-HIDE ───
  function setupNavbarAutoHide() {
    var header = document.querySelector('header.fixed') ||
                 document.querySelector('header[style*="position: fixed"]') ||
                 document.querySelector('header');
    if (!header) return;

    var lastScrollY = 0;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var currentScrollY = window.scrollY;
          if (currentScrollY > 50) {
            header.classList.add('mia-nav-scrolled');
          } else {
            header.classList.remove('mia-nav-scrolled');
            header.classList.remove('mia-nav-hidden');
          }
          if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY + 5) {
              header.classList.add('mia-nav-hidden');
            } else if (currentScrollY < lastScrollY - 5) {
              header.classList.remove('mia-nav-hidden');
            }
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── MENU ANCHORS ───
  function setupMenuAnchors() {
    var menuMap = {
      'Accueil': '#hero', 'Services': '#features',
      'Tarifs': '#pricing', 'FAQ': '#faq', 'Contact': '#contact'
    };
    var buttons = document.querySelectorAll('header button, footer button');
    buttons.forEach(function (btn) {
      var label = btn.textContent.trim().split('\n')[0].trim();
      Object.keys(menuMap).forEach(function (key) {
        if (label === key || label.startsWith(key)) {
          var target = document.querySelector(menuMap[key]);
          if (target) {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              var hh = document.querySelector('header');
              var offset = hh ? hh.offsetHeight : 70;
              var top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
              window.scrollTo({ top: top, behavior: 'smooth' });
              if (hh) hh.classList.remove('mia-nav-hidden');
            });
          }
        }
      });
    });
  }

  // ─── SCROLL REVEAL ───
  function setupScrollReveal() {
    var selectors = [
      '.section > .container-custom > div:first-child',
      '.feature-card', '.pricing-card', '.pricing-card-highlight',
      '.faq-item', '.glass', '#hero .relative.z-10 > *'
    ];
    var elements = document.querySelectorAll(selectors.join(', '));
    if (!elements.length || !('IntersectionObserver' in window)) return;

    var gridParents = new Map();
    elements.forEach(function (el) {
      if (el.closest('#hero') && el.closest('.inline-flex')) return;
      el.classList.add('mia-reveal');
      var parent = el.parentElement;
      if (parent && (parent.classList.contains('grid') || parent.style.display === 'grid')) {
        if (!gridParents.has(parent)) gridParents.set(parent, 0);
        var idx = gridParents.get(parent);
        el.setAttribute('data-delay', idx);
        gridParents.set(parent, idx + 1);
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('mia-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.mia-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ─── FAQ ACCORDION ───
  function setupFAQAccordion() {
    var faqButtons = document.querySelectorAll('.faq-question');
    if (!faqButtons.length) return;

    faqButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var content = item ? item.querySelector('.overflow-hidden') : null;
        var answer = item ? item.querySelector('.faq-answer') : null;
        var chevron = btn.querySelector('svg:last-child');
        if (!content || !answer) return;

        var isOpen = content.style.height !== '0px' && content.style.height !== '';

        document.querySelectorAll('.faq-item').forEach(function (other) {
          if (other === item) return;
          var c = other.querySelector('.overflow-hidden');
          var ch = other.querySelector('.faq-question svg:last-child');
          if (c) { c.style.height = '0px'; c.style.opacity = '0'; c.style.transition = 'height 0.3s ease, opacity 0.3s ease'; }
          if (ch) ch.style.transform = 'rotate(0deg)';
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        if (isOpen) {
          content.style.height = '0px'; content.style.opacity = '0';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          content.style.transition = 'height 0.3s ease, opacity 0.3s ease';
          content.style.height = answer.scrollHeight + 20 + 'px';
          content.style.opacity = '1';
          if (chevron) chevron.style.transform = 'rotate(180deg)';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    setTimeout(function () { faqButtons[0].click(); }, 100);
  }

  // ─── INIT ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
