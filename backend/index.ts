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
import reclamoRouter from "./routes/reclamoRouter";
import corteRealRouter from "./routes/corteRealRouter";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";

const app = express();
const PORT = Number(Bun.env.PORT) || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
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
app.use("/api/reclamo/", reclamoRouter);
app.use("/api/corteReal/", corteRealRouter);

app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en ${PORT}`);
});
