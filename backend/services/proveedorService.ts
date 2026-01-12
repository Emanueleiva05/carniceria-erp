import NotFound from "../error/NotFound";
import Proveedor from "../models/Proveedor";
import proveedorRepository from "../repository/proveedorRepository";

interface ProveedorInput {
  proveedor_id: number;
  nombre: string;
  telefono: string;
}

export const setProveedores = async (data: ProveedorInput) => {
  return await proveedorRepository.save(data);
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

const buildProveedor = (data: ProveedorInput) => {
  return new Proveedor(data.proveedor_id, data.nombre, data.telefono);
};
