import type { ProductoType } from "../../types/ProdutoType";
import type { OfertaType } from "../../types/OfertaType";

// Definimos la interfaz de las Props para TypeScript
interface DetalleOfertaProps {
    productos: ProductoType[];
    ofertas: OfertaType[];
}

const DetalleOferta = ({ productos, ofertas }: DetalleOfertaProps) => {
    return (
        <>
            {productos.map((pro) => {
                // Buscamos la oferta específica para este producto
                const oferta = ofertas.find((o) => o.producto_id === pro.id);

                return (
                    <div key={pro.id} className="tarjeta-individual">
                        <div className="oferta-container">
                            {/* Círculo Pequeño: Kilos */}
                            <div className="circulo-kilos">
                                <span>{oferta?.minKg}</span>
                                <small>KG</small>
                            </div>

                            {/* Círculo Grande: Nombre y Precio */}
                            <div className="contenido-principal">
                                <h2 className="nombreProducto">{pro.nombre}</h2>
                                <div className="precio-grande">
                                    <span className="signo-pesos">$</span>
                                    {oferta?.precio}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default DetalleOferta;
