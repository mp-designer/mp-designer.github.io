const mdLibrary = require("./.eleventy.md");
const Image = require("@11ty/eleventy-img");
const htmlParser = require("node-html-parser");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", mdLibrary);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addNunjucksAsyncShortcode(
    "svgIcon",
    async (src, alt, sizes) => {
      let metadata = await Image(src, {
        formats: ["svg"],
        dryRun: true,
      });
      return metadata.svg[0].buffer.toString();
    }
  );

  eleventyConfig.addCollection("projects", function (collectionApi) {
    const indexData = collectionApi
      .getAllSorted()
      .filter(function (item) {
        return item.inputPath.includes("/index.");
      })[0].data;

    return collectionApi
      .getAllSorted()
      .filter(function (item) {
        return item.inputPath.includes("/projects/");
      })
      .map((item) => {
        let parsed;
        const getParsed = () => {
          if (parsed) return parsed;

          const html = mdLibrary.render(item.template._frontMatter.content);
          return (parsed = htmlParser.parse(html));
        };

        item.data.global = indexData.global;
        item.data.layout ??= "base.njk";
        item.data.title ??= (() => getParsed().querySelector("h1")?.innerText)();
        item.data.imgSrc ??= (() => getParsed().querySelector("img")?.attributes.src)();
        item.data.description ??= (() => getParsed().querySelector("p")?.innerText)();
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
