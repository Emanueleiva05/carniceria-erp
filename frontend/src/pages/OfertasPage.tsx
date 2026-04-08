export type OfertaType = {
    id: number
    minKg: number
    precio: number
    producto_id: number
}

export const OfertaPage = () => {
    const ofertas: OfertaType[] = [
        { id: 101, minKg: 2, precio: 12000, producto_id: 1 }, // 2kg de Asado
        { id: 102, minKg: 3, precio: 9500,  producto_id: 2 }, // 3kg de Pollo (Precio x Kg)
        { id: 103, minKg: 1, precio: 4500,  producto_id: 3 }, // Oferta Achuras
        { id: 104, minKg: 2, precio: 11000, producto_id: 4 }, // 2kg de Cerdo
        { id: 105, minKg: 5, precio: 8000,  producto_id: 5 }  // Pack mayorista Congelados
    ];  

    const productos = [
        { id: 1, nombre: "Asado de Tira", categoria: "Carnes" },
        { id: 2, nombre: "Pechuga de Pollo", categoria: "Pollos" },
        { id: 3, nombre: "Chinchulines", categoria: "Achuras" },
        { id: 4, nombre: "Matambrito de Cerdo", categoria: "Cerdos" },
        { id: 5, nombre: "Medallones de Carne (x4)", categoria: "Congelados" }
    ];

    const categorias = [...new Set(productos.filter(pro => {
        for (const oferta of ofertas) {
            if(oferta.producto_id === pro.id){
                return pro
            }
        }
    }).map(pro => pro.categoria))]

    console.log(categorias)

    return (
        <>
            {
                categorias.map((cat) => (
                    <div key={cat}>
                        <h1>{cat}</h1>
                        {productos.filter(pro => pro.categoria === cat).map(proFiltrado => (
                            <div key={proFiltrado.id}>
                                <h2>{proFiltrado.nombre}</h2>
                                {ofertas.filter(ofer => ofer.producto_id === proFiltrado.id).map(oferFiltrada => (
                                    <span key={oferFiltrada.id}>{oferFiltrada.minKg} x {oferFiltrada.precio}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                ))
            }
        </>
    )
}