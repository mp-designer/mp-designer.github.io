import React, { useId, useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "../assets/icons/menu-24px.svg";

export const Header: React.FC<{
  general: PageContextGeneral;
}> = ({ general }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const menuId = `menu${id}`;
  const menuButtonId = `menu-button${id}`;

  const menuLinks = [
    { text: "Projects", href: "/#projects" },
    { text: "About", href: "/#about" },
  ];

  return (
    <div className="sticky z-10 top-0 left-0 right-0 bg-white">
      <div className="container">
        <div className="h-16 md:h-24 flex justify-between items-center">
          <div className="h-full">
            <Link to="/#" className="h-full inline-flex items-center">
              <span className="">{general.homeText}</span>
            </Link>
          </div>

          <div className="flex lg:hidden flex-col items-end">
            <button
              id={menuButtonId}
              aria-controls={menuId}
              aria-label="Menu"
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </button>
          </div>

          <nav className="hidden lg:flex h-full space-x-8">
            {menuLinks.map(({ text, href }) => (
              <Link
                key={text}
                to={href}
                className="uppercase hover:underline underline-offset-8 inline-flex items-center"
              >
                <span>{text}</span>
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id={menuId}
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:hidden flex-col items-end space-y-2`}
          aria-hidden={!isOpen}
          aria-labelledby={menuButtonId}
        >
          {menuLinks.map(({ text, href }) => (
            <Link
              key={text}
              to={href}
              className="uppercase hover:underline underline-offset-8"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
