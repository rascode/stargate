//imports
const pluginWebc  = require("@11ty/eleventy-plugin-webc");
const pluginRss   = require("@11ty/eleventy-plugin-rss");

//config function
module.exports = function(eleventyConfig) {

    //passthroughs
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy(".prettierrc");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy({"src/styles" : "/styles"});
    
    //plugins
    eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(pluginRss);


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