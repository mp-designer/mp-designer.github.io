import React from "react";
import { PageProps, Link } from "gatsby";
import Page from "../components/Page";

import { headingClassesMap } from "../marked/elements/heading";
import { className as paragraphClassName } from "../marked/elements/paragraph";
import ProjectCard from "../components/ProjectCard";

const PageTemplate: React.FC<PageProps<{}, PageContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  return (
    <Page general={general}>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className={headingClassesMap.h1}>{general.greet}</h1>
          <p className={paragraphClassName}>{general.greetSubText}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`mailto:${general.links.Email}?subject=Job opportunity`}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {general.cta}
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div id="projects" className="py-16">
        <h2 className={headingClassesMap.h2}>Projects</h2>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          {data.projects.map((project, i) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>

      <div id="about" className="py-32 max-w-screen-sm">
        <h2 className={headingClassesMap.h2}>About</h2>

        <p className={paragraphClassName}>{general.about}</p>
      </div>
    </Page>
  );
};

export default PageTemplate;
