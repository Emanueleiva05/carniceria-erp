import { Outlet, NavLink } from "react-router-dom"

const RootLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/productos"}>Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/entregas"}>Entregas</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ventas"}>Ventas</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/informes"}>Informes</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout