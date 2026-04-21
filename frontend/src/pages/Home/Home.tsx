import InfoCard from "../../components/InfoCard/InfoCard";
import "./Home.css";
import type { ProductoType } from "../../types/ProdutoType";
import type { DeudoresType } from "../../types/DeudoresType";
import type { EntregaType } from "../../types/EntregaType";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import ModalComponent from "../../components/Modal/Modal";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const entregas: EntregaType[] = [
    {
      entrega_id: 1,
      fecha_entrega: new Date("2024-03-15"),
      total: 1500.5,
      pago: true,
      factura: "F-001-9823",
      proveedor_id: 101,
    },
    {
      entrega_id: 2,
      fecha_entrega: new Date("2024-04-10"),
      total: 2300.0,
      pago: true,
      factura: null,
      proveedor_id: 102,
    },
  ];

  const deudores: DeudoresType[] = [
    {
      nombre: "Juan Pérez",
      fecha: new Date("2024-02-20"),
      monto: 500.0,
      pago: true,
    },
    {
      nombre: "Ana García",
      fecha: new Date("2024-01-15"),
      monto: 1200.75,
      pago: true,
    },
  ];

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
      nombre: "Papas Fritas 1kg",
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
      header: "ID",
      accessorKey: "id",
    },
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
  ];

  const columnsDeudores = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Fecha",
      accessorKey: "fecha",
    },
    {
      header: "Monto",
      accessorKey: "monto",
    },
    {
      header: "Pagado",
      accessorKey: "pago",
    },
  ];

  const columnsEntregas = [
    {
      header: "Id",
      accessorKey: "entrega_id",
    },
    {
      header: "Fecha entrega",
      accessorKey: "fecha_entrega",
    },
    {
      header: "Total",
      accessorKey: "total",
    },
    {
      header: "Pago",
      accessorKey: "pago",
    },
    {
      header: "Factura",
      accessorKey: "factura",
    },
    {
      header: "Proveedor ID",
      accessorKey: "proveedor_id",
    },
  ];

  const productoAlMin: ProductoType[] = productos.filter(
    (pro) => pro.stock < pro.minStock,
  );
  const deudoresActivos: DeudoresType[] = deudores.filter(
    (deu) => deu.pago === false,
  );
  const entregasAPagar: EntregaType[] = entregas.filter(
    (ent) => ent.pago === false,
  );

  return (
    <>
      <div className="containerHome">
        <h1>Bienvenido Ricardo!</h1>
        <h2>Viernes, 05 de julio de 2002</h2>
        <div className="containerInformacion">
          <InfoCard
            tipo="precio"
            imagen="/b1f-removebg-preview.png"
            valor={20000}
            text="Del dia"
          >
            Ventas
          </InfoCard>
          <InfoCard
            tipo="precio"
            imagen="/b1f-removebg-preview.png"
            valor={200000}
            text="De la semana"
          >
            Ingresos
          </InfoCard>
          <InfoCard
            tipo="precio"
            imagen="/b1f-removebg-preview.png"
            valor={2000}
            text="De la semana"
          >
            Egresos
          </InfoCard>
          <InfoCard
            imagen="/b1f-removebg-preview.png"
            valor={4}
            text="Total de deudores"
          >
            Deudores
          </InfoCard>
        </div>

        <div className="containerBtn">
          <ModalComponent
            titulo="Ingresar un nuevo producto"
            accion="Crear producto"
            formId="crear-producto"
          >
            <Form id="crear-producto">
              <Form.Group className="mb-3" controlId="nombreGrupo">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre del producto"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="precioGrupo">
                <Form.Label>Precio de venta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese precio del producto"
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
            titulo="Ingresar una entrega de productos"
            accion="Crear entrega"
            formId="crear-entrega"
          >
            <Form id="crear-entrega">
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
          </ModalComponent>

          <ModalComponent
            titulo="Modificar precio de producto"
            accion="Modificar precio"
            formId="modificar-precio"
          >
            <Form id="modificar-precio">
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
          </ModalComponent>

          <Link to={""}>
            <button className="botonHome">
              Generar informe de ganancia y perdidas
            </button>
          </Link>
        </div>

        <div className="containerStock">
          {productoAlMin.length !== 0 ? (
            <TablaGenerica
              data={productoAlMin}
              titulo="Lista de productos sin stock"
              columns={columnsProductos}
            />
          ) : (
            ""
          )}
        </div>
        <div className="containerEntregas">
          {entregasAPagar.length !== 0 ? (
            <TablaGenerica
              data={entregasAPagar}
              titulo="Entregas a pagar"
              columns={columnsEntregas}
            />
          ) : (
            ""
          )}
        </div>
        <div className="containerDeudores">
          {deudoresActivos.length !== 0 ? (
            <TablaGenerica
              data={deudoresActivos}
              titulo="Deudores activos"
              columns={columnsDeudores}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
