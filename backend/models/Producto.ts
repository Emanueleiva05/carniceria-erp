import {
  Categoria,
  transformToCategoria,
  transformToUnidadMedida,
  UnidadMedida,
} from "../utils/tipos";
import { Producto as ProductoType } from "../utils/contracts";
import BadRequest from "../error/BadRequest";

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
    categoria: string,
    precio_venta: number,
    unidad: string,
    stock_minimo: number,
  ) {
    if (precio_venta <= 0) {
      throw new BadRequest("Precio de venta");
    }
    if (stock_minimo < 0) {
      throw new BadRequest("Stock minimo");
    }

    const categoriaPro = transformToCategoria(categoria);
    const unidadPro = transformToUnidadMedida(unidad);

    return new Producto(
      null,
      nombre,
      categoriaPro,
      0,
      precio_venta,
      stock_minimo,
      unidadPro,
    );
  }

  static fromPersistence(productoRaw: ProductoType) {
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

  changeMinimumStock(cantidadMinima: number) {
    this.stock_minimo = cantidadMinima;
  }
}
