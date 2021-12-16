import React from "react";
import "./Header.css";
import ebinLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={ebinLogo} className="ebinLogo" alt="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item ou User..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </div>
      </div>

      <div className="loginButton">Get In</div>
    </div>
  );
};
