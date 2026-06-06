/** Shared id for the contact request section rendered just before the footer. */
export const CONTACT_SECTION_ID = "contact";

/** Smoothly scroll the page to the contact request section (used by every "leave a request" CTA). */
export function scrollToContact() {
  document
    .getElementById(CONTACT_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
