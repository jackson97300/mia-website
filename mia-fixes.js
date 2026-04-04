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

  // ─── #C PRICING : Cacher ancien + inserer nouveau (anti-React) ───
  function fixPricingSection() {
    setTimeout(doPricingFix, 800);
    setTimeout(doPricingFix, 2000);
    setTimeout(doPricingFix, 4000);
  }
  window.doPricingFix = doPricingFix;
  function doPricingFix() {
    // Si deja fixe, ne pas re-executer
    if (document.getElementById('mia-pricing-new')) return;

    var pricingSection = document.getElementById('pricing');
    if (!pricingSection) return;

    // Cacher l'ancien grid (React ne peut pas le re-montrer car on cache via CSS)
    var oldGrid = pricingSection.querySelector('[class*="grid-cols"]') || pricingSection.querySelector('.grid');
    if (!oldGrid) return;
    oldGrid.style.display = 'none';

    // Creer le nouveau grid 3 colonnes
    var newGrid = document.createElement('div');
    newGrid.id = 'mia-pricing-new';
    newGrid.className = 'grid md:grid-cols-3 gap-8 max-w-5xl mx-auto';
    newGrid.style.opacity = '1';
    newGrid.style.transform = 'none';
    newGrid.innerHTML = '' +
      // GRATUIT
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
        '</ul>' +
        '<a href="' + DASHBOARD_URL + '" target="_blank" class="w-full py-2.5 rounded-lg bg-white/10 text-light-400 font-semibold text-sm text-center block">Acceder gratuitement</a>' +
      '</div>' +
      // STARTER
      '<div class="glass p-6 text-center flex flex-col border-[#00B4DC] scale-105 shadow-lg shadow-[#00B4DC]/10" style="border-color:#00B4DC;">' +
        '<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00B4DC]/15 text-[#00B4DC] mb-4 mx-auto">POPULAIRE</span>' +
        '<div class="text-4xl font-bold text-white mb-1 font-mono" id="mia-starter-price">19&euro;</div>' +
        '<div class="text-light-500 text-sm mb-1" id="mia-starter-period">/mois</div>' +
        '<div class="text-green-500 text-xs font-semibold mb-4" id="mia-starter-save" style="display:none;"></div>' +
        '<hr class="border-white/10 mb-4">' +
        '<ul class="text-left space-y-3 mb-6 flex-1">' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Tout du plan Gratuit</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Contexte marche complet</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Intermarket ES/NQ + AMD</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Briefing MIA quotidien</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Regime Tracker live</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Alertes Discord (15min)</li>' +
        '</ul>' +
        '<a href="' + DASHBOARD_URL + '/pricing" target="_blank" class="w-full py-2.5 rounded-lg font-semibold text-sm text-center block text-[#0A0E17]" style="background:linear-gradient(135deg,#00B4DC,#0090B0);">Commencer — 7j gratuit</a>' +
      '</div>' +
      // PREMIUM
      '<div class="glass p-6 text-center flex flex-col">' +
        '<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 mx-auto" style="background:rgba(212,175,55,0.15);color:#D4AF37;">COMPLET</span>' +
        '<div class="text-4xl font-bold text-white mb-1 font-mono" id="mia-premium-price">49&euro;</div>' +
        '<div class="text-light-500 text-sm mb-1" id="mia-premium-period">/mois</div>' +
        '<div class="text-green-500 text-xs font-semibold mb-4" id="mia-premium-save" style="display:none;"></div>' +
        '<hr class="border-white/10 mb-4">' +
        '<ul class="text-left space-y-3 mb-6 flex-1">' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Tout du plan Starter</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Order Flow (delta, CVD, RVOL)</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Options & Gamma (murs, GEX)</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Signaux & Journal complet</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Battle Navale scoring</li>' +
          '<li class="flex items-start gap-2 text-sm text-light-300"><span class="text-green-500">&#10003;</span>Alertes Discord temps reel</li>' +
        '</ul>' +
        '<a href="' + DASHBOARD_URL + '/pricing" target="_blank" class="w-full py-2.5 rounded-lg font-semibold text-sm text-center block text-[#0A0E17]" style="background:linear-gradient(135deg,#00B4DC,#0090B0);">Debloquer tout — 7j gratuit</a>' +
      '</div>';

    // Ajouter toggle periode au-dessus de la grille
    var toggle = document.createElement('div');
    toggle.className = 'flex justify-center mb-6';
    toggle.innerHTML = '<div class="inline-flex bg-[#131722] rounded-full p-1 border border-white/10">' +
      '<button class="mia-period-btn mia-period-active" data-period="monthly">Mensuel</button>' +
      '<button class="mia-period-btn" data-period="semi">6 mois <span style="color:#00C853;font-size:0.6rem;font-weight:700;">-15%</span></button>' +
      '<button class="mia-period-btn" data-period="annual">Annuel <span style="color:#00C853;font-size:0.6rem;font-weight:700;">-30%</span></button>' +
      '</div>';
    // Inserer newGrid + toggle apres l'ancien grid cache
    oldGrid.parentNode.insertBefore(toggle, oldGrid.nextSibling);
    oldGrid.parentNode.insertBefore(newGrid, toggle.nextSibling);

    // CSS inline pour les boutons de periode
    var style = document.createElement('style');
    style.textContent = '.mia-period-btn{padding:0.4rem 1rem;border:none;border-radius:9999px;background:transparent;color:#94A3B8;font-family:Inter,sans-serif;font-size:0.8rem;font-weight:600;cursor:pointer;transition:all 0.2s;}.mia-period-btn:hover{color:#fff;}.mia-period-active{background:linear-gradient(135deg,#00B4DC,#0090B0);color:#fff;}';
    document.head.appendChild(style);

    // Toggle logique
    var prices = {
      starter: { monthly: ['19&euro;', '/mois', ''], semi: ['97&euro;', '/6 mois', 'Economisez 17&euro; (16,17&euro;/mois)'], annual: ['160&euro;', '/an', 'Economisez 68&euro; (13,33&euro;/mois)'] },
      premium: { monthly: ['49&euro;', '/mois', ''], semi: ['250&euro;', '/6 mois', 'Economisez 44&euro; (41,67&euro;/mois)'], annual: ['412&euro;', '/an', 'Economisez 176&euro; (34,33&euro;/mois)'] }
    };
    toggle.querySelectorAll('.mia-period-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        toggle.querySelectorAll('.mia-period-btn').forEach(function (b) { b.classList.remove('mia-period-active'); });
        btn.classList.add('mia-period-active');
        var p = btn.getAttribute('data-period');
        ['starter', 'premium'].forEach(function (plan) {
          var d = prices[plan][p];
          document.getElementById('mia-' + plan + '-price').innerHTML = d[0];
          document.getElementById('mia-' + plan + '-period').textContent = d[1];
          var saveEl = document.getElementById('mia-' + plan + '-save');
          if (d[2]) { saveEl.innerHTML = d[2]; saveEl.style.display = 'block'; }
          else { saveEl.style.display = 'none'; }
        });
      });
    });
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

  // ─── INIT ───
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
