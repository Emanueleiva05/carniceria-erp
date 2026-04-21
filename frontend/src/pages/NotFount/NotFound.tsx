import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="container__error">404</h1>
      <h1>Página no encontrada</h1>

      <img
        src="/b1f-removebg-preview.png"
        alt="Ilustración error 404"
        className="container__error-img"
      />

      <Link to="/" className="buttonHome">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
