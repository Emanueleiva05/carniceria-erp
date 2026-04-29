import type { CellContext } from "@tanstack/react-table";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import type { VentaType } from "../../types/VentaType";
import { IoPerson } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import ModalComponent from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import api from "../../../fetch";
import CrearDeudorForm from "../../components/Forms/CrearDeudor";
import CompletarVenta from "../../components/Forms/CompletarVenta";

const VentaPage = () => {
  const hoy = new Date();
  const [ventas, setVentas] = useState<VentaType[]>([]);

  const ventasActivas: VentaType[] = ventas.filter((ven) => {
    const fechaVenta = new Date(ven.fecha_venta);
    return (
      fechaVenta.getDate() === hoy.getDate() &&
      fechaVenta.getMonth() === hoy.getMonth() &&
      fechaVenta.getFullYear() === hoy.getFullYear() &&
      ven.esta_vendido === false
    );
  });

  const columns = [
    {
      header: "Total",
      accessorKey: "total",
    },
    {
      header: "Fecha venta",
      accessorKey: "fecha_venta",
      cell: (
        { getValue }: CellContext<VentaType, Date>, //Usamos CellContext para decir que tipo de dato es el array de objetos junto a que tipo de dato es aquel que se controlara. GetValue: Desestructura un objeto de contexto que la tabla le pasa a la funcion osea recupera el valor basado en el accesorKey donde getValue() agarrar el valor real y toLocaleDateString() convierte esa fecha al formate local del usuario
      ) => new Date(getValue()).toLocaleDateString(),
    },
    {
      header: "Vendido",
      accessorKey: "esta_vendido",
      meta: {
        className: "columna__check",
      },
      cell: ({ getValue }: CellContext<VentaType, boolean>) => (
        <input
          className="form-check-input"
          type="checkbox"
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
            titulo={<IoPerson />}
            accion="Ingresar deudor"
            formId="ingresar-deudor"
          >
            <CrearDeudorForm id="ingresar-deudor" />
          </ModalComponent>

          <ModalComponent
            titulo={<MdSell />}
            accion="Completar venta"
            formId="completar-venta"
          >
            <CompletarVenta id="completar-venta" />
          </ModalComponent>
        </div>
      ),
    },
  ];

  useEffect(() => {
    api
      .get<VentaType[]>("/venta")
      .then((res) => setVentas(res.data))
      .catch((err) => console.error("Error al encontrar ventas", err));
  }, []);

  return (
    <>
      <h1>Pagina de ventas</h1>
      <div className="container__tabla">
        <TablaGenerica data={ventasActivas} columns={columns} />
      </div>
    </>
  );
};

export default VentaPage;
