import DuplicateResource from "../error/DuplicateResource";
import NotFound from "../error/NotFound";
import Proveedor from "../models/Proveedor";
import proveedorRepository from "../repository/proveedorRepository";
import { ProveedorInput } from "../utils/contracts";

export const createProveedor = async (data: ProveedorInput) => {
  const existencia = await proveedorRepository.findByName(data.nombre);

  if (existencia) {
    throw new DuplicateResource("Proveedor");
  }

  const proveedor = Proveedor.create(data.nombre, data.telefono);

  return await proveedorRepository.save({
    nombre: proveedor.nombre,
    telefono: proveedor.telefono,
  });
};

export const updateProveedores = async (id: number, data: ProveedorInput) => {
  return await proveedorRepository.update(id, data);
};

export const deleteProveedores = async (id: number) => {
  return await proveedorRepository.delete(id);
};

export const getProveedoresById = async (id: number) => {
  const proveedor = await proveedorRepository.findById(id);

  if (!proveedor) {
    throw new NotFound("Proveedor");
  }

  return proveedor;
};

export const getProveedores = async () => {
  const proveedores = await proveedorRepository.findAll();
  return proveedores;
};

export const getEntregasByProveedor = async (id: number) => {
  const entregas = await proveedorRepository.findEntregasByProveedor(id);
  return entregas;
};
