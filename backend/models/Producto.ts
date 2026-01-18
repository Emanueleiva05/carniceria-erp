import { ProductoPersistence } from "../repository/productoRepository";
import {
  Categoria,
  transformToCategoria,
  transformToUnidadMedida,
  UnidadMedida,
} from "../utils/tipos";

export class Producto {
  public producto_id: number | null;
  public nombre: string;
  public categoria: Categoria;
  public stock_actual: number;
  public stock_minimo: number;
  public precio_venta: number;
  public unidad: UnidadMedida;

  constructor(
    id: number | null,
    nombre: string,
    categoria: Categoria,
    stock_actual: number,
    precio_venta: number,
    stock_minimo: number,
    unidad: UnidadMedida,
  ) {
    this.producto_id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.stock_actual = stock_actual;
    this.stock_minimo = stock_minimo;
    this.precio_venta = precio_venta;
    this.unidad = unidad;
  }

  static create(
    nombre: string,
    categoria: Categoria,
    precio_venta: number,
    unidad: UnidadMedida,
    stock_minimo: number,
  ) {
    if (precio_venta <= 0) {
      throw new Error("Precio venta invalido");
    }
    if (stock_minimo <= 0) {
      throw new Error("Stock minimo invalido");
    }
    return new Producto(
      null,
      nombre,
      categoria,
      0,
      precio_venta,
      stock_minimo,
      unidad,
    );
  }

  static fromPersistence(productoRaw: ProductoPersistence) {
    const unidadMedida = transformToUnidadMedida(productoRaw.unidad_medida);
    const categoria = transformToCategoria(productoRaw.categoria);
    const producto = new Producto(
      productoRaw.producto_id,
      productoRaw.nombre,
      categoria,
      productoRaw.stock_actual,
      productoRaw.precio_venta,
      productoRaw.stock_minimo,
      unidadMedida,
    );
    return producto;
  }
}
