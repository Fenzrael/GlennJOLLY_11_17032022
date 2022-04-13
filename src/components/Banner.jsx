import { useLocation } from "react-router-dom";

const Banner = () => {
  // Variable stockant chemin actuel
  const currentLocation = useLocation();

  // Condition verifiant si on est sur About ou Home
  const aboutLocation = () => {
    if (currentLocation.pathname === "/about") {
      return true;
    } else {
      return false;
    }
  };

  // Ternaires créant JSX dynamique par rapport a la page
  return (
    <div
      className={aboutLocation() ? "banner aboutBanner" : "banner homeBanner"}
    >
      <p
        className="banner__txt"
        style={aboutLocation() ? { display: "none" } : { display: "block" }}
      >
        Chez vous, partout et ailleurs
      </p>
      <img
        src={
          aboutLocation() ? "../img/banner_about.jpg" : "../img/banner_home.jpg"
        }
        className="banner__img"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
