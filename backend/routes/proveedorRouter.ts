import { Router } from "express";
import { prisma } from "../config/db";

const router = Router();

router.post("/", async (req, res) => {
  res.status(200).json("Proveedor creado");
});

router.get("/", async (req, res) => {
  const proveedores = await prisma.proveedor.findMany();
  res.json(proveedores);
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      proveedor_id: id,
    },
  });
  res.status(200).json(proveedor);
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono } = req.body;
  await prisma.proveedor.update({
    where: {
      proveedor_id: id,
    },
    data: {
      nombre: nombre,
      telefono: telefono,
    },
  });
  res.status(200).json("Proveedor actualizado");
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.proveedor.delete({
    where: {
      proveedor_id: id,
    },
  });
  res.status(200).json("Proveedor eliminado");
});

export default router;
