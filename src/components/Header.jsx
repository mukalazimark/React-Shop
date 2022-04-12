import React from "react";
import NavItem from "./NavItem";

function Header() {
  return (
    <nav className="navbar bg-dark navbar-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Thunder Shop
          </a>
        </div>
        <ul className="nav navbar">
          <NavItem link="#" name="Home" />
          <NavItem link="#" name="Cart" />
          <NavItem link="#" name="Check Out" />
          <NavItem link="#" name="About Us" />
        </ul>
      </div>
    </nav>
  );
}

export default Header;
