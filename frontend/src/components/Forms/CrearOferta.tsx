import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CrearOferta = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="nombreGrupo">
          <Form.Label>Minimo de kilos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese minimo de kilos para la oferta"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="precio_venta">
          <Form.Label>Precio de oferta</Form.Label>
          <Form.Control type="text" placeholder="Ingrese precio de la oferta" />
        </Form.Group>
      </Form>
    </>
  );
};

export default CrearOferta;
