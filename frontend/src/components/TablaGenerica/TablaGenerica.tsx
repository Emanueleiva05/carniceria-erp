import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import "./TablaGenerica.css";

interface Props<T> {
  titulo?: string;
  data: T[]; //Dato generico osea si paso un Producto[] entonces este tipo T sera Producto
  columns: ColumnDef<T, unknown>[]; //Tambien asignarle como tipo generico T hace que las columnas sean estrictamente de la columna del tipo enviado
  getRowClassName?: (row: T) => string;
}

export const TablaGenerica = <T,>({
  titulo,
  data,
  columns,
  getRowClassName,
}: Props<T>) => {
  //Se pone <T,> debido a que le dice a react que se trabajara con un tipo de dato T pero se sabra ese tipo cuando se use el componente
  //Es asi porque react espera un objeto con lo que enviaste por eso se debe desestructurar

  const table = useReactTable({
    data, //La libreria define una interfaz que no sabe si son productos, usuarios, o otra cosa solo entiende data
    columns,
    getCoreRowModel: getCoreRowModel(), //transforma los datos crudo en filas y celdas que React puede mapear
  });

  return (
    <>
      {titulo ? <h2>{titulo}</h2> : ""}

      <table className="table__informacion">
        <thead className="table__informacion-encabezado">
          {table.getHeaderGroups().map(
            (
              hg, //Devuelve los encabezados en un arreglo
            ) => (
              <tr className="encabezado__fila" key={hg.id}>
                {/*Fila del encabezado*/}
                {hg.headers.map(
                  (
                    header, //Recorremos los header de la tabla
                  ) => (
                    <th className="encabezado__columna" key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}{" "}
                      {/* De aca agarramos los valores de los encabezados y usamos flexRender debido a que el contenido de un encabeza no sera siempre un texto a veces puede ser otra cosa */}
                    </th>
                  ),
                )}
              </tr>
            ),
          )}
        </thead>
        <tbody className="table__informacion-cuerpo">
          {table.getRowModel().rows.map(
            (
              row, //Devuelve los datos del array
            ) => (
              <tr
                className={`cuerpo__fila ${getRowClassName ? getRowClassName(row.original) : ""}`}
                key={row.id}
              >
                {/*Fila de uno de los datos*/}
                {row.getVisibleCells().map(
                  (
                    cell, //Recorremos el valor de cada indice
                  ) => {
                    const metaClass = cell.column.columnDef.meta as {
                      className?: string;
                    };
                    return (
                      <td
                        key={cell.id}
                        className={`cuerpo__columna ${metaClass?.className || ""}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  },
                )}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
};
