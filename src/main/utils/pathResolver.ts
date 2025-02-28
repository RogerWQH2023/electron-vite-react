import path from "path";
import { app } from "electron";
import { isDev } from "./index.js";

export const getPreloadPath = () => {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    '/dist-electron/preload.cjs'
  );
};
