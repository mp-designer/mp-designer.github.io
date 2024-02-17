import React, { useState } from "react";
import { Link } from "gatsby";

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
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = (
    Object.keys(general.links) as (keyof typeof general.links)[]
  )
    .filter((key) => general.links[key])
    .map((key) => ({
      text: key,
      href: `${linkPrefixesMap[key]}${general.links[key]}`,
    }));

  const menuLinks = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/#projects" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: socialLinks.find(({text}) => text === 'Email')?.href || '#' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <div className="sticky z-10 top-0 left-0 right-0 bg-gray-700 text-white">
        <button
          className="block md:hidden absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white"
          onClick={() => setIsOpen((s) => !s)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="container p-4 mx-auto">
          <nav className={`block md:hidden ${isOpen ? "" : "hidden"}`}>
            <div className="flex flex-col space-y-2">
              {menuLinks.map(({ text, href }) => (
                <Link to={href} className="hover:text-gray-300">
                  {text}
                </Link>
              ))}
            </div>
          </nav>

          <nav className="hidden md:flex justify-end">
            <div className="flex space-x-8">
              {menuLinks.map(({ text, href }) => (
                <Link to={href} className="hover:text-gray-300">
                  {text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

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
