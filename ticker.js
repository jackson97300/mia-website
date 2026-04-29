// TradingView Ticker - MIA IA SYSTEM v10 (FIX 30/04 Jackson : noms actifs visibles + gap header)
(function() {
  if (window.MIA_TICKER_DONE) return;
  window.MIA_TICKER_DONE = true;

  // FIX 30/04 (Jackson "on vois pas les actifs + trop collé au entete") :
  //  - displayMode "compact" -> "regular" pour afficher les noms (SPY, QQQ, ...)
  //  - height 46 -> 56px pour donner de l'air au widget regular
  //  - border-bottom plus visible (separation ticker/header)
  //  - margin-bottom 4px = gap visuel ticker/header
  //  - body padding et header top alignes sur 60px (= 56 ticker + 4 gap)
  var TICKER_H = 56;
  var TICKER_GAP = 4;
  var TICKER_TOTAL = TICKER_H + TICKER_GAP;  // 60px

  function createTicker() {
    // 1. INJECTER LE CSS EN FORCE
    // FIX 30/04 (review) : ne pas forcer top/padding sur les pages ou le ticker
    // est cache par mia-fixes.css (display:none). On scope les styles via une
    // class body.mia-ticker-visible activee uniquement quand le ticker est
    // effectivement visible (apres injection + check display).
    var style = document.createElement('style');
    style.textContent = `
      #mia-tv-ticker {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: ${TICKER_H}px !important;
        background: #0a0e17 !important;
        border-bottom: 2px solid rgba(0,180,220,0.45) !important;
        margin-bottom: ${TICKER_GAP}px !important;
        z-index: 99999 !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
      }
      body.mia-ticker-visible {
        padding-top: ${TICKER_TOTAL}px !important;
      }
      body.mia-ticker-visible header,
      body.mia-ticker-visible nav,
      body.mia-ticker-visible [class*="header"],
      body.mia-ticker-visible [class*="Header"],
      body.mia-ticker-visible [class*="navbar"],
      body.mia-ticker-visible [class*="Navbar"] {
        top: ${TICKER_TOTAL}px !important;
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
        {"proName": "AMEX:SPY", "title": "SPY (ES)"},
        {"proName": "NASDAQ:QQQ", "title": "QQQ (NQ)"},
        {"proName": "AMEX:IWM", "title": "IWM (RTY)"},
        {"proName": "AMEX:USO", "title": "Petrole"},
        {"proName": "AMEX:GLD", "title": "Or"},
        {"proName": "BITSTAMP:BTCUSD", "title": "BTC"},
        {"proName": "FX_IDC:EURUSD", "title": "EUR/USD"},
        {"proName": "NASDAQ:AAPL", "title": "AAPL"},
        {"proName": "NASDAQ:MSFT", "title": "MSFT"},
        {"proName": "NASDAQ:NVDA", "title": "NVDA"},
        {"proName": "NASDAQ:AMZN", "title": "AMZN"},
        {"proName": "NASDAQ:GOOGL", "title": "GOOGL"},
        {"proName": "NASDAQ:META", "title": "META"},
        {"proName": "NASDAQ:TSLA", "title": "TSLA"}
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "regular",
      "colorTheme": "dark",
      "locale": "fr"
    });
    container.appendChild(script);
    bar.appendChild(container);
    
    // Insérer le ticker tout en haut
    document.body.insertBefore(bar, document.body.firstChild);

    // FIX 30/04 : activer le scope class uniquement si le ticker est visible
    // (mia-fixes.css le cache via display:none sur les pages principales).
    // setTimeout pour laisser CSS prendre effet apres injection.
    setTimeout(function() {
      var t = document.getElementById('mia-tv-ticker');
      if (!t) return;
      var visible = window.getComputedStyle(t).display !== 'none';
      if (visible) {
        document.body.classList.add('mia-ticker-visible');
      }
    }, 50);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTicker);
  } else {
    createTicker();
  }
})();
