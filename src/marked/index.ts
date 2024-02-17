import { Renderer, marked } from "marked";

import { heading } from "./elements/heading";
import { paragraph } from "./elements/paragraph";

// docs: https://marked.js.org/using_pro#renderer
const renderer: Partial<Renderer> = {
  heading,
  paragraph
};

marked.use({ renderer });

export { marked };
