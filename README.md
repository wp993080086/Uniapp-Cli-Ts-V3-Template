<div align=center>
  
![Vite](https://img.shields.io/badge/2.9.1-Vite-orange)
![TypeScript](https://img.shields.io/badge/4.6.3-TypeScript-lightgrey)
![Vue](https://img.shields.io/badge/3.2.31-Vue-brightgreen)
![vk-uview-ui](https://img.shields.io/badge/1.3.3-vk--uview--ui-blueviolet)
  
</div>
<div align=center>
  
![Pinia](https://img.shields.io/badge/2.0.12-Pinia-yellow)
![uni-ui](https://img.shields.io/badge/1.4.12-uni--ui-409EFF)
![Sass](https://img.shields.io/badge/1.49.9-Sass-orange)
  
</div>

# ⚡️ 简介

一个开箱即用的 `Vite 2` + `Vue 3` + `Uview-ui` + `Pinia` + `uni-ui` 的`uniapp`项目模板，搭配有 `eslint` 代码检查修复，`git` 推送检查钩子 `Husky`。

# 🚀 开发

1. 安装

```
npm install
```

2. 运行

```
npm run serve
```

`运行成功后，使用微信开发者工具，选择mp-weixin目录并打开（路径：dist/dev/mp-weixin），即可预览。`

# 📦️ 多环境打包

- 测试环境打包

```
npm run build:test
```

- 生产环境打包

```
npm run build
```

`打包完成后，使用微信开发者工具，选择mp-weixin目录并打开，目录路径：dist/build/mp-weixin，在微信开发者工具中点击上传即可。`

# 🔧 代码检查修复

- 格式检查修复

```
npm run lint
```

# 📚 目录

```
├─ .env.xxx // 各环境的配置文件
├─ .eslintrc.js // eslint配置
├─ vite.config.ts // 项目配置
├─ tsconfig.json // ts配置
├─ index.html // 入口文件
└─ src
  │─ App.vue // 根容器
  │─ main.ts
  │  
  ├─ components // 组件
  │          
  ├─ config // 项目级配置
  │    │
  │    └─index.ts
  │      
  ├─ pages // 页面
  │                          
  ├─ router // 路由
  │          
  ├─ servers // 接口
  │   │  
  │   │─ request.ts // 封装
  │   └─ api // 接口
  │      
  ├─ static // 静态资源
  │              
  ├─ store // pinia             
  │      
  ├─ types // ts类型定义
  │      
  └─ utils // 工具库
  │ │  index.ts
  │ │  toast.ts // 弹窗封装
  └─
```
