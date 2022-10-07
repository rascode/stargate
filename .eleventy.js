//imports
const eleventyNavigationPlugin  = require("@11ty/eleventy-navigation");
const pluginRss                 = require("@11ty/eleventy-plugin-rss");
const pluginWebc                = require("@11ty/eleventy-plugin-webc");

//eleventy config function
module.exports = function(eleventyConfig) {

    //passthroughs
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy(".prettierrc");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy({"src/styles" : "/styles"});
    
    //plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginWebc);

    //custom configuration
    return {
      dir:{
        input:    "src",        
        data:     "data",
        includes: "templates/includes",
        layouts:  "templates/layouts",
        output:   "dist"
      },
      dataTemplateEngine: "njk",
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "liquid", "njk", "md"],
    }
  };