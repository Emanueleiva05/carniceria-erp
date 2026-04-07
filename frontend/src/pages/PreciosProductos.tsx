export const listarPreciosPage = () => {
    type ProductoPrecio = {
      nombre: string
      precio_venta: number
    }
    
    const productos: ProductoPrecio[] = [{nombre: "Asado", precio_venta: 120},{nombre: "Pollo", precio_venta: 200},{nombre: "Chinchulin", precio_venta: 250}]

    return (
        <>
        <table>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
            {productos.map(producto => (
                <tr key={producto.nombre}>
                    <th>{producto.nombre}</th>
                    <th>{producto.precio_venta}</th>
                </tr>
            ))}
        </table>
        </>
    )
}