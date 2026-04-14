import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="containerNotFound">
      <h1 className="errorCode">404</h1>
      <h2 className="errorTitle">Página no encontrada</h2>
      
      <img 
        src="/b1f-removebg-preview.png" 
        alt="Ilustración error 404" 
        className="errorImg" 
      />

      <Link to="/" className="btnHome">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
