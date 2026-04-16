import "./InfoCard.css";

type infoCardType = {
  children: React.ReactNode;
  tipo?: string;
  imagen: string;
  valor: number;
  text: string;
};

const InfoCard = ({ children, tipo, imagen, valor, text }: infoCardType) => {
  return (
    <>
      <div className="containerCard">
        <div className="titulo">
          <img src={`${imagen}`} alt="" className="logoInfoCard" />
          <h1 className="tituloInfoCard">{children}</h1>
        </div>
        <span className="valorInfoCard">
          {tipo === "precio"
            ? `$${valor}`
            : tipo === "porcentaje"
              ? `${valor}%`
              : valor}
        </span>
        <span className="textoInfoCard">{text}</span>
      </div>
    </>
  );
};

export default InfoCard;
