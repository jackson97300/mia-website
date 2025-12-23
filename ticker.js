// TradingView Ticker Widget - MIA IA SYSTEM
(function() {
  function initTicker() {
    // Créer le container
    var container = document.createElement('div');
    container.id = 'mia-ticker';
    container.style.cssText = 'position:fixed;top:64px;left:0;right:0;z-index:9999;background:linear-gradient(180deg,rgba(13,17,28,0.98) 0%,rgba(13,17,28,0.95) 100%);border-bottom:1px solid rgba(0,212,255,0.2);';
    
    var widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    container.appendChild(widget);
    
    // Ajouter au DOM
    document.body.insertBefore(container, document.body.firstChild);
    
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
      "displayMode": "adaptive",
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
