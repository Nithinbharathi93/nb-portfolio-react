import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onButtonClick = () => {
    fetch("nb_resume_final.pdf").then((response) => {
        response.blob().then((blob) => {
            const fileURL =
                window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "nb_resume_final.pdf";
            alink.click();
        });
    });
};

  return (
    <nav className="nav-main">
        <img className="nav-logo" src={logo} alt="Logo" />
        <h1 className="nav-head">nithinthelordest@gmail.com</h1>
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/experience">Experiencs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link onClick={onButtonClick}>Resume</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;