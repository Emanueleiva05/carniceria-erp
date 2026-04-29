import { Form } from "react-bootstrap";

type props = { id: string; titulo: string };

const Confirmar = ({ id, titulo }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="eliminarProducto">
          <h2>{titulo}</h2>
        </Form.Group>
      </Form>
    </>
  );
};

export default Confirmar;
