import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CrearEntregaForm = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="proveedorGrupo">
          <Form.Label>Proveedor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese proveedor que realizo la entrega"
          />
          <Form.Group className="mb-3" controlId="archivoGrupo">
            <Form.Label>Ingrese un archivo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
};

export default CrearEntregaForm;
