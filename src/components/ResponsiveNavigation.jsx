import React, { useState } from "react";
import { Link } from "@reach/router";

function ResponsiveNavigation({
  background,
  hoverBackground,
  linkColor,
  navLinks,
  logo
}) {
  const [navOpen, setNavOpen] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <nav className="responsive-toolbar" style={{ background: background }}>
      <ul
        style={{ background: background }}
        className={navOpen ? "active" : ""}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => {
              setHoverIndex(index);
            }}
            onMouseLeave={() => {
              setHoverIndex(-1);
            }}
            style={{
              background: hoverIndex === index ? hoverBackground || "#999" : ""
            }}
          >
            <Link to={link.path} style={{ color: linkColor }}>
              {" "}
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ResponsiveNavigation;
