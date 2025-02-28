import { StorageInterface } from "./types"

export class WebStorage implements StorageInterface {
  async get(key: string) {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
    } catch {
      return null
    }
  }

  async set(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('WebStorage set error:', error)
    }
  }
}