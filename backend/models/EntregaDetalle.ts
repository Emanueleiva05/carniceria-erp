export class EntregaDetalle {
  public readonly id: number | null;
  public cantidad: number;
  public precio_compra: number;
  public producto_id: number;
  public entrega_id: number;

  constructor(
    id: number | null,
    cantidad: number,
    precio_compra: number,
    producto_id: number,
    entrega_id: number
  ) {
    this.id = id;
    this.cantidad = cantidad;
    this.precio_compra = precio_compra;
    this.producto_id = producto_id;
    this.entrega_id = entrega_id;
  }

  static create(
    cantidad: number,
    precio_compra: number,
    producto_id: number,
    entrega_id: number
  ) {
    if (cantidad <= 0) {
      throw new Error("Cantidad inválido");
    }

    if (precio_compra <= 0) {
      throw new Error("Precio compra inválido");
    }

    if (producto_id <= 0) {
      throw new Error("Producto ID inválido");
    }

    if (entrega_id <= 0) {
      throw new Error("Entrega ID inválido");
    }

    return new EntregaDetalle(
      null,
      cantidad,
      precio_compra,
      producto_id,
      entrega_id
    );
  }

  calcularSubtotal() {
    return this.cantidad * this.precio_compra;
  }
}
