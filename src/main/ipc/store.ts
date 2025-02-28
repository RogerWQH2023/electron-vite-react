import { ipcMain } from 'electron'
import { store } from "../store/store.js"

const StoreIpc = () => {
  ipcMain.handle('store:get', (_, key) => {
    console.log('store:get', key)
    return store.get(key)
  })
  ipcMain.handle('store:set', (_, key, value) => {
    console.log('store:set', key, value)
    store.set(key, value)
  })
}

export default StoreIpc;