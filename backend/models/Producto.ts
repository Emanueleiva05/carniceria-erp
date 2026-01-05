import { Categoria, UnidadMedida } from "../utils/tipos";

export class Producto {
  public producto_id: Number;
  public nombre: String;
  public categoria: Categoria;
  public stock_actual: Number;
  public precio_venta: Number;
  public unidad: UnidadMedida;

  constructor(
    id: Number,
    nombre: String,
    categoria: Categoria,
    stock_actual: Number,
    precio_venta: Number,
    unidad: UnidadMedida
  ) {
    this.producto_id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.stock_actual = stock_actual;
    this.precio_venta = precio_venta;
    this.unidad = unidad;
  }
}
