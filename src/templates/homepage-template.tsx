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
      <div className="py-32 md:py-48 lg:py-56">
        <div className="">
          <h1 className={headingClassesMap.h1}>{general.greet}</h1>

          <p className={paragraphClassName}>{general.greetSubText}</p>
        </div>
      </div>

      <div id="projects" className="py-16">
        <h2 className={headingClassesMap.h2}>Projects</h2>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          {data.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
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

export { Head } from "../components/Page";
