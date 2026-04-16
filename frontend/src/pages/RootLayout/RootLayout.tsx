import { Outlet, NavLink } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <header className="headerMenu">
        <NavLink to={"/"}>
          <img
            className="logoMenu"
            src="../../public/WhatsApp_Image_2026-04-08_at_12.00.03_AM-removebg-preview.png"
            alt=""
          />
        </NavLink>

        <nav className="menu">
          <ul className="listaMenu">
            <li className="elementoMenu">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li className="elementoMenu">
              <NavLink
                to={"/productos"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                Productos
              </NavLink>
            </li>
            <li className="elementoMenu">
              <NavLink
                to={"/entregas"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                Entregas
              </NavLink>
            </li>
            <li className="elementoMenu">
              <NavLink
                to={"/ventas"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                Ventas
              </NavLink>
            </li>
            <li className="elementoMenu">
              <NavLink
                to={"/informes"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                Informes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
