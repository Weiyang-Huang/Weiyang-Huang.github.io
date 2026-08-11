module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    standard: [
      "misc-section",
      "misc-prompt",
      "misc-lead",
      "misc-gallery-frame",
      "misc-gallery",
      "visitor-map",
      "visitor-map-inner",
      "section-heading",
      "section-heading--plain",
      "heading-icon",
    ],
  },
};
