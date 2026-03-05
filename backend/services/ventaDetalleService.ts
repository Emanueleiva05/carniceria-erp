import NotFound from "../error/NotFound";
import { VentaDetalla } from "../models/VentaDetalle";
import ventaDetalleRepository from "../repository/ventaDetalleRepository";
import { getProductoById } from "./productoService";
import { getVentaById } from "./ventaService";
import { VentaDetalleInput } from "../utils/contracts";
import DuplicateResource from "../error/DuplicateResource";
import { Venta } from "../models/Venta";
import ventaRepository from "../repository/ventaRepository";
import {
  transformToOperacion,
  transformToTipoMovimiento,
  transformToTipoReferencia,
} from "../utils/tipos";
import { createMovimiento } from "./stockMovimientoServices";

export const createVentaDetalle = async (data: VentaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getVentaById(data.venta_id);

  const existencia = await ventaDetalleRepository.findByEntregaIdProductoId(
    data.venta_id,
    data.producto_id,
  );

  if (existencia) {
    throw new DuplicateResource("Venta detalle");
  }

  const ventaDetalle = VentaDetalla.create(
    data.precio_unitario,
    data.cantidad,
    data.producto_id,
    data.venta_id,
  );

  ventaDetalle.calculateSubtotal();

  const saved = await ventaDetalleRepository.save({
    precio_unitario: ventaDetalle.precio_unitario,
    subtotal: ventaDetalle.subtotal,
    cantidad: ventaDetalle.cantidad,
    producto_id: ventaDetalle.producto_id,
    venta_id: ventaDetalle.venta_id,
    oferta_id: ventaDetalle.oferta_id,
  });

  await calculateTotal(data.venta_id);

  const tipoMovimiento = transformToTipoMovimiento("Salida");
  const operacion = transformToOperacion("Venta");
  const tipoReferencia = transformToTipoReferencia("Venta");

  await createMovimiento({
    cantidad: saved.cantidad,
    tipo_movimiento: tipoMovimiento,
    motivo: operacion,
    referencia_id: saved.ventaDetalle_id,
    referencia_tipo: tipoReferencia,
    producto_id: saved.producto_id,
  });

  return saved;
};

const calculateTotal = async (ventaId: number) => {
  const rawVenta = await getVentaById(ventaId);
  const rawDetalles = await ventaDetalleRepository.findByVentaId(ventaId);

  const venta = Venta.fromPersistence(rawVenta);
  const detalles: VentaDetalla[] = rawDetalles.map((detalle) =>
    VentaDetalla.fromPersistence(detalle),
  );

  venta.calculateTotal(detalles);

  return ventaRepository.update(ventaId, {
    fecha_venta: rawVenta.fecha_venta,
    esta_vendida: rawVenta.esta_vendida,
    total: rawVenta.total,
  });
};

export const updateVentaDetalle = async (
  id: number,
  data: VentaDetalleInput,
) => {
  return await ventaDetalleRepository.update(id, data);
};

export const deleteVentaDetalle = async (id: number) => {
  return await ventaDetalleRepository.delete(id);
};

export const getVentaDetalleById = async (id: number) => {
  const ventaDetalle = await ventaDetalleRepository.findById(id);

  if (!ventaDetalle) {
    throw new NotFound("Venta detalle");
  }

  return ventaDetalle;
};

export const updateCantidad = async (id: number, cantidad: number) => {
  const detalle = await ventaDetalleRepository.findById(id);

  if (!detalle) {
    throw new NotFound("Detalle de venta");
  }

  const subtotal = detalle.precio_unitario * cantidad;

  return await ventaDetalleRepository.updateCantidad(id, cantidad, subtotal);
};

export const getVentaDetalles = async () => {
  const ventaDetalles = await ventaDetalleRepository.findAll();
  return ventaDetalles;
};
