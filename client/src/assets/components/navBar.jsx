import { useState } from "react";
import "./navBar.css";


function NavBar() {
  const handleClick = (event) => {
    event.preventDefault();
    const icon = event.currentTarget;
    const anchor = icon.closest("a");
    icon.classList.add("shrink")
    setTimeout(() => {
      icon.classList.remove("shrink");
      if (anchor && anchor.href) {
        window.open(anchor.href, anchor.target || "_self");
      }
    }, 250);
  }
  return (
    <>
      <nav className="navbar">
        <a href="#" className="name" onClick={handleClick}>codykha</a>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/cody-kha" target="_blank"><i className="fa-brands fa-linkedin icon1" onClick={handleClick}></i></a>
          </li>
          <li>
            <a href="https://github.com/codykhadev" target="_blank"><i className="fa-brands fa-square-github icon2" onClick={handleClick}></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-envelope icon3" onClick={handleClick}></i></a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
