module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy(".prettierrc");
    eleventyConfig.addPassthroughCopy({"src/assets/images" : "/assets/img"});
    eleventyConfig.addPassthroughCopy({"src/assets/fonts" : "/assets/fonts"});
    eleventyConfig.addPassthroughCopy("src/styles");

    return {
      dir:{
        input: "src/content",        
        data: "../data",
        includes: "../templates/partials",
        layouts: "../templates/layouts",
        output: "dist"
      },
      dataTemplateEngine: "njk",
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "liquid", "njk", "md"],
    }
  };