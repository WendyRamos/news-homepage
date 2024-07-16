import React from "react";
import NavBar from "./NavBar";
import LogoPage from "./LogoPage";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <LogoPage/>
      <NavBar/>
    </div>
  );
}
export default Header;
