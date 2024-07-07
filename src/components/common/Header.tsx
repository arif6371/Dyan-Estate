import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import dylanEstateLogo from "../../assets/dylan-estate-logo.png";
import { NavigationItems } from "./NavigationItems";
import { Icons } from "./Icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md relative">
      <nav className="flex items-center justify-between md:mx-14 p-4">
        <div>
          <img src={dylanEstateLogo} alt="dylan-estate-logo" />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <NavigationItems className="space-y-0 lg:space-y-0 uppercase font-bold" />
          <Icons />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
          <NavigationItems className="p-4 uppercase font-bold space-y-4" />
          <Icons className="p-4" />
        </div>
      )}
    </header>
  );
};

export default Header;
