export type ProductoType = {
  producto_id: number;
  nombre: string;
  precio_venta: number;
  stock_actual: number;
  stock_minimo: number;
  categoria:
    | "Varios"
    | "Achuras"
    | "Congelados"
    | "Carnes"
    | "Pollos"
    | "Cerdos";
  unidad_medida: string;
};
