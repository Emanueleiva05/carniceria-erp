import {
  TipoVaca,
  Tamanio,
  UnidadMedida,
  Categoria,
  TipoMovimiento,
  Operacion,
  TipoReferencia,
} from "../utils/tipos";

export interface CarneInput {
  peso_real: number;
  producto_id: number;
  mediares_id: number;
}

export interface EntregaInput {
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string | null;
  proveedor_id: number;
}

export interface EntregaDetalleInput {
  cantidad: number;
  precio_compra: number;
  producto_id: number;
  entrega_id: number;
}

export interface MediaresInput {
  peso_carton: number;
  peso_real: number;
  tamano: Tamanio;
  precio_compra: number;
  tipo_vaca: TipoVaca;
  entrega_id: number;
}

export interface OfertaInput {
  minKg: number;
  precio_oferta: number;
  esta_activo: boolean;
  producto_id: number;
}

export interface PerdidaInput {
  tirado: number;
  unidad_medida: UnidadMedida;
  fecha_perdida: Date;
  motivo: string | null;
  total: number;
  producto_id: number;
}

export interface ProductoInput {
  nombre: string;
  categoria: Categoria;
  stock_actual: number;
  precio_venta: number;
  unidad_medida: UnidadMedida;
}

export interface ProveedorInput {
  nombre: string;
  telefono: string;
}

export interface StockMovimientoInput {
  cantidad: number;
  tipo_movimiento: TipoMovimiento;
  motivo: Operacion;
  referencia_id: number;
  referencia_tipo: TipoReferencia;
  producto_id: number;
}

export interface VentaInput {
  fecha_venta: Date;
  esta_vendida: boolean;
  total: number;
}

export interface VentaDetalleInput {
  precio_unitario: number;
  cantidad: number;
  subtotal: number;
  producto_id: number;
  venta_id: number;
  oferta_id: number;
}
