import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error">
      <Header />
      <h1 className="error__title">404</h1>
      <p className="error__describe">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
      <Footer />
    </div>
  );
};

export default Error;
