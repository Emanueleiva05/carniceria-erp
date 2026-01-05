import { Tamanio } from "../utils/tipos";

export default class Mediares {
  public mediares_id: Number;
  public peso_carton: Number;
  public tamanio: Tamanio;
  public precio_compra: Number;
  public entrega_id: Number;

  constructor(
    id: Number,
    peso_carton: Number,
    tamanio: Tamanio,
    precio_compra: Number,
    entrega_id: Number
  ) {
    this.mediares_id = id;
    this.peso_carton = peso_carton;
    this.tamanio = tamanio;
    this.precio_compra = precio_compra;
    this.entrega_id = entrega_id;
  }
}
