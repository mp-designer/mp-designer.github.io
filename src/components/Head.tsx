import React from "react";
import { PageProps } from "gatsby";

export const Head: React.FC<PageProps<{}, PageContext>> = ({ pageContext }) => (
  <>
    <title>{pageContext.title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    ></link>
  </>
);
