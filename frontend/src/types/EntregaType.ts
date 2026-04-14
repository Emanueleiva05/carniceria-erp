export type EntregaType = {
  entrega_id: number;
  fecha_entrega: Date;
  total: number;
  pago: boolean;
  factura: string | null;
  proveedor_id: number;
};
