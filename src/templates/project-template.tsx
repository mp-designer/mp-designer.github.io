import React from "react";
import { PageProps } from "gatsby";
import Page from "../components/Page";

const PageTemplate: React.FC<PageProps<{}, PageContext<ProjectData>>> = ({
  pageContext,
}) => {
  const { slug, title, html } = pageContext.data;

  return (
    <Page general={pageContext.general}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default PageTemplate;
