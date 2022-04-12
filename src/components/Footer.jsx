import React from "react";

let cyear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {cyear}</p>
    </footer>
  );
}

export default Footer;
