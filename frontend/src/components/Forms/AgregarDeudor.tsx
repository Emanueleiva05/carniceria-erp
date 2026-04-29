import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const AgregarFactura = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="agregarFactura">
          <Form.Label>Agregar factura</Form.Label>
          <Form.Control
            type="file"
            placeholder="Ingrese factura de la entrega"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default AgregarFactura;
