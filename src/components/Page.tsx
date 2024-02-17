import React, { useState } from "react";
import { Link } from "gatsby";
import { Header } from "./Header";

const linkPrefixesMap: Record<keyof PageContextGeneral['links'], string> = {
  Email: "mailto:",
  Phone: "tel:",
  Blog: '',
  GitHub: '',
  Instagram: '',
  LinkedIn: '',
  X: ''
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
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Header emailLink={socialLinks.find(({text}) => text === 'Email')?.href || '#'} />

      <main className="container mx-auto p-4 flex-grow">{children}</main>

      <footer>
        <div className="bg-gray-200 text-gray-900 py-4">
          <div className="container mx-auto p-4">
            <div className="flex justify-center">
              {socialLinks.map(({ text, href }) => (
                <Link to={href} className="hover:underline mx-4">
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white text-center py-2">
          <div className="container mx-auto p-4">
            <p>&copy; 2023 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
