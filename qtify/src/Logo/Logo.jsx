import React from "react";
import LogoImage from "../assets/logo.png";
import "./Logo.css"

export default function Logo() {
  return (
    <img className="logo-img" src={LogoImage} alt="logo" height={40} width={67} />
  );
}
