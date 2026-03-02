import AppError from "../error/AppError";

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
  if (data < 92.5) {
    return Tamanio.KG_90;
  }
  if (data >= 92.5 && data < 97.5) {
    return Tamanio.KG_95;
  }
  if (data >= 97.5 && data < 102.5) {
    return Tamanio.KG_100;
  }
  if (data >= 102.5 && data < 107.5) {
    return Tamanio.KG_105;
  }
  if (data >= 107.5 && data < 112.5) {
    return Tamanio.KG_110;
  }
  if (data >= 112.5 && data < 117.5) {
    return Tamanio.KG_115;
  }

  return Tamanio.KG_120;
};

export enum Categoria {
  CARNE = "Carne",
  POLLO = "Pollo",
  ACHURA = "Achura",
  CERDO = "Cerdo",
  EMBUTIDO = "Embutido",
  BEBIDA = "Bebida",
  CONDIMENTO = "Condimento",
  CONGELADO = "Congelado",
  VARIOS = "Varios",
}

export const transformToCategoria = (data: string): Categoria => {
  if (data.trim().toLowerCase() === "carne") {
    return Categoria.CARNE;
  }

  if (data.trim().toLowerCase() === "pollo") {
    return Categoria.POLLO;
  }

  if (data.trim().toLowerCase() === "achura") {
    return Categoria.ACHURA;
  }

  if (data.trim().toLowerCase() === "embutido") {
    return Categoria.EMBUTIDO;
  }

  if (data.trim().toLowerCase() === "bebida") {
    return Categoria.BEBIDA;
  }

  if (data.trim().toLowerCase() === "condimento") {
    return Categoria.CONDIMENTO;
  }

  if (data.trim().toLowerCase() === "congelado") {
    return Categoria.CONGELADO;
  }

  if (data.trim().toLowerCase() === "cerdo") {
    return Categoria.CERDO;
  }

  return Categoria.VARIOS;
};

export enum UnidadMedida {
  UNIDAD = "Unidad",
  KG = "KG",
}

export const transformToUnidadMedida = (data: string): UnidadMedida => {
  if (data.trim().toLowerCase() === "unidad") {
    return UnidadMedida.UNIDAD;
  }

  return UnidadMedida.KG;
};

export enum TipoVaca {
  TERNERO = "Ternero", // 70 a 85
  NOVILLITO = "Novillito", // 86 a 120
  NOVILLO = "Novillo", // mas de 120
}

export const transformToTipoVaca = (data: number): TipoVaca => {
  if (data < 70) {
    throw new AppError(
      "Peso invalido para la clasificacion de la vaca",
      400,
      "ErrorPeso",
    );
  }

  if (data >= 70 && data < 85) {
    return TipoVaca.TERNERO;
  }

  if (data >= 85 && data < 120) {
    return TipoVaca.NOVILLITO;
  }

  return TipoVaca.NOVILLO;
};

export enum TipoMovimiento {
  ENTRADA = "Entrada",
  SALIDA = "Salida",
  AJUSTE = "Ajuste",
}

export const transformToTipoMovimiento = (data: string): TipoMovimiento => {
  if (data.trim().toLowerCase() === "entrada") {
    return TipoMovimiento.ENTRADA;
  }

  if (data.trim().toLowerCase() === "salida") {
    return TipoMovimiento.SALIDA;
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
  if (data.trim().toLowerCase() === "compra") {
    return Operacion.COMPRA;
  }

  if (data.trim().toLowerCase() === "venta") {
    return Operacion.VENTA;
  }

  if (data.trim().toLowerCase() === "devolucion") {
    return Operacion.DEVOLUCION;
  }

  return Operacion.PERDIDA;
};

export enum TipoReferencia {
  ENTREGA = "Entrega",
  VENTA = "Venta",
  PERDIDA = "Perdida",
  RECLAMO = "Reclamo",
  MEDIARES = "Mediares",
}

export const transformToTipoReferencia = (data: string): TipoReferencia => {
  if (data.trim().toLowerCase() === "entrega") {
    return TipoReferencia.ENTREGA;
  }

  if (data.trim().toLowerCase() === "venta") {
    return TipoReferencia.VENTA;
  }

  if (data.trim().toLowerCase() === "reclamo") {
    return TipoReferencia.RECLAMO;
  }

  if (data.trim().toLowerCase() === "mediares") {
    return TipoReferencia.MEDIARES;
  }

  return TipoReferencia.PERDIDA;
};

export enum ReclamoEstado {
  PENDIENTE = "Pendiente",
  ACEPTADA = "Aceptada",
  RECHAZADA = "Rechazada",
}

export const transformToReclamoEstado = (data: string): ReclamoEstado => {
  if (data.trim().toLowerCase() === "pendiente") {
    return ReclamoEstado.PENDIENTE;
  }

  if (data.trim().toLowerCase() === "aceptada") {
    return ReclamoEstado.ACEPTADA;
  }

  return ReclamoEstado.RECHAZADA;
};

export enum ReclamoMotivo {
  PRODUCTO_PODRIDO = "Producto podrido",
  MAL_ESTADO = "Mal estado",
  ERROR_CORTE = "Error de corte",
  ERROR_PESO = "Error de peso",
  VENCIDO = "Vencido",
  OTRO = "Otro",
}

export const transformToReclamoMotivo = (data: string): ReclamoMotivo => {
  if (data.trim().toLowerCase() === "producto podrido") {
    return ReclamoMotivo.PRODUCTO_PODRIDO;
  }

  if (data.trim().toLowerCase() === "mal estado") {
    return ReclamoMotivo.MAL_ESTADO;
  }

  if (data.trim().toLowerCase() === "error de corte") {
    return ReclamoMotivo.ERROR_CORTE;
  }

  if (data.trim().toLowerCase() === "error de peso") {
    return ReclamoMotivo.ERROR_PESO;
  }
  if (data.trim().toLowerCase() === "vencido") {
    return ReclamoMotivo.VENCIDO;
  }

  return ReclamoMotivo.OTRO;
};
