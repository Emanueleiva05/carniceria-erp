import { Categoria, UnidadMedida } from "../utils/tipos";

export class Producto {
  public producto_id: number;
  public nombre: string;
  public categoria: Categoria;
  public stock_actual: number;
  public precio_venta: number;
  public unidad: UnidadMedida;

  constructor(
    id: number,
    nombre: string,
    categoria: Categoria,
    stock_actual: number,
    precio_venta: number,
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
