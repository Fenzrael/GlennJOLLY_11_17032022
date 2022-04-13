import * as React from "react";
import { NavLink } from "react-router-dom";

const LogoHeader = () => (
  <NavLink to="/">
    <img className="header__logo" src="../img/logo_header.png" alt="logo" />
  </NavLink>
);

export default LogoHeader;
