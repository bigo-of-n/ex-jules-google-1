module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("static"); // Copies 'static' folder to 'public/static'

  return {
    dir: {
      input: "content",
      output: "public",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files to allow layouts
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
  };
};
