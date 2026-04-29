import { MdDelete } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import type { ProductoType } from "../../types/ProdutoType";
import SearchBar from "../../components/SearchBar/SearchBar";
import ModalComponent from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import api from "../../../fetch";
import CrearProducto from "../../components/Forms/CrearProducto";
import CrearOferta from "../../components/Forms/CrearOferta";
import CrearPerdida from "../../components/Forms/CrearPerdida";
import Confirmar from "../../components/Forms/Confirmar";

const ProductosPage = () => {
  const [productos, setProductos] = useState<ProductoType[]>([]);

  const columnsProductos = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Precio",
      accessorKey: "precio_venta",
    },
    {
      header: "Stock",
      accessorKey: "stock_actual",
    },
    {
      header: "Stock minimo",
      accessorKey: "stock_minimo",
    },
    {
      header: "Categoria",
      accessorKey: "categoria",
    },
    {
      header: "Unidad de medida",
      accessorKey: "unidad_medida",
    },
    {
      id: "acciones",
      header: "Acciones",
      meta: {
        className: "columna__acciones",
      },
      cell: () => (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <ModalComponent
            titulo={<FaPenToSquare />}
            accion="Modificar producto"
            formId="modificar-producto"
          >
            <CrearProducto id="modificar-producto" />
          </ModalComponent>

          <ModalComponent
            titulo={<BiSolidOffer />}
            accion="Crear oferta"
            formId="crear-oferta"
          >
            <CrearOferta id="crear-oferta" />
          </ModalComponent>

          <ModalComponent
            titulo={<MdDelete />}
            accion="Crear perdida"
            formId="crear-perdida"
          >
            <CrearPerdida id="crear-perdida" />
          </ModalComponent>

          <ModalComponent
            titulo={<TiDelete />}
            accion="Eliminar producto"
            formId="eliminar-producto"
          >
            <Confirmar
              id="eliminar-producto"
              titulo="Estas seguro que quiere eliminar el producto?"
            />
          </ModalComponent>
        </div>
      ),
    },
  ];

  useEffect(() => {
    api
      .get<ProductoType[]>("/producto")
      .then((res) => setProductos(res.data))
      .catch((err) =>
        console.error("Error a la hora de encontrar productos", err),
      );
  }, []);

  return (
    <>
      <div>
        <h1>Lista de productos</h1>

        <SearchBar
          titulo="productos"
          productos={productos}
          columns={columnsProductos}
        />
      </div>
    </>
  );
};

export default ProductosPage;
