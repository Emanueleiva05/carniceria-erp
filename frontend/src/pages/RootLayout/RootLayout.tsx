import { Outlet, NavLink } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <header>
        <NavLink to={"/"}>
          <img
            className="header__logo"
            src="../../public/WhatsApp_Image_2026-04-08_at_12.00.03_AM-removebg-preview.png"
            alt=""
          />
        </NavLink>

        <nav className="header__menu">
          <ul className="header__menu-lista">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "header__menu-activo" : "header__menu-elemento"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/productos"}
                className={({ isActive }) =>
                  isActive ? "header__menu-activo" : "header__menu-elemento"
                }
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/entregas"}
                className={({ isActive }) =>
                  isActive ? "header__menu-activo" : "header__menu-elemento"
                }
              >
                Entregas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/ventas"}
                className={({ isActive }) =>
                  isActive ? "header__menu-activo" : "header__menu-elemento"
                }
              >
                Ventas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/informes"}
                className={({ isActive }) =>
                  isActive ? "activo" : "header__menu-elemento"
                }
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
