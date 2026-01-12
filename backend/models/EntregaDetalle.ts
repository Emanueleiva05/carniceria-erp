export class EntregaDetalle {
  public id: number;
  public cantidad: number;
  public precio_compra: number;
  public producto_id: number;
  public entrega_id: number;

  constructor(
    id: number,
    cantidad: number,
    precio_compra: number,
    producto_id: number,
    entrega_id: number
  ) {
    this.id = id;

    if (cantidad <= 0) {
      throw new Error("Cantidad invalida");
    }
    this.cantidad = cantidad;

    if (precio_compra <= 0) {
      throw new Error("Precio compra invalida");
    }
    this.precio_compra = precio_compra;
    this.producto_id = producto_id;
    this.entrega_id = entrega_id;
  }

  calcularSubtotal() {
    return this.cantidad * this.precio_compra;
  }
}
