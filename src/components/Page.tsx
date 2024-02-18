import React, { useState } from "react";
import { Link, PageProps } from "gatsby";
import { Header } from "./Header";

const linkPrefixesMap: Record<keyof PageContextGeneral["links"], string> = {
  Email: "mailto:",
  Phone: "tel:",
  Blog: "",
  GitHub: "",
  Instagram: "",
  LinkedIn: "",
  X: "",
};

const Page: React.FC<{
  children: React.ReactNode;
  general: PageContextGeneral;
}> = ({ children, general }) => {
  const socialLinks = (
    Object.keys(general.links) as (keyof typeof general.links)[]
  )
    .filter((key) => general.links[key])
    .map((key) => ({
      text: key,
      href: `${linkPrefixesMap[key]}${general.links[key]}`,
    }));

  return (
    <div className="text-grey6 bg-slate-100 min-h-screen flex flex-col">
      <Header general={general} />

      <main className="container py-4 flex-grow">{children}</main>

      <footer>
        <div className="bg-gray-200 text-gray-900 py-4">
          <div className="container py-4">
            <div className="flex justify-center">
              {socialLinks.map(({ text, href }) => (
                <a key={text} href={href} className="hover:underline mx-4">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white text-center py-2">
          <div className="container py-4">
            <p>&copy; 2023 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;

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
