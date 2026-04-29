import InfoCard from "../../components/InfoCard/InfoCard";
import "./Home.css";
import type { ProductoType } from "../../types/ProdutoType";
import type { DeudoresType } from "../../types/DeudoresType";
import type { EntregaType } from "../../types/EntregaType";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import ModalComponent from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import api from "../../../fetch";
import type { ProveedorType } from "../../types/ProveedorType";
import type { CellContext } from "@tanstack/react-table";
import CrearProductoForm from "../../components/Forms/CrearProducto";
import CrearEntregaForm from "../../components/Forms/CrearEntrega";
import ModificarPrecioForm from "../../components/Forms/ModificarPrecio";

const Home = () => {
  const [productos, setProductos] = useState<ProductoType[]>([]);
  const [deudores, setDeudores] = useState<DeudoresType[]>([]);
  const [entregas, setEntrega] = useState<EntregaType[]>([]);
  const [proveedor, setProveedor] = useState<ProveedorType[]>([]);

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
      accessorKey: "stock_actual",
    },
    {
      header: "Stock minimo",
      accessorKey: "stock_minimo",
    },
    {
      header: "Categoria",
      accessorKey: "categoria",
    },
    {
      header: "Unidad de medida",
      accessorKey: "unidad_medida",
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
      header: "Fecha entrega",
      accessorKey: "fecha_entrega",
      cell: ({ getValue }: CellContext<EntregaType, Date>) =>
        new Date(getValue()).toLocaleDateString(),
    },
    {
      header: "Total",
      accessorKey: "total",
    },
    {
      header: "Factura",
      accessorKey: "factura",
    },
    {
      header: "Proveedor",
      accessorKey: "proveedor_id",
      cell: ({ getValue }: CellContext<EntregaType, number>) => {
        const pro = proveedor.find((pro) => pro.proveedor_id === getValue());
        return pro?.nombre;
      },
    },
    {
      header: "Pago",
      accessorKey: "pago",
      cell: ({ getValue }: CellContext<EntregaType, boolean>) => (
        <input
          type="checkbox"
          className="form-check-input"
          checked={getValue()}
        />
      ),
    },
  ];

  const productoAlMin: ProductoType[] = productos.filter(
    (pro) => pro.stock_actual < pro.stock_minimo,
  );
  const deudoresActivos: DeudoresType[] = deudores.filter(
    (deu) => deu.pago === false,
  );
  const entregasAPagar: EntregaType[] = entregas.filter(
    (ent) => ent.pago === false,
  );

  useEffect(() => {
    api
      .get<ProductoType[]>("/producto")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al cargar productos", err));

    api
      .get<DeudoresType[]>("/")
      .then((res) => setDeudores(res.data))
      .catch((err) => console.error("Error al cargar deudores", err));

    api
      .get<EntregaType[]>("/entrega")
      .then((res) => setEntrega(res.data))
      .catch((err) => console.error("Error al cargar entregas", err));

    api
      .get<ProveedorType[]>("/proveedor")
      .then((res) => setProveedor(res.data))
      .catch((err) => console.error("Error al cargar proveedores", err));
  }, []);

  return (
    <>
      <h1>Bienvenido Ricardo!</h1>
      <h2>Viernes, 05 de julio de 2002</h2>
      <div className="container__cards">
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
          valor={deudores.length}
          text="Total de deudores"
        >
          Deudores
        </InfoCard>
      </div>

      <div className="container__containerBtn">
        <ModalComponent
          titulo="Ingresar un nuevo producto"
          accion="Crear producto"
          formId="crear-producto"
        >
          <CrearProductoForm id="crear-producto" />
        </ModalComponent>

        <ModalComponent
          titulo="Ingresar una entrega de productos"
          accion="Crear entrega"
          formId="crear-entrega"
        >
          <CrearEntregaForm id="crear-entrega" />
        </ModalComponent>

        <ModalComponent
          titulo="Modificar precio de producto"
          accion="Modificar precio"
          formId="modificar-precio"
        >
          <ModificarPrecioForm id="modificar-precio" />
        </ModalComponent>

        <button className="buttonHome">
          Generar informe de ganancia y perdidas
        </button>
      </div>

      {productoAlMin.length !== 0 ? (
        <div className="container__tabla">
          <TablaGenerica
            data={productoAlMin}
            titulo="Lista de productos sin stock"
            columns={columnsProductos}
          />
        </div>
      ) : (
        ""
      )}

      {entregasAPagar.length !== 0 ? (
        <div className="container__tabla">
          <TablaGenerica
            data={entregasAPagar}
            titulo="Entregas a pagar"
            columns={columnsEntregas}
          />
        </div>
      ) : (
        ""
      )}
      {deudoresActivos.length !== 0 ? (
        <div className="container__tabla">
          <TablaGenerica
            data={deudoresActivos}
            titulo="Deudores activos"
            columns={columnsDeudores}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
