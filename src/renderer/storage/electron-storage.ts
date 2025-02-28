import { StorageInterface } from "./types"

export class ElectronStorage implements StorageInterface {
  async get(key: string) {
    try {
      return await window.electron?.store.get(key)
    } catch {
      return null
    }
  }

  async set(key: string, value: unknown) {
    try {
      await window.electron?.store.set(key, value)
    } catch (error) {
      console.error('ElectronStorage set error:', error)
    }
  }
}