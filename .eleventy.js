const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const Image = require("@11ty/eleventy-img");
const htmlParser = require("node-html-parser");

const mdLibrary = require("./.eleventy.md");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setLibrary("md", mdLibrary);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addNunjucksAsyncShortcode(
    "svgIcon",
    async (path, alt, sizes) => {
      let metadata = await Image(`src${path}`, {
        formats: ["svg"],
        dryRun: true,
      });
      return metadata.svg[0].buffer.toString();
    }
  );

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").map((item, index) => {
      let parsed;
      const getParsed = () => {
        if (parsed) return parsed;

        const html = mdLibrary.render(item.template._frontMatter.content);
        return (parsed = htmlParser.parse(html));
      };

      item.data.title ??= getParsed().querySelector("h1")?.innerText;
      item.data.imgSrc ??= getParsed().querySelector("img")?.attributes.src;
      item.data.description ??= getParsed().querySelector("p")?.innerText;
      item.data.index = index;
      return item;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
