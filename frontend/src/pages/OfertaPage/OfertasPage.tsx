import { useEffect, useState } from "react"
import type { ProductoType } from "../../types/ProdutoType"
import type { OfertaType } from "../../types/OfertaType"
import DetalleOferta from "../../components/DetalleOferta/DetalleOferta"
import "./OfertaPage.css"

export const OfertaPage = () => {
    const [index, setIndex] = useState(0)

    const ofertas: OfertaType[] = [
        { id: 101, minKg: 2, precio: 12000, producto_id: 1 }, // 2kg de Asado
        { id: 102, minKg: 3, precio: 9500,  producto_id: 2 }, // 3kg de Pollo (Precio x Kg)
        { id: 103, minKg: 1, precio: 4500,  producto_id: 3 }, // Oferta Achuras
        { id: 104, minKg: 2, precio: 11000, producto_id: 4 }, // 2kg de Cerdo
        { id: 105, minKg: 5, precio: 8000,  producto_id: 5 }  // Pack mayorista Congelados
    ];  

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

    const categorias = [...new Set(productos.filter(pro => {
        for (const oferta of ofertas) {
            if(oferta.producto_id === pro.id){
                return pro
            }
        }
    }).map(pro => pro.categoria))]

    const slides = categorias.flatMap(cat => [
        {tipo: "Portada", titulo: cat},
        {tipo: "Listado",titulo: cat, productos: productos.filter(pro => pro.categoria === cat)}
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length)
        },5000)

        return () => clearInterval(interval)
    }, [slides.length])

    const currentSlide = slides[index]

    return (
        <>
            {
                currentSlide.tipo === "Portada" ? (
                    <div className="slide-categoria">
                        <h1 className="tituloCategoria">{currentSlide.titulo}</h1>
                    </div>
                ) : (
                    <div className="slide-oferta">
                        <div className="ofertas">
                            <DetalleOferta productos={currentSlide?.productos ?? []} ofertas={ofertas}/>
                        </div>
                    </div>
                )
            }
        </>
    )
}