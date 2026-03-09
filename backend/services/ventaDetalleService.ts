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
import ofertaRepository from "../repository/ofertaRepository";
import BussinesRuleViolation from "../error/BussinesRuleViolation";

export const createVentaDetalle = async (data: VentaDetalleInput) => {
  const producto = await getProductoById(data.producto_id);
  await getVentaById(data.venta_id);

  if (producto.stock_actual < data.cantidad) {
    throw new BussinesRuleViolation("Stock insuficiente");
  }

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

  await verifyOffer(data.producto_id, ventaDetalle);
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

const verifyOffer = async (productoId: number, ventaDetalle: VentaDetalla) => {
  const oferta =
    await ofertaRepository.findByEstadoActivoProductoId(productoId);

  if (oferta) {
    ventaDetalle.applyOffer(oferta);
  }
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

export const updatePrecio = async (id: number, precio: number) => {
  const detalle = await ventaDetalleRepository.findById(id);

  if (!detalle) {
    throw new NotFound("Detalle de venta");
  }

  const subtotal = precio * detalle.cantidad;

  return await ventaDetalleRepository.updatePrecio(id, precio, subtotal);
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

  // diferencia para saber cuánto stock mover
  const diferencia = cantidad - detalle.cantidad;

  const subtotal = detalle.precio_unitario * cantidad;

  const saved = await ventaDetalleRepository.updateCantidad(
    id,
    cantidad,
    subtotal,
  );

  // solo crear movimiento si hubo cambio real
  if (diferencia !== 0) {
    const tipoMovimiento =
      diferencia > 0
        ? transformToTipoMovimiento("Salida")
        : transformToTipoMovimiento("Entrada");

    const operacion = transformToOperacion("Venta");
    const tipoReferencia = transformToTipoReferencia("Venta");

    await createMovimiento({
      cantidad: Math.abs(diferencia),
      tipo_movimiento: tipoMovimiento,
      motivo: operacion,
      referencia_id: saved.ventaDetalle_id,
      referencia_tipo: tipoReferencia,
      producto_id: saved.producto_id,
    });
  }

  // recalcular total de la venta
  await calculateTotal(saved.venta_id);

  return saved;
};

export const getVentaDetalles = async () => {
  const ventaDetalles = await ventaDetalleRepository.findAll();
  return ventaDetalles;
};
