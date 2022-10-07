//imports
const eleventyNavigationPlugin  = require("@11ty/eleventy-navigation");
const pluginRss                 = require("@11ty/eleventy-plugin-rss");
const pluginWebc                = require("@11ty/eleventy-plugin-webc");

//eleventy config function
module.exports = function(eleventyConfig) {

    //passthrough definitions
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy(".prettierrc");
    eleventyConfig.addPassthroughCopy("src/assets/");
    
    //plugin declarations
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginWebc);

    //front matter options
    eleventyConfig.setFrontMatterParsingOptions(
      {excerpt: true,excerpt_separator: "<!-- excerpt -->" } //excerpt specification
    );

    //default 11ty configuration overrides
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