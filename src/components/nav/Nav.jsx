/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeButton, setActiveButton] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let currentActiveButton = activeButton;

      sections.forEach((section) => {
        const bounding = section.getBoundingClientRect();

        if (bounding.top <= 150 && bounding.bottom >= 150) {
          currentActiveButton = section.getAttribute("id");
        }
      });

      setActiveButton(currentActiveButton);
    };

    // Add 'DOMContentLoaded' listener to ensure all sections are available
    window.addEventListener("DOMContentLoaded", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("DOMContentLoaded", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeButton]);

  const getHomeLink = () => {
    if (["/signup", "/login"].includes(window.location.pathname)) {
      return activeButton === "contact" ? "/" : `/#${activeButton}`;
    } else {
      return `/#${activeButton}`;
    }
  };

  return (
    <nav>
      <ul>
        <li className={activeButton === "home" ? "active" : ""}>
          <a href={getHomeLink()}>Home</a>
        </li>
        <li className={activeButton === "about" ? "active" : ""}>
          <a href="/#about">About us</a>
        </li>
        <li className={activeButton === "product" ? "active" : ""}>
          <a href="/#product">Product</a>
        </li>
        <li className={activeButton === "whyus" ? "active" : ""}>
          <a href="/#whyus">Why us</a>
        </li>
        <li className={activeButton === "pricing" ? "active" : ""}>
          <a href="/#pricing">Pricing</a>
        </li>
        <li className={activeButton === "team" ? "active" : ""}>
          <a href="/#team">Team</a>
        </li>
        <li className={activeButton === "contact" ? "active" : ""}>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      <ul className="ul-right">
        <li className={activeButton === "login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </li>
        <li className={activeButton === "signup" ? "active" : ""}>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
