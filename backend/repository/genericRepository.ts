export interface Repository<T, ID = number> {
  findById(id: ID): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(t: T): Promise<T>;
  update(id: ID, t: T): Promise<T>;
  delete(id: ID): Promise<void>;
}
