import { Renderer } from "marked";

export const className = "text-lg leading-8 text-gray-600";

export const paragraph: Renderer["paragraph"] = (text) => `
  <p class='${className}'>
    ${text}
  </p>`;
