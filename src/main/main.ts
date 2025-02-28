import { app, BrowserWindow } from "electron";
import path from "path";
import { getPreloadPath, isDev } from "./utils/index.js";
import { StoreIpc } from "./ipc/index.js";

// 初始化IPC通信
const initData = () => {
  StoreIpc();
};

const createWindow = () => {
  // 创建主窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    webPreferences: {
      preload: getPreloadPath(),
      // webSecurity: false, // 关闭Web安全策略以允许加载本地文件夹，除非报了相关的错，否则最好别用:)，
    },
  });
  if (isDev()) {
    win.loadURL("http://localhost:5123");
  } else {
    win.loadFile(path.join(app.getAppPath(), "/dist-web/index.html")); // 需要生成html在系统下的绝对路径
  }
  return win;
};

app.whenReady().then(() => {
  createWindow();
  // 根据平台选择不同的行为
  if (process.platform === "darwin") {
    // macOS: 点击 Dock 图标时重新创建窗口
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } else {
    // Windows/Linux: 关闭所有窗口时退出应用
    app.on("window-all-closed", () => {
      app.quit();
    });
  }

  // 初始化IPC通信
  initData();
});
