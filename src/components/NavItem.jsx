import React from "react";
import "../style.css";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="{props.link}">
        {props.name}
      </a>
    </li>
  );
}

export default NavItem;
