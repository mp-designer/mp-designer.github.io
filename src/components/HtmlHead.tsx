import React from "react";

export const HtmlHead: React.FC<{ title: string; }> = ({ title }) => (
  <>
    <title>{title}</title>

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
