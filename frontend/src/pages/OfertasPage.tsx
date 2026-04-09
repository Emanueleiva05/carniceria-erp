import { useEffect, useState } from "react"
import DetalleOferta from "../components/DetalleOferta"
import "./OfertaPage.css"

export type OfertaType = {
    id: number
    minKg: number
    precio: number
    producto_id: number
}

export type ProductoType = {
    id: number
    nombre: string
    categoria: string
}

export const OfertaPage = () => {
    const [index, setIndex] = useState(0)

    const ofertas: OfertaType[] = [
        { id: 101, minKg: 2, precio: 12000, producto_id: 1 }, // 2kg de Asado
        { id: 102, minKg: 3, precio: 9500,  producto_id: 2 }, // 3kg de Pollo (Precio x Kg)
        { id: 103, minKg: 1, precio: 4500,  producto_id: 3 }, // Oferta Achuras
        { id: 104, minKg: 2, precio: 11000, producto_id: 4 }, // 2kg de Cerdo
        { id: 105, minKg: 5, precio: 8000,  producto_id: 5 }  // Pack mayorista Congelados
    ];  

    const productos:ProductoType[] = [
        { id: 1, nombre: "Asado", categoria: "Carnes" },
        { id: 2, nombre: "Pechuga", categoria: "Pollos" },
        { id: 3, nombre: "Chinchulin", categoria: "Achuras" },
        { id: 4, nombre: "Matambre", categoria: "Cerdos" },
        { id: 5, nombre: "Medallones pollo", categoria: "Congelados" }
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