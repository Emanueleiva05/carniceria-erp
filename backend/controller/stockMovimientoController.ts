import { Request, Response } from "express";
import {
  deleteMovimiento,
  getMovimientoById,
  getMovimiento,
  setMovimiento,
  updateMovimiento,
} from "../services/stockMovimientoServices";

export const createMovimiento = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    await setMovimiento(data);

    res.status(202).json({ message: "Movimiento creada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de crear un detalle de movimiento" });
  }
};

export const modifyMovimiento = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await updateMovimiento(parseInt(id), data);

    res.status(202).json({ message: "Movimiento modificada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de modificar una movimiento" });
  }
};

export const removeMovimiento = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "ID no valido" });
    }

    await deleteMovimiento(parseInt(id));

    res.status(202).json({ message: "Movimiento eliminada con exito" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error a la hora de eliminar una movimiento" });
  }
};

export const obtainMovimientoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return 0;
    }

    const movimiento = await getMovimientoById(parseInt(id));

    res.status(202).json(movimiento);
  } catch (err) {
    res.status(400).json({
      message: "Error a la hora de obtener un movimiento segun id",
    });
  }
};

export const obtainMovimientos = async (req: Request, res: Response) => {
  try {
    const movimientos = await getMovimiento();

    res.status(202).json(movimientos);
  } catch (err) {
    res.status(400).json({ message: "Error a la hora de obtener movimiento" });
  }
};
