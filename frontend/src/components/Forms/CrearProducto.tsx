import { Form } from "react-bootstrap";

type props = {
  id: string;
};

const CrearProductoForm = ({ id }: props) => {
  return (
    <Form id={id}>
      <Form.Group className="mb-3" controlId="nombreGrupo">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre del producto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="precioGrupo">
        <Form.Label>Precio de venta</Form.Label>
        <Form.Control type="text" placeholder="Ingrese precio del producto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="stockMinimoGrupo">
        <Form.Label>Stock minimo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese stock minimo del producto"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="unidadMedida">
        <Form.Label>Unidad medida</Form.Label>
        <Form.Select>
          <option>Abre el menu para seleccionar categoria</option>
          <option value="KG">Kilos</option>
          <option value="Unitario">Unitario</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoriaGrupo">
        <Form.Label>Categoria</Form.Label>
        <Form.Select>
          <option>Abre el menu para seleccionar categoria</option>
          <option value="Carnes">Carne</option>
          <option value="Pollos">Pollo</option>
          <option value="Congelados">Congelado</option>
          <option value="Achuras">Achura</option>
          <option value="Cerdos">Cerdo</option>
          <option value="Varios">Varios</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default CrearProductoForm;
