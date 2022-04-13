import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="header__navigation nav">
      <NavLink
        /* ternaire definissant la classe */
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/"
      >
        <li>Accueil</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav__active" : "nav__link")}
        to="/about"
      >
        <li>A propos</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
