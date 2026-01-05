export default class Proveedor {
  public proveedor_id: Number;
  public nombre: String;
  public telefono: String;

  constructor(id: Number, nombre: string, telefono: string) {
    this.proveedor_id = id;
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
