export type ProductoType = {
  id: number;
  nombre: string;
  precio_venta: number;
  stock: number;
  minStock: number;
  categoria: "Achuras" | "Congelados" | "Carnes" | "Pollos" | "Cerdos";
};
