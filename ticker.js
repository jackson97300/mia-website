// TradingView Ticker Widget - MIA IA SYSTEM
(function() {
  function initTicker() {
    // Créer le container
    var container = document.createElement('div');
    container.id = 'mia-ticker';
    container.style.cssText = 'position:fixed;top:72px;left:0;right:0;z-index:40;background:rgba(13,17,28,0.95);border-bottom:1px solid rgba(0,212,255,0.15);height:46px;';
    
    var widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    widget.style.cssText = 'height:46px;';
    container.appendChild(widget);
    
    // Ajouter au DOM après le header
    var header = document.querySelector('header');
    if (header) {
      header.style.zIndex = '50';
      header.parentNode.insertBefore(container, header.nextSibling);
    } else {
      document.body.appendChild(container);
    }
    
    // Charger TradingView
    var script = document.createElement('script');
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
  }
  
  if (document.readyState === 'complete') {
    setTimeout(initTicker, 100);
  } else {
    window.addEventListener('load', function() {
      setTimeout(initTicker, 100);
    });
  }
})();
