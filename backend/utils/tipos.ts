export enum Tamanio {
  KG_90 = 90,
  KG_95 = 95,
  KG_100 = 100,
  KG_105 = 105,
  KG_110 = 110,
  KG_115 = 115,
  KG_120 = 120,
}

export enum Categoria {
  CARNE = "Carne",
  POLLO = "Pollo",
  ACHURA = "Achura",
}

export enum UnidadMedida {
  UNIDAD = "Unidad",
  KG = "Kg",
}

export const transformToUnidadMedida = (data: string): UnidadMedida | null => {
  if (data === UnidadMedida.KG) {
    return data;
  }

  if (data === UnidadMedida.KG) {
    return data;
  }

  return null;
};

export enum TipoVaca {
  NOVILLO = "Novillo",
  ADULTA = "Adulta",
}

export enum TipoMovimiento {
  ENTRADA = "Entrada",
  SALIDA = "Salida",
  AJUSTE = "Ajuste",
}

export enum Operacion {
  COMPRA = "Compra",
  VENTA = "Venta",
  PERDIDA = "Perdida",
  DEVOLUCION = "Devolucion",
}

export enum TipoReferencia {
  ENTREGA = "Entrega",
  VENTA = "Venta",
  PERDIDA = "Perdida",
  RECLAMO = "Reclamo",
}
