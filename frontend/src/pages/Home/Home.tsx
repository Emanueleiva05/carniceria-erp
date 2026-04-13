import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>
                <h1>Bienvenido</h1>
                
                <div>
                    <span>Fecha:</span>
                    <span>Venta: </span>
                    <span>Ingreso: </span>
                    <span>Egreso: </span>
                    <span>Caja: </span>
                </div>

                <div>
                    <Link to="">Ingresar una entrega de producto</Link>
                    <Link to="">Ingresar nuevo producto</Link>
                    <Link to="">Modificar precio de producto</Link>
                    <Link to="">Generar informe de ingresos y egresos</Link>
                </div>

                <div>
                    <h2>Productos por debajo del stock</h2>
                </div>

                <div>
                    <h2>Entregas que no se pagaron</h2>
                </div>

                <div>
                    <h2>Deudores</h2>
                </div>
            </div>
        </>
    )
}

export default Home