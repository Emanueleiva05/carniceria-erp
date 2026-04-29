import type { CellContext } from "@tanstack/react-table";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import type { EntregaType } from "../../types/EntregaType";
import type { ProveedorType } from "../../types/ProveedorType";
import ModalComponent from "../../components/Modal/Modal";
import { FaFileUpload } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../../fetch";
import AgregarFactura from "../../components/Forms/AgregarDeudor";
import ModificarEntrega from "../../components/Forms/ModificarEntrega";

const EntregaPage = () => {
  const [entregas, setEntrega] = useState<EntregaType[]>([]);
  const [proveedores, setProveedores] = useState<ProveedorType[]>([]);

  const columns = [
    { header: "Total", accessorKey: "total" },
    {
      header: "Fecha de entrega",
      accessorKey: "fecha_entrega",
      cell: ({ getValue }: CellContext<EntregaType, Date>) =>
        new Date(getValue()).toLocaleDateString(),
    },
    { header: "Factura", accessorKey: "factura" },
    {
      header: "Proveedor",
      accessorKey: "proveedor_id",
      cell: ({ getValue }: CellContext<EntregaType, number>) => {
        const proveedor = proveedores.find(
          (pro) => pro.proveedor_id === getValue(),
        );
        return proveedor?.nombre;
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
    {
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
            accion="Modificar entrega"
            formId="modificar-entrega"
          >
            <ModificarEntrega id="modificar-entrega" />
          </ModalComponent>

          <ModalComponent
            titulo={<FaFileUpload />}
            accion="Agregar factura"
            formId="agregar-factura"
          >
            <AgregarFactura id="agregar-factura" />
          </ModalComponent>
        </div>
      ),
    },
  ];

  useEffect(() => {
    api
      .get<ProveedorType[]>("/proveedor")
      .then((res) => setProveedores(res.data))
      .catch((err) => console.error("Error al encontrar los proveedores", err));

    api
      .get<EntregaType[]>("/entrega")
      .then((res) => setEntrega(res.data))
      .catch((err) => console.error("Error al encontrar los productos", err));
  }, []);

  return (
    <>
      <h1>Paginas de entregas de proveedores</h1>
      <div className="container__tabla">
        <TablaGenerica data={entregas} columns={columns} />
      </div>
    </>
  );
};

export default EntregaPage;
