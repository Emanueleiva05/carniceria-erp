import type { ProductoType } from "../../types/ProdutoType";
import "./DetallePrecio.css"

export function DetallePrecio({ nombre, precio_venta }: ProductoType) {
    return (
            <div className="filaPrecio">
                <span>{nombre}</span>
                <span>${precio_venta}</span>
            </div>
    );
}
