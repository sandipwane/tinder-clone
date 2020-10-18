import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import TinderLogo from "../Icons/tinder-logo.svg";

import "./styles.css";

function Header() {
  return (
    <div className="header">
      <IconButton title="Profile">
        <PersonIcon />
      </IconButton>
      <img
        className="header__logo"
        title="Tinder"
        alt="logo"
        src={TinderLogo}
      />
      <IconButton title="Chat">
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
