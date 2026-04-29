import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const ModificarEntrega = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="nombreProveedor">
          <Form.Label>Nombre del proveedor</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre del deudor" />
        </Form.Group>
      </Form>
    </>
  );
};

export default ModificarEntrega;
