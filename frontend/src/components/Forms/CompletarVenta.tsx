import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CompletarVentaForm = ({ id }: props) => {
  return (
    <>
      <Form id={id}>
        <Form.Group className="mb-3" controlId="formaDePago">
          <Form.Label>Forma de pago</Form.Label>
          <Form.Select>
            <option>Ingrese forma de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Credito">Credito</option>
            <option value="Debito">Debito</option>
            <option value="Transferencia bancaria">
              Transferencia bancaria
            </option>
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
};

export default CompletarVentaForm;
