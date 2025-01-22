import React from "react";
import LogoImage from "../assets/logo.png";
import "./Logo.css"

export default function Logo() {
  return (<div className="navbarContainer"><img flex="20" src={LogoImage} alt="logo" width={67} /></div>);
}
