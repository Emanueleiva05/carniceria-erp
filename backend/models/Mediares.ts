import { Tamanio } from "../utils/tipos";

export default class Mediares {
  public mediares_id: number;
  public peso_carton: number;
  public tamanio: Tamanio;
  public precio_compra: number;
  public entrega_id: number;

  constructor(
    id: number,
    peso_carton: number,
    tamanio: Tamanio,
    precio_compra: number,
    entrega_id: number
  ) {
    this.mediares_id = id;
    if (peso_carton > 0) {
      throw new Error("Peso de carton es invalido");
    }
    this.peso_carton = peso_carton;
    this.tamanio = tamanio;
    if (precio_compra > 0) {
      throw new Error("Precio de compra es invalido");
    }
    this.precio_compra = precio_compra;
    this.entrega_id = entrega_id;
  }
}
