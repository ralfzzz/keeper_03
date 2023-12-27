import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Ralfzz with Dr. Angela Yu Udemy</p>
    </footer>
  );
}

export default Footer;
