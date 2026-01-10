import express, { json } from "express";
import proveedorRouter from "./routes/proveedorRouter";
import carneDepostadaRouter from "./routes/carneDepostadaRouter";
import entregaDetalleRouter from "./routes/entregaDetalleRouter";
import entregaRouter from "./routes/entregaRouter";
import mediaresRouter from "./routes/mediaresRouter";
import perdidaRouter from "./routes/perdidaRouter";
import productoRouter from "./routes/productoRouter";
import stockMovimientoRouter from "./routes/stockMovimientoRouter";
import ventaDetalleRouter from "./routes/ventaDetalleRouter";
import ventaRouter from "./routes/ventaRouter";
import ofertaRouter from "./routes/ofertaRouter";
import errorHandler from "./middleware/errorHandler";

const app = express();
const PORT = Bun.env.PORT;

app.use(json());

app.use("/api/proveedor/", proveedorRouter);
app.use("/api/carne/", carneDepostadaRouter);
app.use("/api/entrega/", entregaRouter);
app.use("/api/entregaDetalle/", entregaDetalleRouter);
app.use("/api/mediares/", mediaresRouter);
app.use("/api/oferta/", ofertaRouter);
app.use("/api/perdida/", perdidaRouter);
app.use("/api/producto/", productoRouter);
app.use("/api/ventaDetalle/", ventaDetalleRouter);
app.use("/api/movimiento/", stockMovimientoRouter);
app.use("/api/venta/", ventaRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor en ${PORT}`);
});
