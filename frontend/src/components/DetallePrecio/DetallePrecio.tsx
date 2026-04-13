import type { ProductoPrecio } from "../pages/PreciosPage/PreciosPage";
import "./DetallePrecio.css"

export function DetallePrecio({ nombre, precio_venta }: ProductoPrecio) {
    return (
            <div className="filaPrecio">
                <span>{nombre}</span>
                <span>${precio_venta}</span>
            </div>
    );
}
