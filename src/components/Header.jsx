import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu when link is clicked
  };
  const onLogoClick = () => {
    const home = document.getElementById("home");
		if (home) {
			home.scrollIntoView({ behavior: "smooth" });
		}
  }
  return (
    <nav className="navigation-main-container">
      <div className="navigation-sub-container gradient-3">
        <div className="logo" onClick={onLogoClick}>Embi</div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
             <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experiences</a></li>
          <li><a href="#tech-stack" onClick={handleLinkClick}>Tech Stack</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contacts" onClick={handleLinkClick}>Contacts</a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
}
