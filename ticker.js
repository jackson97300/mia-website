// TradingView Ticker - MIA IA SYSTEM v8 FINAL
(function() {
  if (window.MIA_TICKER_DONE) return;
  window.MIA_TICKER_DONE = true;
  
  function createTicker() {
    // Créer la barre ticker
    var bar = document.createElement('div');
    bar.id = 'mia-tv-ticker';
    bar.style.cssText = 'position:fixed;top:0;left:0;right:0;height:46px;background:#0a0e17;border-bottom:1px solid rgba(0,212,255,0.15);z-index:9999;';
    
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
    
    // Insérer le ticker
    document.body.insertBefore(bar, document.body.firstChild);
    
    // IMPORTANT: Décaler le header et le body vers le bas
    document.body.style.paddingTop = '46px';
    
    // Trouver et ajuster le header fixed
    var header = document.querySelector('header');
    if (header) {
      var headerStyle = window.getComputedStyle(header);
      if (headerStyle.position === 'fixed' || headerStyle.position === 'sticky') {
        header.style.top = '46px';
      }
    }
  }
  
  // Exécuter
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTicker);
  } else {
    createTicker();
  }
})();
