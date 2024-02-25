const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");

// hack to trigger VSCode extension "Tailwind CSS IntelliSense":
// className={
const headingClassesMap = {
  h1: "mb-8 font-sans-heading text-hL md:text-hXL",
  h2: "mb-6 font-sans-heading text-hM md:text-hL",
  h3: "mb-4 font-sans-heading text-hS md:text-hM",
  h4: "mb-4 text-hS",
  h5: "mb-3 text-hS",
  h6: "mb-2 text-hS",
};

// Initialize markdown-it
let markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
});
// .use(markdownItAnchor, {
//   permalink: true,
//   permalinkClass: "permalink",
//   permalinkSymbol: "#",
// });

// Add a custom plugin to add classes to headings
markdownLibrary.renderer.rules.heading_open = function (
  tokens,
  idx,
  options,
  env,
  self
) {
  const token = tokens[idx];
  // Add a class based on the heading level
  if (headingClassesMap[token.tag]) {
    token.attrSet("class", headingClassesMap[token.tag]);
  }

  return self.renderToken(tokens, idx, options);
};

module.exports = markdownLibrary;
