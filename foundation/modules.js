// Developer-owned capabilities. Owners can hide sections, not enable new modules.
export const modules = Object.freeze({
  pages: true,
  projects: true,
  services: true,
  links: true,
  media: true,
  announcements: true,
  appearance: true,
  business: true,
});
export const sectionTypes = [
  "hero",
  "projects",
  "services",
  "announcements",
  "contact",
];
export const sectionLabels = {
  hero: "Introduction",
  projects: "Featured projects",
  services: "Services",
  announcements: "Announcements",
  contact: "Contact",
};
export const palettes = { blue: "#329bff", teal: "#43cdb8", violet: "#b3a0ff" };
