export enum Tamanio {
  KG_90 = 90,
  KG_95 = 95,
  KG_100 = 100,
  KG_105 = 105,
  KG_110 = 110,
  KG_115 = 115,
  KG_120 = 120,
}

export const transformToTamanio = (data: number): Tamanio => {
  if (data === Tamanio.KG_90) {
    return data;
  }
  if (data === Tamanio.KG_95) {
    return data;
  }
  if (data === Tamanio.KG_100) {
    return data;
  }
  if (data === Tamanio.KG_105) {
    return data;
  }
  if (data === Tamanio.KG_110) {
    return data;
  }
  if (data === Tamanio.KG_115) {
    return data;
  }
  if (data === Tamanio.KG_120) {
    return data;
  }

  return Tamanio.KG_100;
};

export enum Categoria {
  CARNE = "Carne",
  POLLO = "Pollo",
  ACHURA = "Achura",
}

export const transformToCategoria = (data: string): Categoria => {
  if (data === Categoria.CARNE) {
    return data;
  }

  if (data === Categoria.POLLO) {
    return data;
  }

  return Categoria.ACHURA;
};

export enum UnidadMedida {
  UNIDAD = "Unidad",
  KG = "Kg",
}

export const transformToUnidadMedida = (data: string): UnidadMedida => {
  if (data === UnidadMedida.KG) {
    return data;
  }

  if (data === UnidadMedida.KG) {
    return data;
  }

  return UnidadMedida.KG;
};

export enum TipoVaca {
  NOVILLO = "Novillo",
  ADULTA = "Adulta",
}

export const transformToTipoVaca = (data: string): TipoVaca => {
  if (data === TipoVaca.NOVILLO) {
    return data;
  }

  if (data === TipoVaca.ADULTA) {
    return data;
  }

  return TipoVaca.ADULTA;
};

export enum TipoMovimiento {
  ENTRADA = "Entrada",
  SALIDA = "Salida",
  AJUSTE = "Ajuste",
}

export const transformToTipoMovimiento = (data: string): TipoMovimiento => {
  if (data === TipoMovimiento.ENTRADA) {
    return data;
  }

  if (data === TipoMovimiento.SALIDA) {
    return data;
  }

  return TipoMovimiento.AJUSTE;
};

export enum Operacion {
  COMPRA = "Compra",
  VENTA = "Venta",
  PERDIDA = "Perdida",
  DEVOLUCION = "Devolucion",
}

export const transformToOperacion = (data: string): Operacion => {
  if (data === Operacion.COMPRA) {
    return data;
  }

  if (data === Operacion.VENTA) {
    return data;
  }

  return Operacion.PERDIDA;
};

export enum TipoReferencia {
  ENTREGA = "Entrega",
  VENTA = "Venta",
  PERDIDA = "Perdida",
  RECLAMO = "Reclamo",
}

export const transformToTipoReferencia = (data: string): TipoReferencia => {
  if (data === TipoReferencia.ENTREGA) {
    return data;
  }

  if (data === TipoReferencia.VENTA) {
    return data;
  }

  return TipoReferencia.PERDIDA;
};
