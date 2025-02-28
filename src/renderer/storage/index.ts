// src/storage/index.ts
import { StorageInterface } from "./types";
import { WebStorage } from "./web-storage";
import { ElectronStorage } from "./electron-storage";
import { isDeskTop } from "../utils";

class Storage implements StorageInterface {
  private storage: StorageInterface;

  constructor() {
    this.storage = isDeskTop() ? new ElectronStorage() : new WebStorage();
  }

  async get(key: string) {
    return this.storage.get(key);
  }

  async set(key: string, value: unknown) {
    return this.storage.set(key, value);
  }
}

export const storage = new Storage();
