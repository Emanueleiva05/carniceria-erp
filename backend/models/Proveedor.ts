import { ProveedorPrisma } from "../repository/proveedorRepository";

export default class Proveedor {
  public proveedor_id: number | null;
  public nombre: string;
  public telefono: string;

  constructor(id: number | null, nombre: string, telefono: string) {
    this.proveedor_id = id;
    this.nombre = nombre;
    this.telefono = telefono;
  }

  static create(nombre: string, telefono: string) {
    return new Proveedor(null, nombre, telefono);
  }

  static fromPersistence(proveedorRaw: ProveedorPrisma) {
    const proveedor = new Proveedor(
      proveedorRaw.proveedor_id,
      proveedorRaw.nombre,
      proveedorRaw.telefono,
    );
    return proveedor;
  }
}
