/* Analytics: OFF. To switch on later (after Jeff OKs and privacy.html is updated),
   set ENABLED = true and fill PROVIDER_SRC / DOMAIN for a privacy-friendly counter
   (e.g. Plausible or GoatCounter). Keeps utm_* query params intact for reporting. */
(function () {
  var ENABLED = false;
  var PROVIDER_SRC = ""; // e.g. "https://plausible.io/js/script.js"
  var DOMAIN = "bowmanforcitycouncil.com";
  if (!ENABLED || !PROVIDER_SRC) return;
  var s = document.createElement("script");
  s.defer = true; s.src = PROVIDER_SRC; s.setAttribute("data-domain", DOMAIN);
  document.head.appendChild(s);
})();
