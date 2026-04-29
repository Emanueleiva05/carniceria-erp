import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CrearPerdida = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="tiradoGrupo">
          <Form.Label>Tirado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la cantidad del producto que se perdio"
          />

          <Form.Label>Motivo</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ingrese motivo" />
        </Form.Group>
      </Form>
    </>
  );
};

export default CrearPerdida;
