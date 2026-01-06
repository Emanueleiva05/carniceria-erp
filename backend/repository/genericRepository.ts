export interface Repository<T, ID = number> {
  findById(id: ID): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(t: T): Promise<void>;
  update(id: ID, t: T): Promise<void>;
  delete(id: ID): Promise<void>;
}
