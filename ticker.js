// TradingView Ticker - MIA IA SYSTEM v9 FORCE
(function() {
  if (window.MIA_TICKER_DONE) return;
  window.MIA_TICKER_DONE = true;
  
  function createTicker() {
    // 1. INJECTER LE CSS EN FORCE
    var style = document.createElement('style');
    style.textContent = `
      #mia-tv-ticker {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 46px !important;
        background: #0a0e17 !important;
        border-bottom: 1px solid rgba(0,212,255,0.15) !important;
        z-index: 99999 !important;
      }
      body {
        padding-top: 46px !important;
      }
      header, nav, [class*="header"], [class*="Header"], [class*="navbar"], [class*="Navbar"] {
        top: 46px !important;
      }
    `;
    document.head.appendChild(style);
    
    // 2. Créer la barre ticker
    var bar = document.createElement('div');
    bar.id = 'mia-tv-ticker';
    
    // Container TradingView
    var container = document.createElement('div');
    container.className = 'tradingview-widget-container';
    
    var widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    container.appendChild(widgetDiv);
    
    // Script TradingView
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.text = JSON.stringify({
      "symbols": [
        {"proName": "CME_MINI:ES1!", "title": "ES"},
        {"proName": "CME_MINI:NQ1!", "title": "NQ"},
        {"proName": "CME_MINI:RTY1!", "title": "RTY"},
        {"proName": "SP:SPX", "title": "SPX"},
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
    bar.appendChild(container);
    
    // Insérer le ticker tout en haut
    document.body.insertBefore(bar, document.body.firstChild);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTicker);
  } else {
    createTicker();
  }
})();
