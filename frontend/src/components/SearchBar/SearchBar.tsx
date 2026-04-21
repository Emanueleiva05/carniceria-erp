import { useState } from "react";
import type { ProductoType } from "../../types/ProdutoType";
import { TablaGenerica } from "../../components/TablaGenerica/TablaGenerica";
import type { ColumnDef } from "@tanstack/react-table";
import "./SearchBar.css";

type props = {
  titulo: string;
  productos: ProductoType[];
  columns: ColumnDef<ProductoType, unknown>[];
};

const SearchBar = ({ titulo, productos, columns }: props) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const result = productos.filter(
    (pro) =>
      pro.nombre.toLocaleLowerCase().includes(query.toLocaleLowerCase()) &&
      pro.categoria.includes(filter),
  );

  const categorias = Array.from(new Set(productos.map((pro) => pro.categoria)));

  return (
    <>
      <div className="search">
        <div className="search__filtros">
          <div className="search__filtros-input">
            <input
              className="filtros__input"
              type="text"
              placeholder={`Buscar ${titulo}...`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="search__filtros-input">
            <label htmlFor="opciones" className="filtro__input-label">
              Categoría:
            </label>
            <select
              className="filtros__input"
              name="opciones"
              id="opciones"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Todas</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <TablaGenerica
          data={result}
          columns={columns}
          getRowClassName={(pro) =>
            pro.stock < pro.minStock ? "stockBajo" : ""
          }
        />
      </div>
    </>
  );
};

export default SearchBar;
