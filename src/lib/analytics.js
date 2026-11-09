// Cookieless page-view beacon to the admin panel's public API (the same
// endpoint ruudjuffermans.nl uses; see admin-panel/server/src/website). Only the
// path, the language, the referring page and the time are sent — no cookie, no
// IP address stored, nothing that follows a visitor across sites. The panel
// attributes the view to this site by the request's Origin header.
//
// Nothing is sent in development unless VITE_API_URL points at a local panel,
// and never when the visitor asked not to be tracked.

const API_URL = (import.meta.env.VITE_API_URL || "https://api.ruudjuffermans.nl").replace(/\/$/, "");
const ENABLED = import.meta.env.PROD || Boolean(import.meta.env.VITE_API_URL);

function optedOut() {
  return navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.globalPrivacyControl === true;
}

/** Fire-and-forget. Never throws: analytics must not break a page. */
export function recordPageView(path) {
  if (typeof window === "undefined" || !ENABLED || optedOut()) return;
  const body = JSON.stringify({
    site: "loodgieterjuffermans.nl",
    path,
    locale: "nl",
    referrer: document.referrer || undefined,
  });
  fetch(`${API_URL}/api/website/analytics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
