import React, { useState } from "react";
import IconMenu from "../../assets/images/icon-menu.svg";
import IconMenuClose from "../../assets/images/icon-menu-close.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="">
      <div className="">
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img src={IconMenu} alt="IconMenu" />
          </button>
        </div>
        <div className="hidden sm:flex w-full lg:w-auto">
          <a href="#Home" className="li">
            Home
          </a>
          <a href="#New" className="li">
            New
          </a>
          <a href="#Popular" className="li">
            Popular
          </a>
          <a href="#Trending" className="li">
            Trending
          </a>
          <a href="#Categories" className="li">
            Categories
          </a>
        </div>
        {isOpen && (
          <div className="sm:hidden fixed inset-0 z-50 w-full flex justify-end ">
            <div className="flex items-center bg-off-white h-full w-[70%]">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 mx-4 focus:outline-none"
              >
                <img src={IconMenuClose} alt="IconMenuClose" />
              </button>
              <div className="sm:hidden flex w-full sm:w-auto flex-col ">
                <a href="#Home" className="li">
                  Home
                </a>
                <a href="#New" className="li">
                  New
                </a>
                <a href="#Popular" className="li">
                  Popular
                </a>
                <a href="#Trending" className="li">
                  Trending
                </a>
                <a href="#Categories" className="li">
                  Categories
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
