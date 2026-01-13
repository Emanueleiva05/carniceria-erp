export type Tamanio = 90 | 95 | 100 | 105 | 110 | 115 | 120;

export const transformTamanio = (tamanio: number): Tamanio => {
  const TAMANIO: Tamanio[] = [90, 95, 100, 105, 110, 115, 120];
  const encontrado = TAMANIO.find((num) => tamanio < num);
  return encontrado ?? 120;
};

export type Categoria = "Carne" | "Pollo" | "Achura";

export type UnidadMedida = "Unidad" | "Kg";

export type TipoVaca = "Novillo" | "Adulta";

export type TipoMovimiento = "";

export type Operacion = "";

export type TipoReferencia = "";
