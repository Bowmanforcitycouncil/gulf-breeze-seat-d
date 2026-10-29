/* Site analytics: GoatCounter (no cookies, no personal data). Approved by Jeff, Oct 29, 2026.
   TODO / PLACEHOLDER: the GoatCounter account is NOT created yet.
   After creating it at https://www.goatcounter.com/signup with the site code below,
   confirm GC_CODE matches exactly. Until the account exists, count requests simply fail (harmless).
   Docs: https://www.goatcounter.com/help/start  Campaigns (utm_campaign / utm_source): https://www.goatcounter.com/help/campaigns */
(function () {
  var ENABLED = true;
  var GC_CODE = "bowman-seat-d"; // PLACEHOLDER site code -> https://bowman-seat-d.goatcounter.com
  if (!ENABLED || !GC_CODE) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + GC_CODE + ".goatcounter.com/count");
  document.body.appendChild(s);
})();
