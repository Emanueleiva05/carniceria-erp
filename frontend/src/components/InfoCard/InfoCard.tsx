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
      <div className="card">
        <div className="card__encabezado">
          <img src={`${imagen}`} alt="" className="card__encabezado-img" />
          <h1 className="card__encabezado-titulo">{children}</h1>
        </div>

        <span className="card__valor">
          {tipo === "precio"
            ? `$${valor}`
            : tipo === "porcentaje"
              ? `${valor}%`
              : valor}
        </span>

        <span className="card__texto">{text}</span>
      </div>
    </>
  );
};

export default InfoCard;
