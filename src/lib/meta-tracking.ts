const ATTRIBUTION_STORAGE_KEY = "extrema:utm-attribution";

const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic",
] as const;

type Attribution = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>>;

declare global {
  interface Window {
    fbq?: (
      command: "track",
      eventName: string,
      parameters?: Record<string, string>,
    ) => void;
  }
}

/** Keeps the landing-page UTM values available for CTA conversion events. */
export function captureUtmParameters() {
  const incoming = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  for (const key of ATTRIBUTION_PARAMS) {
    const value = incoming.get(key);
    if (value) attribution[key] = value;
  }

  if (Object.keys(attribution).length === 0) return;

  try {
    const previous = JSON.parse(
      sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}",
    ) as Attribution;

    sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify({ ...previous, ...attribution }),
    );
  } catch {
    // Tracking should never block the page if browser storage is unavailable.
  }
}

/** Sends the Meta standard Lead event when a group CTA is clicked. */
export function trackGroupLead(location: string) {
  let attribution: Attribution = {};

  try {
    attribution = JSON.parse(
      sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}",
    ) as Attribution;
  } catch {
    // The Lead event still fires without optional UTM values.
  }

  window.fbq?.("track", "Lead", {
    content_name: "Entrar no grupo exclusivo",
    content_category: "Grupo WhatsApp",
    button_location: location,
    ...attribution,
  });
}
