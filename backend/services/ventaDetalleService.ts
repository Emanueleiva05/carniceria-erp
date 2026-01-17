import NotFound from "../error/NotFound";
import { VentaDetalla } from "../models/VentaDetalle";
import ventaDetalleRepository from "../repository/ventaDetalleRepository";
import { getProductoById } from "./productoService";
import { getVentaById } from "./ventaService";
import { VentaDetalleInput } from "../utils/contracts";
import AppError from "../error/AppError";

export const setVentaDetalle = async (data: VentaDetalleInput) => {
  await getProductoById(data.producto_id);
  await getVentaById(data.venta_id);

  const existencia = await ventaDetalleRepository.findByEntregaIdProductoId(
    data.venta_id,
    data.producto_id
  );

  if (existencia) {
    throw new AppError(
      "Ya esta creado este detalle para la venta y producto",
      409,
      "DuplicateResource"
    );
  }

  const ventaDetalle = VentaDetalla.create(
    data.precio_unitario,
    data.cantidad,
    data.producto_id,
    data.venta_id
  );

  ventaDetalle.calcularSubtotal();

  return await ventaDetalleRepository.save({
    precio_unitario: ventaDetalle.precio_unitario,
    subtotal: ventaDetalle.subtotal,
    cantidad: ventaDetalle.cantidad,
    producto_id: ventaDetalle.producto_id,
    venta_id: ventaDetalle.venta_id,
    oferta_id: ventaDetalle.oferta_id,
  });
};

export const updateVentaDetalle = async (
  id: number,
  data: VentaDetalleInput
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

export const getVentaDetalles = async () => {
  const ventaDetalles = await ventaDetalleRepository.findAll();
  return ventaDetalles;
};
