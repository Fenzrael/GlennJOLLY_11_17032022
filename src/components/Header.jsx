import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <LogoHeader className="header__logo" />
      <Navigation />
    </div>
  );
};

export default Header;
