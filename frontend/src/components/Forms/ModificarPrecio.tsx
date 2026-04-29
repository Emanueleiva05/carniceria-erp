import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const ModificarPrecioForm = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="categoriaGrupo">
          <Form.Label>Seleccionar producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el producto para cambiar de precio"
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Selecciona producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nuevo precio"
          ></Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default ModificarPrecioForm;
