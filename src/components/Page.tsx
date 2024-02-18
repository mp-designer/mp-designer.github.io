import React from "react";
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

export const Page: React.FC<{
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
    <div className="text-grey6 text-body3 bg-slate-100 min-h-screen flex flex-col">
      <Header general={general} emailLink={`${linkPrefixesMap.Email}${general.links.Email}`} />

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
