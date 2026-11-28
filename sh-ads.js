/* Google Ads: count taps on Call buttons as "Website call click" conversions.
   Loads only on the live domain, so previews never send data. */
(function () {
  var AW = 'AW-17677103673', LABEL = 'PQViCNH5lMEdELnkjO1B';
  if (!/(^|\.)shreshteyecare\.com$/.test(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + AW;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', AW, { allow_google_signals: false, allow_ad_personalization_signals: false });
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href^="tel:"]');
    if (a) gtag('event', 'conversion', { send_to: AW + '/' + LABEL });
  }, true);
})();
