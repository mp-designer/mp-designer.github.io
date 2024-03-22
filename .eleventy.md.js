const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");

// hack to trigger VSCode extension "Tailwind CSS IntelliSense":
// className={
const headingClassesMap = {
  h1: "mb-8 text-grey6 font-sans-heading text-hL md:text-hXL",
  h2: "mb-4 mt-14 md:mt-20 text-grey6 font-sans-heading text-hS md:text-hL font-bold uppercase",
  h3: "mb-[0.875rem] md:mb-4 mt-8 md:mt-10 text-grey6 font-sans-heading text-hS md:text-hM",
  // most likely unused
  h4: "my-3 text-grey6 font-sans-heading text-hS",
  h5: "my-2 text-grey6 font-sans-heading text-hS",
  h6: "my-1 text-grey6 font-sans-heading text-hS",
};
const maxWidthClass = "max-w-[793px] mx-auto"

let md = markdownIt({
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
md.renderer.rules.heading_open = function (
  tokens,
  idx,
  options,
  env,
  self
) {
  const token = tokens[idx];
  // Add a class based on the heading level
  if (headingClassesMap[token.tag]) {
    token.attrSet("class", `md ${headingClassesMap[token.tag]} ${maxWidthClass}`);
  }

  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => `<p class="md mb-[0.875rem] ${maxWidthClass}">`;
md.renderer.rules.image_open = (tokens, idx, options, env, self) => `<img class="md mb-20 w-full">`;
md.renderer.rules.bullet_list_open = (tokens, idx, options, env, self) => `<ul class="md pl-8 list-disc ${maxWidthClass}">`;
md.renderer.rules.ordered_list_open = (tokens, idx, options, env, self) => `<ol class="md pl-8 list-decimal ${maxWidthClass}">`;
md.renderer.rules.link_open = (tokens, idx, options, env, self) => `<a class="md cursor-pointer hover:underline">`;

module.exports = md;
