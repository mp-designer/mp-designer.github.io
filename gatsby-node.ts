import { GatsbyNode } from "gatsby";
import { HTMLElement } from "node-html-parser";

const { marked } = require("./src/marked");
const path = require("path");
const fs = require("fs");
const htmlParser = require("node-html-parser");

const contentPath = path.join(__dirname, "src/content");
const projectsPath = path.join(contentPath, "projects");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const general: PageContextGeneral = require(path.join(contentPath, "general.json"));

  const projectFiles: string[] = fs.readdirSync(projectsPath);

  const projects = projectFiles.map<ProjectData>((projectFileName: string) => {
    const slug = projectFileName.replace(/\.[^.]+$/, "");
    const html = marked.parse(
      fs.readFileSync(path.join(projectsPath, projectFileName), {
        encoding: "utf8",
      })
    );
    const parsed: HTMLElement = htmlParser.parse(html);
    const h1Text: string | undefined = parsed.querySelector("h1")?.innerText;
    const imgSrc: string | undefined =
      parsed.querySelector("img")?.attributes.src;
    const description = parsed.querySelector("p")?.innerText

    return {
      slug,
      title: h1Text || projectFileName,
      description: description || '',
      imgSrc,
      html,
    };
  });

  createPage<PageContext<HomepageData>>({
    path: `/`,
    component: path.resolve("./src/templates/homepage-template.tsx"),
    context: {
      general,
      data: {
        projects,
      },
    },
  });

  projects.forEach((project) => {
    createPage<PageContext<ProjectData>>({
      path: `/project/${project.slug}`,
      component: path.resolve("./src/templates/project-template.tsx"),
      context: {
        general,
        data: project,
      },
    });
  });
};
