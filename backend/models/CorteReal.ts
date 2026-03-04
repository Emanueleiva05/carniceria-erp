import { CorteReal as CorteRealType } from "../utils/contracts";

export default class CorteReal {
  corteReal_id: number | null;
  nombre: string;
  peso_real: number;
  create_at: Date;
  mediares_id: number;

  constructor(
    corteRealId: number | null,
    nombre: string,
    peso_real: number,
    create_at: Date,
    mediares_id: number,
  ) {
    this.corteReal_id = corteRealId;
    this.nombre = nombre;
    this.peso_real = peso_real;
    this.create_at = create_at;
    this.mediares_id = mediares_id;
  }

  static create(nombre: string, peso_real: number, mediares_id: number) {
    if (peso_real < 0) {
      throw new Error("El peso de la carne real ingresada es invalida");
    }
    return new CorteReal(null, nombre, peso_real, new Date(), mediares_id);
  }

  static fromPersistence(corteRaw: CorteRealType) {
    return new CorteReal(
      corteRaw.corteReal_id,
      corteRaw.nombre,
      corteRaw.peso_real,
      corteRaw.create_at,
      corteRaw.mediares_id,
    );
  }
}
