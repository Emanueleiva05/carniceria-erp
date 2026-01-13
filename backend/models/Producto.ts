import { Categoria, UnidadMedida } from "../utils/tipos";

export class Producto {
  public producto_id: number | null;
  public nombre: string;
  public categoria: Categoria;
  public stock_actual: number;
  public precio_venta: number;
  public unidad: UnidadMedida;

  constructor(
    id: number | null,
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

  static create(
    nombre: string,
    categoria: Categoria,
    precio_venta: number,
    unidad: UnidadMedida
  ) {
    if (precio_venta <= 0) {
      throw new Error("Precio venta invalido");
    }
    return new Producto(null, nombre, categoria, 0, precio_venta, unidad);
  }
}
