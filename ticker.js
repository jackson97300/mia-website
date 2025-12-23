// TradingView Ticker Widget - MIA IA SYSTEM (Version PRO)
// Position: AU-DESSUS du header, dans le flux normal (pas fixed)
(function() {
  function initTicker() {
    if (document.getElementById('mia-ticker-wrapper')) return;
    
    // Créer le wrapper
    var wrapper = document.createElement('div');
    wrapper.id = 'mia-ticker-wrapper';
    wrapper.style.cssText = 'width:100%;background:#0a0e17;border-bottom:1px solid rgba(0,212,255,0.2);';
    
    // Container TradingView standard
    var container = document.createElement('div');
    container.className = 'tradingview-widget-container';
    
    var widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    container.appendChild(widget);
    
    // Script TradingView
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.textContent = JSON.stringify({
      "symbols": [
        {"proName": "CME_MINI:ES1!", "title": "ES"},
        {"proName": "CME_MINI:NQ1!", "title": "NQ"},
        {"proName": "CME_MINI:RTY1!", "title": "RTY"},
        {"proName": "SP:SPX", "title": "SPX"},
        {"proName": "NASDAQ:NDX", "title": "NDX"},
        {"proName": "CBOE:VIX", "title": "VIX"},
        {"proName": "NYMEX:CL1!", "title": "Pétrole"},
        {"proName": "COMEX:GC1!", "title": "Or"},
        {"proName": "BITSTAMP:BTCUSD", "title": "BTC"}
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "compact",
      "colorTheme": "dark",
      "locale": "fr"
    });
    container.appendChild(script);
    wrapper.appendChild(container);
    
    // Insérer tout en haut du body (AVANT le header)
    document.body.insertBefore(wrapper, document.body.firstChild);
  }
  
  // Exécuter dès que possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTicker);
  } else {
    initTicker();
  }
})();
