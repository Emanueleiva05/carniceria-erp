import express, { json } from "express";
import proveedorRouter from "./routes/proveedorRouter";

const app = express();
const PORT = Bun.env.PORT;

app.use(json());

app.use("/api/proveedor/", proveedorRouter);

app.listen(PORT, () => {
  console.log(`Servidor en ${PORT}`);
});
