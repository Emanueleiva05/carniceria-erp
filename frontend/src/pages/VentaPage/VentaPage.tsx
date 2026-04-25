import type { CellContext } from "@tanstack/react-table";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import type { VentaType } from "../../types/VentaType";
import { IoPerson } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import ModalComponent from "../../components/Modal/Modal";
import { Form } from "react-bootstrap";

const VentaPage = () => {
  const hoy = new Date();
  const ventas: VentaType[] = [
    { venta_id: 1, fecha_venta: new Date(), esta_vendido: false, total: 150.5 },
    {
      venta_id: 2,
      fecha_venta: new Date("2026-04-22T10:30:00"),
      esta_vendido: false,
      total: 89.99,
    },
    { venta_id: 3, fecha_venta: new Date(), esta_vendido: true, total: 210.0 },
    {
      venta_id: 4,
      fecha_venta: new Date("2026-04-22T15:45:00"),
      esta_vendido: true,
      total: 45.0,
    },
    {
      venta_id: 5,
      fecha_venta: new Date(),
      esta_vendido: false,
      total: 120.75,
    },
    { venta_id: 6, fecha_venta: new Date(), esta_vendido: true, total: 310.2 },
    {
      venta_id: 7,
      fecha_venta: new Date("2026-04-22T18:20:00"),
      esta_vendido: false,
      total: 55.0,
    },
    { venta_id: 8, fecha_venta: new Date(), esta_vendido: true, total: 99.9 },
    {
      venta_id: 9,
      fecha_venta: new Date("2026-04-22T09:15:00"),
      esta_vendido: true,
      total: 175.0,
    },
    { venta_id: 10, fecha_venta: new Date(), esta_vendido: false, total: 25.4 },
  ];

  const ventasActivas: VentaType[] = ventas.filter(
    (ven) =>
      ven.fecha_venta.getDate() === hoy.getDate() &&
      ven.fecha_venta.getMonth() === hoy.getMonth() &&
      ven.fecha_venta.getFullYear() === hoy.getFullYear(),
  );

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
      ) => getValue().toLocaleDateString(),
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
            <Form id="ingresar-deudor">
              <Form.Group className="mb-3" controlId="nombreDeudor">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre del deudor"
                />
              </Form.Group>
            </Form>
          </ModalComponent>

          <ModalComponent
            titulo={<MdSell />}
            accion="Completar venta"
            formId="completar-venta"
          >
            <Form id="completar-venta">
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
          </ModalComponent>
        </div>
      ),
    },
  ];

  return (
    <div className="container__tabla">
      <TablaGenerica
        data={ventasActivas}
        columns={columns}
        titulo="Pagina de ventas"
      />
    </div>
  );
};

export default VentaPage;
