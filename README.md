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
