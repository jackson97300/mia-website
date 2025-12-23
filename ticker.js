// TradingView Ticker - MIA IA SYSTEM v7 FINAL
(function() {
  // Anti-doublon
  if (window.MIA_TICKER_DONE) return;
  window.MIA_TICKER_DONE = true;
  
  function createTicker() {
    // Créer la barre
    var bar = document.createElement('div');
    bar.id = 'mia-tv-ticker';
    bar.style.cssText = 'background:#0a0e17;border-bottom:1px solid rgba(0,212,255,0.15);';
    
    // Container TradingView
    var container = document.createElement('div');
    container.className = 'tradingview-widget-container';
    
    var widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    container.appendChild(widgetDiv);
    
    // Script TradingView (créé correctement)
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
    
    // Insérer tout en haut
    document.body.insertBefore(bar, document.body.firstChild);
  }
  
  // Exécuter
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTicker);
  } else {
    createTicker();
  }
})();
