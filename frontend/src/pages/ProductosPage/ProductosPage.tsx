import { MdDelete } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import type { ProductoType } from "../../types/ProdutoType";
import SearchBar from "../../components/SearchBar/SearchBar";
import ModalComponent from "../../components/Modal/Modal";
import { Form } from "react-bootstrap";

const ProductosPage = () => {
  const productos: ProductoType[] = [
    // Achuras
    {
      id: 1,
      nombre: "Chinchulín",
      precio_venta: 3500,
      stock: 20,
      minStock: 5,
      categoria: "Achuras",
    },
    {
      id: 2,
      nombre: "Molleja",
      precio_venta: 12000,
      stock: 1,
      minStock: 3,
      categoria: "Achuras",
    },
    {
      id: 3,
      nombre: "Chorizo de Cerdo",
      precio_venta: 4200,
      stock: 50,
      minStock: 10,
      categoria: "Achuras",
    },

    // Congelados
    {
      id: 4,
      nombre: "Medallones de Carne",
      precio_venta: 2500,
      stock: 100,
      minStock: 20,
      categoria: "Congelados",
    },
    {
      id: 5,
      nombre: "Nuggets de Pollo",
      precio_venta: 3800,
      stock: 2,
      minStock: 50,
      categoria: "Congelados",
    },
    {
      id: 6,
      nombre: "Papas Fritas",
      precio_venta: 4100,
      stock: 30,
      minStock: 8,
      categoria: "Congelados",
    },

    // Carnes
    {
      id: 7,
      nombre: "Asado",
      precio_venta: 8500,
      stock: 60,
      minStock: 15,
      categoria: "Carnes",
    },
    {
      id: 8,
      nombre: "Vacío",
      precio_venta: 9200,
      stock: 100,
      minStock: 10,
      categoria: "Carnes",
    },
    {
      id: 9,
      nombre: "Entraña",
      precio_venta: 11000,
      stock: 15,
      minStock: 5,
      categoria: "Carnes",
    },

    // Pollos
    {
      id: 10,
      nombre: "Pollo Entero",
      precio_venta: 2800,
      stock: 80,
      minStock: 20,
      categoria: "Pollos",
    },
    {
      id: 11,
      nombre: "Pechuga",
      precio_venta: 4500,
      stock: 35,
      minStock: 10,
      categoria: "Pollos",
    },
    {
      id: 12,
      nombre: "Pata y Muslo",
      precio_venta: 3200,
      stock: 50,
      minStock: 15,
      categoria: "Pollos",
    },

    // Cerdos
    {
      id: 13,
      nombre: "Bondiola",
      precio_venta: 7500,
      stock: 25,
      minStock: 8,
      categoria: "Cerdos",
    },
    {
      id: 14,
      nombre: "Pechito de Cerdo",
      precio_venta: 6800,
      stock: 200,
      minStock: 42,
      categoria: "Cerdos",
    },
    {
      id: 15,
      nombre: "Matambre de Cerdo",
      precio_venta: 9500,
      stock: 15,
      minStock: 5,
      categoria: "Cerdos",
    },
  ];

  const columnsProductos = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Precio",
      accessorKey: "precio_venta",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Stock minimo",
      accessorKey: "minStock",
    },
    {
      header: "Categoria",
      accessorKey: "categoria",
    },
    {
      id: "acciones",
      header: "Acciones",
      meta: {
        className: "columna__acciones",
      },
      cell: () => (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <ModalComponent
            titulo={<FaPenToSquare />}
            accion="Modificar producto"
            formId="modificar-producto"
          >
            <Form id="modificar-producto">
              <Form.Group className="mb-3" controlId="nombreGrupo">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre del producto"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="precio_venta">
                <Form.Label>Precio de venta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese precio de venta del producto"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="stockMinimoGrupo">
                <Form.Label>Stock minimo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese stock minimo del producto"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="categoriaGrupo">
                <Form.Label>Categoria</Form.Label>
                <Form.Select>
                  <option>Abre el menu para seleccionar categoria</option>
                  <option value="Carnes">Carne</option>
                  <option value="Pollos">Pollo</option>
                  <option value="Congelados">Congelado</option>
                  <option value="Achuras">Achura</option>
                  <option value="Cerdos"></option>
                </Form.Select>
              </Form.Group>
            </Form>
          </ModalComponent>

          <ModalComponent
            titulo={<BiSolidOffer />}
            accion="Crear oferta"
            formId="crear-oferta"
          >
            <Form id="crear-oferta">
              <Form.Group className="mb-3" controlId="nombreGrupo">
                <Form.Label>Minimo de kilos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese minimo de kilos para la oferta"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="precio_venta">
                <Form.Label>Precio de oferta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese precio de la oferta"
                />
              </Form.Group>
            </Form>
          </ModalComponent>

          <ModalComponent
            titulo={<MdDelete />}
            accion="Crear perdida"
            formId="crear-perdida"
          >
            <Form id="crear-perdida">
              <Form.Group className="mb-3" controlId="tiradoGrupo">
                <Form.Label>Tirado</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese la cantidad del producto que se perdio"
                />

                <Form.Label>Motivo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese motivo"
                />
              </Form.Group>
            </Form>
          </ModalComponent>

          <ModalComponent
            titulo={<TiDelete />}
            accion="Eliminar producto"
            formId="eliminar-producto"
          >
            <Form id="eliminar-producto">
              <Form.Group className="mb-3" controlId="eliminarProducto">
                <h2>Estas seguro que quiere eliminar el producto?</h2>
              </Form.Group>
            </Form>
          </ModalComponent>
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <h1>Lista de productos</h1>

        <SearchBar
          titulo="productos"
          productos={productos}
          columns={columnsProductos}
        />
      </div>
    </>
  );
};

export default ProductosPage;
