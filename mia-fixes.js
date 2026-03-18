// ═══════════════════════════════════════════════════════════════
// MIA IA SYSTEM — Patch JS v4.0 (18/03/2026)
// Contact form + Language selector + Navbar + Menu + FAQ
// ═══════════════════════════════════════════════════════════════
(function () {
  'use strict';
  if (window.MIA_FIXES_DONE) return;
  window.MIA_FIXES_DONE = true;

  var DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1483825074128556062/oQ02-a3xTDn3lT59B2Uqij5Sq19wjThHomd03xZMkVKiCcz1sxSTzA9k9hlFU-ccLHM2';

  function init() {
    setupContactForm();
    setupNewsletterForm();
    setupLanguageSelector();
    setupDashboardRedirect();
    setupNavbarAutoHide();
    setupMenuAnchors();
    setupScrollReveal();
    setupFAQAccordion();
    fixFooterButtons();
  }

  // ─── #B CONTACT FORM → Discord webhook + email ───
  function setupContactForm() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      // Identifier le formulaire de contact (a un champ "message")
      var msgField = form.querySelector('textarea, #message');
      var nameField = form.querySelector('#name, input[placeholder*="Doe"]');
      var emailField = form.querySelector('#email, input[type="email"]');
      if (!msgField || !nameField) return;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = nameField.value.trim();
        var email = emailField ? emailField.value.trim() : '';
        var message = msgField.value.trim();

        if (!name || !email || !message) {
          showFormFeedback(form, 'error', 'Veuillez remplir tous les champs.');
          return;
        }

        // Disable form
        form.classList.add('mia-form-sending');
        var submitBtn = form.querySelector('button[type="submit"]');
        var origHTML = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) submitBtn.innerHTML = '<span class="mia-spinner"></span> Envoi...';

        // Send to Discord webhook
        var payload = {
          embeds: [{
            title: '📩 Nouveau message — mia-ia-system.com',
            color: 47324, // cyan
            fields: [
              { name: '👤 Nom', value: name, inline: true },
              { name: '📧 Email', value: email, inline: true },
              { name: '💬 Message', value: message.substring(0, 1000) }
            ],
            timestamp: new Date().toISOString(),
            footer: { text: 'MIA Website Contact Form' }
          }]
        };

        fetch(DISCORD_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
        .then(function (res) {
          if (res.ok || res.status === 204) {
            // Also send email via mailto (backup)
            showFormFeedback(form, 'success', '✅ Message envoyé ! Nous vous répondrons rapidement.');
            form.reset();
          } else {
            throw new Error('Discord error: ' + res.status);
          }
        })
        .catch(function (err) {
          console.error('Contact form error:', err);
          // Fallback: open mailto
          var subject = encodeURIComponent('Contact MIA - ' + name);
          var body = encodeURIComponent('De: ' + name + '\nEmail: ' + email + '\n\n' + message);
          window.open('mailto:contact@mia-ia-system.com?subject=' + subject + '&body=' + body);
          showFormFeedback(form, 'success', '✅ Redirection vers votre client email...');
        })
        .finally(function () {
          form.classList.remove('mia-form-sending');
          if (submitBtn) submitBtn.innerHTML = origHTML;
        });
      });
    });
  }

  function showFormFeedback(form, type, message) {
    // Remove previous feedback
    var prev = form.parentElement.querySelector('.mia-form-success, .mia-form-error');
    if (prev) prev.remove();

    var div = document.createElement('div');
    div.className = type === 'success' ? 'mia-form-success' : 'mia-form-error';
    div.textContent = message;

    if (type === 'success') {
      form.style.display = 'none';
      form.parentElement.appendChild(div);
    } else {
      form.insertBefore(div, form.firstChild);
      setTimeout(function () { div.remove(); }, 5000);
    }
  }

  // ─── NEWSLETTER → Discord notification ───
  function setupNewsletterForm() {
    // Find newsletter input (in the glass card with "Newsletter" text)
    var newsletters = document.querySelectorAll('input[type="email"][placeholder*="email"]');
    newsletters.forEach(function (input) {
      var btn = input.parentElement ? input.parentElement.querySelector('button') : null;
      if (!btn || input.closest('form')) return; // skip if inside contact form

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var email = input.value.trim();
        if (!email || !email.includes('@')) {
          input.style.borderColor = '#ff5252';
          setTimeout(function () { input.style.borderColor = ''; }, 2000);
          return;
        }

        var payload = {
          embeds: [{
            title: '📬 Nouvel abonné Newsletter',
            color: 13808692, // gold
            fields: [{ name: '📧 Email', value: email }],
            timestamp: new Date().toISOString(),
            footer: { text: 'MIA Website Newsletter' }
          }]
        };

        fetch(DISCORD_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).then(function () {
          input.value = '';
          input.placeholder = '✅ Inscrit !';
          input.style.borderColor = '#00c853';
          setTimeout(function () {
            input.placeholder = 'Votre email';
            input.style.borderColor = '';
          }, 3000);
        });
      });
    });
  }

  // ─── #D LANGUAGE SELECTOR — Griser EN/ES/DE ───
  function setupLanguageSelector() {
    // Find all language selector buttons
    var langBtns = document.querySelectorAll('button[aria-label="Select language"]');
    langBtns.forEach(function (btn) {
      // Get the dropdown (if it exists from Next.js)
      var parent = btn.closest('.relative');
      if (!parent) return;

      // Remove old click behavior, add our own dropdown
      var newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      var dropdown = document.createElement('div');
      dropdown.className = 'mia-lang-dropdown';
      dropdown.innerHTML = [
        '<div class="mia-lang-option mia-lang-active" data-lang="fr"><img src="/flags/fr.svg" width="20" height="14" style="border-radius:2px"> Français</div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="en"><img src="/flags/us.svg" width="20" height="14" style="border-radius:2px"> English</div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="es"><img src="/flags/es.svg" width="20" height="14" style="border-radius:2px"> Español</div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="de"><img src="/flags/de.svg" width="20" height="14" style="border-radius:2px"> Deutsch</div>'
      ].join('');
      parent.appendChild(dropdown);

      newBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('mia-open');
      });

      document.addEventListener('click', function () {
        dropdown.classList.remove('mia-open');
      });
    });
  }

  // ─── #A DASHBOARD REDIRECT → Coming Soon ───
  function setupDashboardRedirect() {
    var links = document.querySelectorAll('a[href*="dashboard.mia-ia-system.com"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '/coming-soon/';
      });
      // Remove target="_blank" since we redirect locally
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  // ─── #6 NAVBAR AUTO-HIDE ───
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
          var y = window.scrollY;
          if (y > 50) header.classList.add('mia-nav-scrolled');
          else { header.classList.remove('mia-nav-scrolled'); header.classList.remove('mia-nav-hidden'); }
          if (y > 80) {
            if (y > lastScrollY + 5) header.classList.add('mia-nav-hidden');
            else if (y < lastScrollY - 5) header.classList.remove('mia-nav-hidden');
          }
          lastScrollY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── #2 MENU ANCHORS ───
  function setupMenuAnchors() {
    var map = { 'Accueil':'#hero', 'Services':'#features', 'Tarifs':'#pricing', 'FAQ':'#faq', 'Contact':'#contact' };
    document.querySelectorAll('header button, footer button').forEach(function (btn) {
      var label = btn.textContent.trim().split('\n')[0].trim();
      Object.keys(map).forEach(function (key) {
        if (label === key || label.startsWith(key)) {
          var target = document.querySelector(map[key]);
          if (target) {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              var hh = document.querySelector('header');
              var top = target.getBoundingClientRect().top + window.scrollY - (hh ? hh.offsetHeight : 70) - 10;
              window.scrollTo({ top: top, behavior: 'smooth' });
              if (hh) hh.classList.remove('mia-nav-hidden');
            });
          }
        }
      });
    });
  }

  // ─── FIX FOOTER BUTTONS → scroll to sections ───
  function fixFooterButtons() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    var map = { 'Services':'#features', 'Tarifs':'#pricing', 'FAQ':'#faq' };
    footer.querySelectorAll('button').forEach(function (btn) {
      var label = btn.textContent.trim();
      if (map[label]) {
        var a = document.createElement('a');
        a.href = map[label];
        a.className = btn.className;
        a.textContent = label;
        a.addEventListener('click', function (e) {
          e.preventDefault();
          var target = document.querySelector(map[label]);
          if (target) {
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          }
        });
        btn.parentElement.replaceChild(a, btn);
      }
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
        el.setAttribute('data-delay', gridParents.get(parent));
        gridParents.set(parent, gridParents.get(parent) + 1);
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('mia-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.mia-reveal').forEach(function (el) { observer.observe(el); });
  }

  // ─── FAQ ACCORDION ───
  function setupFAQAccordion() {
    var btns = document.querySelectorAll('.faq-question');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var content = item ? item.querySelector('.overflow-hidden') : null;
        var answer = item ? item.querySelector('.faq-answer') : null;
        var chevron = btn.querySelector('svg:last-child');
        if (!content || !answer) return;
        var isOpen = content.style.height !== '0px' && content.style.height !== '';

        document.querySelectorAll('.faq-item').forEach(function (o) {
          if (o === item) return;
          var c = o.querySelector('.overflow-hidden');
          var ch = o.querySelector('.faq-question svg:last-child');
          if (c) { c.style.height = '0px'; c.style.opacity = '0'; c.style.transition = 'height 0.3s, opacity 0.3s'; }
          if (ch) ch.style.transform = 'rotate(0deg)';
          o.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        if (isOpen) {
          content.style.height = '0px'; content.style.opacity = '0';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          content.style.transition = 'height 0.3s, opacity 0.3s';
          content.style.height = answer.scrollHeight + 20 + 'px'; content.style.opacity = '1';
          if (chevron) chevron.style.transform = 'rotate(180deg)';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
    setTimeout(function () { btns[0].click(); }, 100);
  }

  // ─── INIT ───
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
