import { Renderer } from "marked";

type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// hack to trigger VSCode extension "Tailwind CSS IntelliSense":
// className={
export const headingClassesMap: Record<TagName, string> = {
  h1: "mb-6 text-4xl font-semibold leading-none tracking-tight text-gray-900 sm:text-5xl md:text-6xl",
  h2: "mt-4 mb-4 text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl",
  h3: "mt-2 mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl",
  h4: "mb-4 text-1xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:text-3xl",
  h5: "mb-2 text-1xl font-semibold leading-none tracking-tight text-gray-900 sm:text-1xl md:text-2xl",
  h6: "mb-2 text-1xl font-semibold leading-none tracking-tight text-gray-900",
};

export const heading: Renderer["heading"] = (text, level) => {
  const tagName = `h${level}` as TagName;
  const classes = headingClassesMap[tagName];

  return `
  <${tagName} class='${classes}'>
    ${text}
  </${tagName}>`;
};
