import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src="Logo.svg" alt="Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold text-primary">
          <li><a href="#" className="linkHover">Used Cars</a></li>
          <li><a href="#" className="linkHover">Auctions</a></li>
          <li><a href="#" className="linkHover">New Cars</a></li>
          <li><a href="#" className="linkHover">Sell Cars</a></li>
          <li><a href="#" className="linkHover">Local Dealers</a></li>
          <li><a href="#" className="linkHover">Support</a></li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-500" />
            <a href="#" className="text-secondary hover:text-primary">Sign Up</a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="lg:hidden text-gray-700 ml-auto focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu (Toggle) */}
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-white border-t`}>
        <ul className="flex flex-col space-y-4 p-4 text-gray-900 font-semibold">
          <li><a href="#" className="block linkHover">Used Cars</a></li>
          <li><a href="#" className="block linkHover">Auctions</a></li>
          <li><a href="#" className="block linkHover">New Cars</a></li>
          <li><a href="#" className="block linkHover">Sell Cars</a></li>
          <li><a href="#" className="block linkHover">Local Dealers</a></li>
          <li><a href="#" className="block linkHover">Support</a></li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-secondary" />
            <a href="#" className="text-secondary hover:text-primary">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
