import { TipoVaca } from "../utils/tipos";

export default class Mediares {
  public mediares_id: number | null;
  public peso_carton: number;
  public peso_real: number;
  public tamanio: number;
  public tipo_vaca: TipoVaca;
  public precio_compra: number;
  public entrega_id: number;

  constructor(
    id: number | null,
    peso_carton: number,
    tamanio: number,
    precio_compra: number,
    peso_real: number,
    tipo_vaca: TipoVaca,
    entrega_id: number
  ) {
    this.mediares_id = id;
    this.peso_carton = peso_carton;
    this.peso_real = peso_real;
    this.tamanio = tamanio;
    this.precio_compra = precio_compra;
    this.tipo_vaca = tipo_vaca;
    this.entrega_id = entrega_id;
  }

  static create(
    peso_carton: number,
    tamanio: number,
    precio_compra: number,
    peso_real: number,
    tipo_vaca: TipoVaca,
    entrega_id: number
  ) {
    if (peso_carton <= 0) {
      throw new Error("Peso carton invalido");
    }

    if (tamanio <= 0) {
      throw new Error("Tamanio invalido");
    }

    if (peso_real <= 0) {
      throw new Error("Peso carton invalido");
    }

    if (precio_compra <= 0) {
      throw new Error("Precio compra invalido");
    }

    return new Mediares(
      null,
      peso_carton,
      tamanio,
      precio_compra,
      peso_real,
      tipo_vaca,
      entrega_id
    );
  }
}
