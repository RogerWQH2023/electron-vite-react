// src/main/store.ts
import Store from "electron-store";

export const store = new Store({
  // 配置默认值
  defaults: {
    language: "zh",
  },
});
