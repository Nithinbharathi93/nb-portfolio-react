import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onButtonClick = () => {
    fetch("nb_resume_final.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "nb_resume_final.pdf";
        alink.click();
      });
    });
  };

  return (
    <nav className="flex justify-between items-center w-full bg-[#0f0715] text-white p-4">
      <img className="w-12 nav-logo" src={logo} alt="Logo" />
      <h1 className="hidden md:block pl-2">nithinthelordest@gmail.com</h1>
      <ul className="flex flex-wrap justify-evenly w-1/2 mr-10 list-none items-center md:hidden">
        <li className="pr-3"><Link to="/">Home</Link></li>
        <li className="pr-3"><Link to="/about">About</Link></li>
        <li className="pr-3"><Link to="/portfolio">Portfolio</Link></li>
        <li className="pr-3"><Link to="/services">Services</Link></li>
        <li className="pr-3"><Link to="/experience">Experiences</Link></li>
        <li className="pr-3"><Link to="/contact">Contact</Link></li>
        <li className="pr-3"><Link onClick={onButtonClick}>Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;