import { DetallePrecio } from "../../components/DetallePrecio/DetallePrecio"
import "./PreciosPage.css"
import type { ProductoType } from "../../types/ProdutoType";

export const PreciosPage = () => {
    const productos: ProductoType[] = [
        // Achuras
        { id: 1, nombre: "Chinchulín", precio_venta: 3500, stock: 20, minStock: 5, categoria: "Achuras" },
        { id: 2, nombre: "Molleja", precio_venta: 12000, stock: 10, minStock: 3, categoria: "Achuras" },
        { id: 3, nombre: "Chorizo de Cerdo", precio_venta: 4200, stock: 50, minStock: 10, categoria: "Achuras" },

        // Congelados
        { id: 4, nombre: "Medallones de Carne", precio_venta: 2500, stock: 100, minStock: 20, categoria: "Congelados" },
        { id: 5, nombre: "Nuggets de Pollo", precio_venta: 3800, stock: 40, minStock: 10, categoria: "Congelados" },
        { id: 6, nombre: "Papas Fritas 1kg", precio_venta: 4100, stock: 30, minStock: 8, categoria: "Congelados" },

        // Carnes
        { id: 7, nombre: "Asado", precio_venta: 8500, stock: 60, minStock: 15, categoria: "Carnes" },
        { id: 8, nombre: "Vacío", precio_venta: 9200, stock: 45, minStock: 10, categoria: "Carnes" },
        { id: 9, nombre: "Entraña", precio_venta: 11000, stock: 15, minStock: 5, categoria: "Carnes" },

        // Pollos
        { id: 10, nombre: "Pollo Entero", precio_venta: 2800, stock: 80, minStock: 20, categoria: "Pollos" },
        { id: 11, nombre: "Pechuga", precio_venta: 4500, stock: 35, minStock: 10, categoria: "Pollos" },
        { id: 12, nombre: "Pata y Muslo", precio_venta: 3200, stock: 50, minStock: 15, categoria: "Pollos" },

        // Cerdos
        { id: 13, nombre: "Bondiola", precio_venta: 7500, stock: 25, minStock: 8, categoria: "Cerdos" },
        { id: 14, nombre: "Pechito de Cerdo", precio_venta: 6800, stock: 20, minStock: 5, categoria: "Cerdos" },
        { id: 15, nombre: "Matambre de Cerdo", precio_venta: 9500, stock: 15, minStock: 5, categoria: "Cerdos" }
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