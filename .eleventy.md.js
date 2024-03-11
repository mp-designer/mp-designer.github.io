const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");

// hack to trigger VSCode extension "Tailwind CSS IntelliSense":
// className={
const headingClassesMap = {
  h1: "mb-8 text-grey6 font-sans-heading text-hL md:text-hXL",
  h2: "mb-4 mt-[7.5rem] text-grey6 font-sans-heading text-hM md:text-hL uppercase",
  h3: "mb-4 mt-12 text-grey6 font-sans-heading text-hS md:text-hM",
  h4: "mb-4 text-grey6 text-hS",
  h5: "mb-3 text-grey6 text-hS",
  h6: "mb-2 text-grey6 text-hS",
};
const maxWidthClass = "max-w-[793px] mx-auto"

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
    token.attrSet("class", `${headingClassesMap[token.tag]} ${maxWidthClass}`);
  }

  return self.renderToken(tokens, idx, options);
};
markdownLibrary.renderer.rules.paragraph_open = () => `<p class="mb-4 ${maxWidthClass}">`;
markdownLibrary.renderer.rules.image_open = () => `<img class="mb-20 w-full">`;

module.exports = markdownLibrary;
