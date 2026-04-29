import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CrearDeudorForm = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="nombreDeudor">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre del deudor" />
        </Form.Group>
      </Form>
    </>
  );
};

export default CrearDeudorForm;
