//Tipeo Entrega

export interface Entrega {
  entrega_id: number;
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string | null;
  proveedor_id: number;
}

export type EntregaInput = Omit<Entrega, "entrega_id">;

//Tipeo EntregaDetalle

export interface EntregaDetalle {
  entregaDetalle_id: number;
  cantidad: number;
  precio_compra: number;
  producto_id: number;
  entrega_id: number;
}

export type EntregaDetalleInput = Omit<EntregaDetalle, "entregaDetalle_id">;

//Tipero Mediares

export interface Mediares {
  mediares_id: number;
  peso_carton: number;
  peso_real: number;
  tamano: number;
  precio_compra: number;
  tipo_vaca: string;
  entrega_id: number;
}

export type MediaresInput = Omit<Mediares, "mediares_id">;

//Tipeo oferta

export interface Oferta {
  oferta_id: number;
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
}

export type OfertaInput = Omit<Oferta, "oferta_id">;

//Tipeo Perdida

export interface Perdida {
  perdida_id: number;
  tirado: number;
  unidad_medida: string;
  fecha_perdida: Date;
  motivo: string | null;
  total: number;
  producto_id: number;
}

export type PerdidaInput = Omit<Perdida, "perdida_id">;

//Tipeo Producto

export interface Producto {
  producto_id: number;
  nombre: string;
  categoria: string;
  stock_actual: number;
  stock_minimo: number;
  precio_venta: number;
  unidad_medida: string;
}

export type ProductoInput = Omit<Producto, "producto_id">;

//Tipeo proveedor

export interface Proveedor {
  proveedor_id: number;
  nombre: string;
  telefono: string;
}

export type ProveedorInput = Omit<Proveedor, "proveedor_id">;

//Tipeo de StockMovimiento

export interface StockMovimiento {
  movimiento_id: number;
  cantidad: number;
  tipo_movimiento: string;
  motivo: string;
  referencia_id: number;
  referencia_tipo: string;
  producto_id: number;
}

export type StockMovimientoInput = Omit<StockMovimiento, "movimiento_id">;

//Tipeo Venta

export interface Venta {
  venta_id: number;
  fecha_venta: Date;
  esta_vendida: boolean;
  total: number;
}

export type VentaInput = Omit<Venta, "venta_id">;

//Tipeo VentaDetalle

export interface VentaDetalle {
  ventaDetalle_id: number;
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number | null;
}

export type VentaDetalleInput = Omit<VentaDetalle, "ventaDetalle_id">;

//Tipeo de reclamo

export interface Reclamo {
  reclamo_id: number;
  fecha_reclamo: Date;
  motivo: string;
  estado: string;
  cantidad: number;
  producto_destino_id: number | null;
  diferencia_cantidad: number | null;
  descripcion: string | null;
  evidencia: string | null;
  producto_id: number;
  proveedor_id: number;
}

export type ReclamoInput = Omit<Reclamo, "reclamo_id">;

//Tipero carne promedio

export interface Carne {
  carne_id: number;
  peso_real: number;
  producto_id: number;
  mediares_id: number;
}

export type CarneInput = Omit<Carne, "carne_id">;

//Tipeo corte real

export interface CorteReal {
  corteReal_id: number;
  nombre: string;
  peso_real: number;
  create_at: Date;
  mediares_id: number;
}

export type CorteRealInput = Omit<CorteReal, "corteReal_id">;

//Transformaciones en contratos

export const transformToString = (value: unknown): string => {
  if (typeof value !== "string") {
    throw new Error("Se esperaba un string");
  }

  return value;
};

export const transformToNumber = (value: unknown): number => {
  if (typeof value !== "number") {
    throw new Error("Se esperaba un number");
  }

  return value;
};
