import React, { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
const pages = [
  { id: "home", path: "Home" },
  { id: "about", path: "About" },
  { id: "services", path: "Services" },
  { id: "case-studies", path: "Case studies" },
  { id: "our-time", path: "Our team" },
  { id: "direction", path: "Direction" },
  { id: "our-partners", path: "Our partners" },
  { id: "branches", path: "Branches" },
  { id: "testomonials", path: "Testomonials" },
  { id: "careers", path: "Careers" },
  { id: "contact-us", path: "Contact Us" },
];

function SidebarButton({ scrollToElement }) {
  const [burgerLine, setBurgerLine] = useState("burgerBar unclicked");
  const [menuClass, setMenuCLass] = useState("menu hidden");
  const [isMenuCLicked, setIsMenuCLicked] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/allVacancies") {
      setBurgerLine("burgerBlack");
    }
  }, []);

  const updateMenu = () => {
    if (!isMenuCLicked) {
      if (window.location.pathname === "/allVacancies") {
        setBurgerLine("burgerBlack");
      }
      setBurgerLine("burgerBar clicked");
      setMenuCLass("menu visible");
    } else {
      setBurgerLine("burgerBar unclicked");
      setMenuCLass("menu hidden");
      if (window.location.pathname === "/allVacancies") {
        setBurgerLine("burgerBlack clicked");
      }
    }
    setIsMenuCLicked(!isMenuCLicked);
  };

  return (
    <div>
      <div className="burgerMenu" onClick={updateMenu}>
        <div className={burgerLine}></div>
        <div className={burgerLine}></div>
        <div className={burgerLine}></div>
      </div>
      <div className={menuClass}>
        <ul className="routes">
          {pages.map((page, id) => (
            <li
            key={id}
              onClick={() => {
                scrollToElement(page?.id);
                updateMenu();
              }}
            >
              <a
                className="routes-link"
                href={`#${page.id}`}
                key={page.id}
                data-target={`${page?.id}`}
              >
                {page.path}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarButton;
