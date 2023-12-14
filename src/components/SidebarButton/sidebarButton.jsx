import React, { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
const pages = [
  { id: "home", path: "Home" },
  { id: "services", path: "Services" },
  { id: "about", path: "About" },
  { id: "direction", path: "Direction" },
  { id: "case-studies", path: "Case studies" },
  { id: "our-team", path: "Our team" },
  { id: "branches", path: "Branches" },
  { id: "our-partners", path: "Our partners" },
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
              <Link
                className="routes-link"
                to={`#${page.id}`}
                key={page.id}
                data-target={`${page?.id}`}
              >
                {page.path}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarButton;
