import { Link } from "react-router-dom"
import InfoCard from "../../components/InfoCard/InfoCard"
import "./Home.css"
import type { ProductoType } from "../../types/ProdutoType";
import type { DeudoresType } from "../../types/DeudoresType";
import type { EntregaType } from "../../types/EntregaType";

const Home = () => {

    const entregas: EntregaType[] = [
        {
            entrega_id: 1,
            fecha_entrega: new Date('2024-03-15'),
            total: 1500.50,
            pago: true,
            factura: "F-001-9823",
            proveedor_id: 101
        },
        {
            entrega_id: 2,
            fecha_entrega: new Date('2024-04-10'),
            total: 2300.00,
            pago: false,
            factura: null,
            proveedor_id: 102
        }
    ];

    const deudores: DeudoresType[] = [
        {
            nombre: "Juan Pérez",
            fecha: new Date('2024-02-20'),
            monto: 500.00,
            pago: false
        },
        {
            nombre: "Ana García",
            fecha: new Date('2024-01-15'),
            monto: 1200.75,
            pago: false
        }
    ];

    const productos: ProductoType[] = [
        // Achuras
        { id: 1, nombre: "Chinchulín", precio_venta: 3500, stock: 20, minStock: 5, categoria: "Achuras" },
        { id: 2, nombre: "Molleja", precio_venta: 12000, stock: 13, minStock: 3, categoria: "Achuras" },
        { id: 3, nombre: "Chorizo de Cerdo", precio_venta: 4200, stock: 50, minStock: 10, categoria: "Achuras" },

        // Congelados
        { id: 4, nombre: "Medallones de Carne", precio_venta: 2500, stock: 100, minStock: 20, categoria: "Congelados" },
        { id: 5, nombre: "Nuggets de Pollo", precio_venta: 3800, stock: 400, minStock: 50, categoria: "Congelados" },
        { id: 6, nombre: "Papas Fritas 1kg", precio_venta: 4100, stock: 30, minStock: 8, categoria: "Congelados" },

        // Carnes
        { id: 7, nombre: "Asado", precio_venta: 8500, stock: 60, minStock: 15, categoria: "Carnes" },
        { id: 8, nombre: "Vacío", precio_venta: 9200, stock: 100, minStock: 10, categoria: "Carnes" },
        { id: 9, nombre: "Entraña", precio_venta: 11000, stock: 15, minStock: 5, categoria: "Carnes" },

        // Pollos
        { id: 10, nombre: "Pollo Entero", precio_venta: 2800, stock: 80, minStock: 20, categoria: "Pollos" },
        { id: 11, nombre: "Pechuga", precio_venta: 4500, stock: 35, minStock: 10, categoria: "Pollos" },
        { id: 12, nombre: "Pata y Muslo", precio_venta: 3200, stock: 50, minStock: 15, categoria: "Pollos" },

        // Cerdos
        { id: 13, nombre: "Bondiola", precio_venta: 7500, stock: 25, minStock: 8, categoria: "Cerdos" },
        { id: 14, nombre: "Pechito de Cerdo", precio_venta: 6800, stock: 200, minStock: 42, categoria: "Cerdos" },
        { id: 15, nombre: "Matambre de Cerdo", precio_venta: 9500, stock: 15, minStock: 5, categoria: "Cerdos" }
    ];

    const productoAlMin: ProductoType[] | [] = productos.filter(pro => pro.stock < pro.minStock)
    const deudoresActivos: DeudoresType[] | [] = deudores.filter(deu => deu.pago === false)
    const entregasAPagar: EntregaType[] | [] = entregas.filter(ent => ent.pago === false)

    return (
        <>
            <div className="containerHome">
                <h1>Bienvenido Emanuel!</h1>
                <h2>Viernes, 05 de julio de 2002</h2>

                <div className="containerInformacion">
                    <InfoCard tipo="precio" imagen="/b1f-removebg-preview.png" valor={20000} text="Del dia">Ventas</InfoCard>
                    <InfoCard tipo="precio" imagen="/b1f-removebg-preview.png" valor={200000} text="De la semana">Ingresos</InfoCard>
                    <InfoCard tipo="precio" imagen="/b1f-removebg-preview.png" valor={2000} text="De la semana">Egresos</InfoCard>
                    <InfoCard imagen="/b1f-removebg-preview.png" valor={4} text="Total de deudores">Deudores</InfoCard>
                </div>

                <div className="containerBtn">
                    <Link to="" className="buttonHome">Ingresar una entrega de producto</Link>
                    <Link to="" className="buttonHome">Ingresar un nuevo producto a la base de datos</Link>
                    <Link to="" className="buttonHome">Modificar precio de producto</Link>
                    <Link to="" className="buttonHome">Generar informe de ingresos y egresos</Link>
                </div>

                <div className="containerStock">
                    {productoAlMin.length !== 0 ? productoAlMin.map(pro => (
                        <div>
                            <h2>Productos por debajo del stock</h2>
                            <div>{pro.nombre}</div>
                        </div>
                    )) : ""}
                </div>

                <div className="containerEntregas">
                    {entregasAPagar.length !== 0 ? entregasAPagar.map(ent => (
                        <div>
                            <h2>Entrega</h2>
                            <div>{ent.entrega_id}</div>
                        </div>
                    )) : ""}                
                </div>

                <div className="containerDeudores">
                    {deudoresActivos.length !== 0 ? deudoresActivos.map(deu => (
                        <div>
                            <h2>Deudores</h2>
                            <div>{deu.nombre}</div>
                        </div>
                    )) : ""}
                </div>

            </div>
        </>
    )
}

export default Home