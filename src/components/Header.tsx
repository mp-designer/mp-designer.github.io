import React, { useState } from "react";
import { Link } from "gatsby";

const MenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="block md:hidden absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white"
    onClick={onClick}
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
)

export const Header: React.FC<{
  emailLink: string;
}> = ({ emailLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/#projects" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: emailLink },
  ];

  return (
    <div className="sticky z-10 top-0 left-0 right-0 bg-gray-700 text-white">
      <MenuButton onClick={() => setIsOpen(!isOpen)} />

      <div className="container mx-auto">
        <nav className={`block p-4 md:hidden ${isOpen ? "" : "hidden"}`}>
          <div className="flex flex-col space-y-2">
            {menuLinks.map(({ text, href }) => (
              <Link to={href} className="hover:text-gray-300">
                {text}
              </Link>
            ))}
          </div>
        </nav>

        <nav className="hidden p-4 md:flex justify-end">
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
  );
};

