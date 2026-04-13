import { DetallePrecio } from "../../components/DetallePrecio/DetallePrecio"
import "./PreciosPage.css"

export type ProductoPrecio = {
    nombre: string
    precio_venta: number
    categoria: "Achuras" | "Congelados" | "Carnes" | "Pollos" | "Cerdos"
}

export const PreciosPage = () => {
    const productos: ProductoPrecio[] = [
        // Achuras
        { nombre: "Chinchulín", precio_venta: 3500, categoria: "Achuras" },
        { nombre: "Molleja", precio_venta: 12000, categoria: "Achuras" },
        { nombre: "Chorizo de Cerdo", precio_venta: 4200, categoria: "Achuras" },
        
        // Congelados
        { nombre: "Medallones de Carne", precio_venta: 2500, categoria: "Congelados" },
        { nombre: "Nuggets de Pollo", precio_venta: 3800, categoria: "Congelados" },
        { nombre: "Papas Fritas 1kg", precio_venta: 4100, categoria: "Congelados" },
        
        // Carnes
        { nombre: "Asado", precio_venta: 8500, categoria: "Carnes" },
        { nombre: "Vacío", precio_venta: 9200, categoria: "Carnes" },
        { nombre: "Entraña", precio_venta: 11000, categoria: "Carnes" },
        
        // Pollos
        { nombre: "Pollo Entero", precio_venta: 2800, categoria: "Pollos" },
        { nombre: "Pechuga", precio_venta: 4500, categoria: "Pollos" },
        { nombre: "Pata y Muslo", precio_venta: 3200, categoria: "Pollos" },
        
        // Cerdos
        { nombre: "Bondiola", precio_venta: 7500, categoria: "Cerdos" },
        { nombre: "Pechito de Cerdo", precio_venta: 6800, categoria: "Cerdos" },
        { nombre: "Matambrito", precio_venta: 8900, categoria: "Cerdos" }
    ];

    const CATEGORIA = ["Achuras","Congelados","Carnes","Pollos","Cerdos"]

    return (
        <>
            <div className="tituloPage">
                <div className="tituloPrecio">
                    <img className="imageLogo" src="../../public/WhatsApp_Image_2026-04-08_at_12.00.03_AM-removebg-preview.png" alt="" />
                    <h1>Nuestro precios</h1>
                    <img className="imageLogo" src="../../public/WhatsApp_Image_2026-04-08_at_12.00.03_AM-removebg-preview.png" alt="" />
                </div>

                <div className="categoriasLayout">
                    {
                        CATEGORIA.map(cat => ( //Poner () en map o metodos de array hace que retorne el componente en jsx no como el map normal con {}
                            <div key={cat} className="categoriasDiv">
                                <h2>{cat}</h2>
                                {productos.filter(pro => cat === pro.categoria).map(pro => ( //No se usa normalmente los if es con && o con un filter
                                    <DetallePrecio key={pro.nombre} {...pro}/>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}