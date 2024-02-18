import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/Page";
import { HtmlHead } from "../components/HtmlHead";

const ProjectPageTemplate: React.FC<PageProps<{}, PageContext<ProjectData>>> = ({
  pageContext,
}) => {
  const { slug, title, html } = pageContext.data;

  return (
    <Page general={pageContext.general}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default ProjectPageTemplate;

export const Head: HeadFC<{}, PageContext<ProjectData>> = ({
  pageContext,
}) => <HtmlHead title={pageContext.title}></HtmlHead>;
