// src/storage/types.ts
export interface StorageInterface {
  get(key: string): Promise<unknown>
  set(key: string, value: unknown): Promise<void>
};