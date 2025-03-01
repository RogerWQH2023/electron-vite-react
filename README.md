# Electron+React+TypeScript+Vite

这是一个初始的 Electron 项目模板。本项目使用 Vite 构建 React 项目，并使用 Electron 打包成桌面应用。

- 使用 TypeScript
- 使用 pnpm 作为包管理器
- 使用 electron-builder 打包桌面端
- 使用 electron-store 作为本地存储
- 使用 i18n 作为国际化模块

## 安装依赖

```bash
pnpm install
```

## dev 模式

- 运行 electron 应用

```bash
pnpm run dev
```

- 运行 web 项目

```bash
pnpm run dev:web
```

## 打包

- 打包网页

```bash
pnpm run build
```

- 打包 windows 应用

```bash
pnpm run dist:win
```

- 打包 linux 应用

```bash
pnpm run dist:linux
```

- 打包 mac 应用

```bash
pnpm run dist:mac
```

## 注意事项

- 本项目使用 vite 构建 renderer 部分，使用 electron-builder 构建桌面端；
- 由于 vite 的优化，打包 render 时 vite 会自动区分 package.json 中的生产依赖和开发依赖，仅打包实际需要的依赖。
- electron-builder 打包时会全量打包 package.json 中的所有生产依赖；这导致用于 renderer 的生产依赖会被 vite 和 electron-builder 重复打包。
- 为了方便起见，建议将 renderer 的所有依赖都设置为开发依赖，交由 vite 自己判断。而生产依赖中仅放入 electron 的 main 进程需要的包（如 electron-store 等）。
