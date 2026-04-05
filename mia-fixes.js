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
    fixPricingSection();
    fixLoginRegister();
    fixFooterDashboard();
    hideGoogleOAuth();
    injectResultsSection();
    fixHeaderOpaque();
    fixTicker();
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
    // Selecteur de langue avec FR actif, EN/ES/DE "Bientot"
    var langBtns = document.querySelectorAll('button[aria-label="Select language"]');
    langBtns.forEach(function (btn) {
      var parent = btn.closest('.relative');
      if (!parent) return;

      var newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      var dropdown = document.createElement('div');
      dropdown.className = 'mia-lang-dropdown';
      dropdown.innerHTML = [
        '<div class="mia-lang-option mia-lang-active" data-lang="fr"><img src="/flags/fr.svg" width="20" height="14" style="border-radius:2px"> Français</div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="en"><img src="/flags/us.svg" width="20" height="14" style="border-radius:2px"> English <span style="font-size:0.6rem;color:#D4AF37;margin-left:4px;">Bientôt</span></div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="es"><img src="/flags/es.svg" width="20" height="14" style="border-radius:2px"> Español <span style="font-size:0.6rem;color:#D4AF37;margin-left:4px;">Bientôt</span></div>',
        '<div class="mia-lang-option mia-lang-disabled" data-lang="de"><img src="/flags/de.svg" width="20" height="14" style="border-radius:2px"> Deutsch <span style="font-size:0.6rem;color:#D4AF37;margin-left:4px;">Bientôt</span></div>'
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

  // ─── #A DASHBOARD REDIRECT → Dashboard VPS live ───
  var DASHBOARD_URL = 'http://212.28.179.199:8000';
  function setupDashboardRedirect() {
    var links = document.querySelectorAll('a[href*="dashboard.mia-ia-system.com"]');
    links.forEach(function (link) {
      link.href = DASHBOARD_URL;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
    // Aussi intercepter les liens /coming-soon/
    var comingSoonLinks = document.querySelectorAll('a[href*="/coming-soon"]');
    comingSoonLinks.forEach(function (link) {
      link.href = DASHBOARD_URL;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
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

    // Forcer fond opaque (longhand pour matcher Tailwind)
    forceHeaderOpaque(header);

    // MutationObserver : React re-set le className au scroll,
    // ce qui ajoute bg-dark/90 ou bg-transparent.
    // On re-force le fond opaque apres chaque mutation React.
    var applyingFix = false;
    var observer = new MutationObserver(function (mutations) {
      if (applyingFix) return;
      // Ne reagir que si className a change (pas notre propre style)
      var classChanged = mutations.some(function (m) { return m.attributeName === 'class'; });
      if (!classChanged) return;
      applyingFix = true;
      forceHeaderOpaque(header);
      applyingFix = false;
    });
    observer.observe(header, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;

          if (y > 80) {
            if (y > lastScrollY + 5) header.classList.add('mia-nav-hidden');
            else if (y < lastScrollY - 5) header.classList.remove('mia-nav-hidden');
          } else {
            header.classList.remove('mia-nav-hidden');
          }
          lastScrollY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function forceHeaderOpaque(header) {
    header.style.setProperty('background-color', '#0A0E17', 'important');
    header.style.setProperty('background-image', 'none', 'important');
    header.style.setProperty('backdrop-filter', 'none', 'important');
    header.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
    header.style.setProperty('top', '46px', 'important');
    header.style.setProperty('transition-property', 'transform, box-shadow', 'important');
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

  // ─── #C PRICING : Cacher ancien + inserer nouveau (anti-React) ───
  function fixPricingSection() {
    setTimeout(doPricingFix, 800);
    setTimeout(doPricingFix, 2000);
    setTimeout(doPricingFix, 4000);
  }
  window.doPricingFix = doPricingFix;
  function doPricingFix() {
    if (document.getElementById('mia-pricing-new')) return;
    var pricingSection = document.getElementById('pricing');
    if (!pricingSection) return;
    var oldGrid = pricingSection.querySelector('[class*="grid-cols"]') || pricingSection.querySelector('.grid');
    if (!oldGrid) return;
    oldGrid.style.display = 'none';

    // 2 tiers : Gratuit + Starter 9EUR
    var newGrid = document.createElement('div');
    newGrid.id = 'mia-pricing-new';
    newGrid.className = 'grid md:grid-cols-2 gap-8 max-w-3xl mx-auto';
    newGrid.style.opacity = '1';
    newGrid.style.transform = 'none';
    newGrid.innerHTML = '' +
      '<div class="glass p-6 text-center flex flex-col">' +
        '<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00B4DC]/10 text-[#00B4DC] mb-4 mx-auto">GRATUIT</span>' +
        '<div class="text-4xl font-bold text-white mb-1 font-mono">0&euro;</div>' +
        '<div class="text-light-500 text-sm mb-4">/mois</div>' +
        '<hr class="border-white/10 mb-4">' +
        '<ul class="text-left space-y-3 mb-6 flex-1">' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Status bot (running/stopped)</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>VIX, ATR, VWAP slope</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Correlation ES/NQ basique</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Apercu briefing (3 lignes)</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Education (40 lecons)</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Calendrier economique</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Communaute Discord</li>' +
        '</ul>' +
        '<a href="' + DASHBOARD_URL + '" target="_blank" class="w-full py-2.5 rounded-lg bg-white/10 text-light-400 font-semibold text-sm text-center block">Acceder gratuitement</a>' +
      '</div>' +
      '<div class="glass p-6 text-center flex flex-col border-[#00B4DC] scale-105 shadow-lg shadow-[#00B4DC]/10" style="border-color:#00B4DC;">' +
        '<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00B4DC]/15 text-[#00B4DC] mb-4 mx-auto">RECOMMANDE</span>' +
        '<div class="text-4xl font-bold text-white mb-1 font-mono">9&euro;</div>' +
        '<div class="text-light-500 text-sm mb-4">/mois</div>' +
        '<hr class="border-white/10 mb-4">' +
        '<ul class="text-left space-y-3 mb-6 flex-1">' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Tout du plan Gratuit</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Briefing MIA quotidien complet</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Contexte marche complet</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Intermarket ES/NQ + AMD</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Regime Tracker live</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Alertes Discord</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Briefings archives</li>' +
        '</ul>' +
        '<a href="https://buy.stripe.com/14AdR16ky5jtc89a036AM00" target="_blank" class="w-full py-2.5 rounded-lg font-semibold text-sm text-center block text-[#0A0E17]" style="background:linear-gradient(135deg,#00B4DC,#0090B0);">Commencer — 7j gratuit</a>' +
      '</div>';

    // Teaser Premium
    var teaser = document.createElement('div');
    teaser.className = 'max-w-3xl mx-auto mt-6';
    teaser.innerHTML = '<div style="background:rgba(212,175,55,0.05);border:1px solid rgba(212,175,55,0.2);border-radius:0.75rem;padding:1rem;text-align:center;">' +
      '<span style="color:#D4AF37;font-weight:700;font-size:0.875rem;">Premium — Bientot disponible</span>' +
      '<p style="color:#94A3B8;font-size:0.8rem;margin-top:0.375rem;">Order Flow, Options & Gamma, Signaux ML seront disponibles quand le bot aura un track record verifiable.</p>' +
      '</div>';

    oldGrid.parentNode.insertBefore(newGrid, oldGrid.nextSibling);
    oldGrid.parentNode.insertBefore(teaser, newGrid.nextSibling);
  }

  // ─── #D LOGIN/REGISTER : Intercepter et pointer vers dashboard VPS ───
  function fixLoginRegister() {
    // Intercepter le formulaire login
    var loginForm = document.querySelector('form');
    var path = window.location.pathname;
    if (path.indexOf('/login') !== -1 && loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        window.location.href = DASHBOARD_URL + '/login';
      });
    }
    if (path.indexOf('/register') !== -1 && loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        window.location.href = DASHBOARD_URL + '/register';
      });
    }
  }

  // ─── #E FOOTER : Ajouter lien Dashboard + Discord ───
  function fixFooterDashboard() {
    var footerLinks = document.querySelectorAll('footer a');
    if (!footerLinks.length) return;
    var footer = document.querySelector('footer');
    if (!footer) return;
    // Chercher la premiere liste de liens dans le footer
    var linkContainer = footer.querySelector('div.grid, div.flex, ul');
    if (!linkContainer) return;
    // Ajouter Dashboard
    var dashLink = document.createElement('a');
    dashLink.href = DASHBOARD_URL;
    dashLink.target = '_blank';
    dashLink.rel = 'noopener noreferrer';
    dashLink.textContent = 'Dashboard';
    dashLink.className = footerLinks[0] ? footerLinks[0].className : '';
    var discordLink = document.createElement('a');
    discordLink.href = 'https://discord.gg/mia-ia-system';
    discordLink.target = '_blank';
    discordLink.rel = 'noopener noreferrer';
    discordLink.textContent = 'Discord';
    discordLink.className = dashLink.className;
    linkContainer.prepend(discordLink);
    linkContainer.prepend(dashLink);
  }

  // ─── #F GOOGLE OAUTH : Cacher le bouton factice ───
  function hideGoogleOAuth() {
    // Chercher les boutons Google OAuth (contiennent "Google" dans le texte)
    document.querySelectorAll('button').forEach(function (btn) {
      if (btn.textContent.indexOf('Google') !== -1) {
        btn.style.display = 'none';
        // Cacher aussi le separateur "Ou continuer avec"
        var prev = btn.previousElementSibling;
        if (prev && prev.textContent.indexOf('Ou') !== -1) prev.style.display = 'none';
      }
    });
  }

  // ─── #I SECTION RESULTATS VERIFIES ───
  function injectResultsSection() {
    if (document.getElementById('mia-results')) return;
    var pricing = document.getElementById('pricing');
    if (!pricing) return;

    var section = document.createElement('section');
    section.id = 'mia-results';
    section.style.cssText = 'padding:4rem 1rem;max-width:1100px;margin:0 auto;';

    section.innerHTML = '' +
      '<div style="text-align:center;margin-bottom:2.5rem;">' +
        '<h2 style="font-size:2rem;font-weight:800;margin-bottom:0.5rem;">' +
          '<span style="background:linear-gradient(135deg,#fff 0%,#00B4DC 50%,#D4AF37 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Resultats Verifies</span>' +
        '</h2>' +
        '<p style="color:#94A3B8;font-size:1rem;">Payouts reels depuis des prop firms regulees. Aucun paper trading.</p>' +
      '</div>' +

      // KPI cards
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem;">' +
        // Total payouts
        '<div style="background:rgba(30,41,59,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:1.25rem;text-align:center;">' +
          '<div style="font-family:JetBrains Mono,monospace;font-size:1.75rem;font-weight:700;color:#22c55e;">$19,880</div>' +
          '<div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">Total payouts</div>' +
        '</div>' +
        // Prop firms
        '<div style="background:rgba(30,41,59,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:1.25rem;text-align:center;">' +
          '<div style="font-family:JetBrains Mono,monospace;font-size:1.75rem;font-weight:700;color:#00B4DC;">3</div>' +
          '<div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">Prop firms</div>' +
        '</div>' +
        // Mois actif
        '<div style="background:rgba(30,41,59,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:1.25rem;text-align:center;">' +
          '<div style="font-family:JetBrains Mono,monospace;font-size:1.75rem;font-weight:700;color:#D4AF37;">12+</div>' +
          '<div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">Mois de trading</div>' +
        '</div>' +
        // Comptes funded
        '<div style="background:rgba(30,41,59,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:1.25rem;text-align:center;">' +
          '<div style="font-family:JetBrains Mono,monospace;font-size:1.75rem;font-weight:700;color:#fff;">50K</div>' +
          '<div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">Compte funded</div>' +
        '</div>' +
      '</div>' +

      // Timeline payouts
      '<div style="background:rgba(30,41,59,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:1.5rem;">' +
        '<div style="font-size:0.875rem;font-weight:700;color:#fff;margin-bottom:1rem;">Historique des payouts</div>' +
        '<div style="display:flex;flex-direction:column;gap:0.5rem;">' +

          // 2026
          '<div style="font-size:0.7rem;font-weight:600;color:#D4AF37;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">2026</div>' +
          _payoutRow('20 Mars', 'Lucid Trading', '$4,000', 'LucidFlex 50K — Funded') +
          _payoutRow('13 Mars', 'Lucid Trading', '$4,000', 'LucidFlex 50K — Funded') +
          _payoutRow('06 Mars', 'Lucid Trading', '-', 'LucidPro Trader Certificate — Compte funded') +
          _payoutRow('02 Mars', 'Phidias PropFirm', '$1,080', '') +

          // 2025
          '<div style="font-size:0.7rem;font-weight:600;color:#D4AF37;text-transform:uppercase;letter-spacing:0.05em;margin:0.75rem 0 0.25rem;">2025</div>' +
          _payoutRow('29 Juil', 'MyFunded Futures', '$1,200', '') +
          _payoutRow('29 Juil', 'MyFunded Futures', '$1,200', '') +
          _payoutRow('15 Mai', 'Phidias PropFirm', '$800', '') +
          _payoutRow('27 Avr', 'Phidias PropFirm', '$800', '') +
          _payoutRow('23 Avr', 'Phidias PropFirm', '$3,200', '') +
          _payoutRow('05 Avr', 'MyFunded Futures', '$1,200', '') +
          _payoutRow('20 Mars', 'Phidias PropFirm', '$4,800', '') +

          // 2024
          '<div style="font-size:0.7rem;font-weight:600;color:#D4AF37;text-transform:uppercase;letter-spacing:0.05em;margin:0.75rem 0 0.25rem;">2024</div>' +
          _payoutRow('23 Dec', 'Phidias PropFirm', '$1,600', '') +

        '</div>' +
      '</div>' +

      // Disclaimer
      '<div style="text-align:center;margin-top:1rem;">' +
        '<p style="font-size:0.7rem;color:#64748B;">Resultats passes ne garantissent pas les resultats futurs. Payouts verifiables aupres des prop firms citees.</p>' +
      '</div>';

    // Inserer AVANT la section pricing
    pricing.parentNode.insertBefore(section, pricing);
  }

  function _payoutRow(date, firm, amount, note) {
    var amountColor = amount === '-' ? '#94A3B8' : '#22c55e';
    var firmColors = { 'Lucid Trading': '#00B4DC', 'Phidias PropFirm': '#D4AF37', 'MyFunded Futures': '#a78bfa' };
    var firmColor = firmColors[firm] || '#94A3B8';
    return '' +
      '<div style="display:flex;align-items:center;padding:0.5rem 0.75rem;border-radius:0.5rem;background:rgba(10,14,23,0.5);">' +
        '<div style="width:70px;font-family:JetBrains Mono,monospace;font-size:0.75rem;color:#94A3B8;flex-shrink:0;">' + date + '</div>' +
        '<div style="flex:1;display:flex;align-items:center;gap:0.5rem;">' +
          '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + firmColor + ';flex-shrink:0;"></span>' +
          '<span style="font-size:0.8125rem;color:#cbd5e1;">' + firm + '</span>' +
          (note ? '<span style="font-size:0.65rem;color:#64748B;margin-left:0.25rem;">' + note + '</span>' : '') +
        '</div>' +
        '<div style="font-family:JetBrains Mono,monospace;font-size:0.875rem;font-weight:600;color:' + amountColor + ';">' + amount + '</div>' +
      '</div>';
  }

  // ─── #G HEADER OPAQUE + POSITION SOUS LE TICKER ───
  function fixHeaderOpaque() {
    var header = document.querySelector('header.fixed') || document.querySelector('header[class*="fixed"]');
    if (header) {
      forceHeaderOpaque(header);
      header.style.setProperty('z-index', '100', 'important');
    }
    // Body padding : ticker 46px + header 64px = 110px
    document.body.style.setProperty('padding-top', '110px', 'important');
    // Le hero section (#hero ou premiere section) a souvent son propre pt-24
    var hero = document.getElementById('hero') || document.querySelector('main > section:first-child') || document.querySelector('.min-h-screen > main');
    if (hero) {
      hero.style.setProperty('padding-top', '0', 'important');
    }
  }

  // ─── #H TICKER — forcer le rechargement si le widget n'apparait pas ───
  function fixTicker() {
    setTimeout(function () {
      var ticker = document.getElementById('mia-tv-ticker');
      if (!ticker) return;
      // Si le widget est vide (pas de iframe TradingView), le recharger
      var iframe = ticker.querySelector('iframe');
      if (iframe) return; // deja charge
      // Recracher le widget
      ticker.innerHTML = '';
      var container = document.createElement('div');
      container.className = 'tradingview-widget-container';
      container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      var script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.textContent = JSON.stringify({
        symbols: [
          {proName:"AMEX:SPY",title:"SPY (ES)"},
          {proName:"NASDAQ:QQQ",title:"QQQ (NQ)"},
          {proName:"AMEX:IWM",title:"IWM (RTY)"},
          {proName:"AMEX:USO",title:"Petrole"},
          {proName:"AMEX:GLD",title:"Or"},
          {proName:"BITSTAMP:BTCUSD",title:"BTC"},
          {proName:"FX_IDC:EURUSD",title:"EUR/USD"},
          {proName:"NASDAQ:AAPL",title:"AAPL"},
          {proName:"NASDAQ:MSFT",title:"MSFT"},
          {proName:"NASDAQ:NVDA",title:"NVDA"},
          {proName:"NASDAQ:AMZN",title:"AMZN"},
          {proName:"NASDAQ:GOOGL",title:"GOOGL"},
          {proName:"NASDAQ:META",title:"META"},
          {proName:"NASDAQ:TSLA",title:"TSLA"}
        ],
        showSymbolLogo: false,
        isTransparent: true,
        displayMode: 'compact',
        colorTheme: 'dark',
        locale: 'fr'
      });
      container.appendChild(script);
      ticker.appendChild(container);
    }, 2000);
  }

  // ─── INIT ───
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
