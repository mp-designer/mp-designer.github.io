import React from "react";
import { Link } from "gatsby";

import { headingClassesMap } from "../marked/elements/heading";
import projectImageFallback from "../images/projectImageFallback.jpeg";
import { className as paragraphClassName } from "../marked/elements/paragraph";

const ProjectCard: React.FC<{
  project: ProjectData;
}> = ({ project }) => {
  return (
    <div className="group">
      <Link to={`/project/${project.slug}`}>
        <div className="overflow-hidden  mb-4 rounded-lg">
          <img
            src={project.imgSrc || projectImageFallback}
            className="object-cover group-hover:scale-110 transition-all ease-out duration-300 w-full aspect-square"
            alt={`Illustration of ${project.title}`}
          />
        </div>
        <h3 className={headingClassesMap.h5}>{project.title}</h3>
        <p className={paragraphClassName}>{project.description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
