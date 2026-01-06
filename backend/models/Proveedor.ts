export default class Proveedor {
  public proveedor_id: number;
  public nombre: string;
  public telefono: string;

  constructor(id: number, nombre: string, telefono: string) {
    this.proveedor_id = id;
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
