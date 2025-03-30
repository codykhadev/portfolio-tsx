import { useState, useEffect, useRef } from "react";
import "./navBar.css";

function NavBar() {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currScroll = window.scrollY;
      if (currScroll > lastScrollY.current && currScroll > 0) {
        navRef.current.classList.add("hidden");
      } else {
        navRef.current.classList.remove("hidden");
      }
      lastScrollY.current = currScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    const icon = event.currentTarget;
    const anchor = icon.closest("a");

    icon.classList.add("shrink");
    setTimeout(() => {
      icon.classList.remove("shrink");
      if (anchor && anchor.href) {
        window.open(anchor.href, anchor.target || "_self");
      }
    }, 250);
  };

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <a href="#" className="name" onClick={handleClick}>
          codykha
        </a>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/cody-kha" target="_blank">
              <i
                className="fa-brands fa-linkedin icon1"
                onClick={handleClick}></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/codykhadev" target="_blank">
              <i
                className="fa-brands fa-square-github icon2"
                onClick={handleClick}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className="fa-solid fa-envelope icon3"
                onClick={handleClick}></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
