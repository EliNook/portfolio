# 李嘉骏 · 个人作品集网站

一个使用**原生 HTML / CSS / JavaScript** 构建的个人作品集网站，用于展示个人项目实践、技能方向与联系方式，支持深浅色主题切换，兼容桌面端与移动端。

## 项目简介

网站采用「左侧名片 + 右侧内容」的单页布局：

- **左侧栏**：个人名片、技能方向、页面导航与联系方式；
- **右侧内容区**：精选作品（图文分栏、左右交替排布）、关于我、联系方式三个板块。

## 功能特性

- 精选作品展示：图文交替分栏布局，悬停时图片微缩放，滚动进入视口时淡入呈现
- 深浅色主题切换：点击侧栏右上角按钮即可切换，主题选择通过 `localStorage` 持久化，刷新页面后仍保持上次使用的主题
- 滚动感知导航：基于 `IntersectionObserver` 实现导航链接随滚动区域自动高亮
- 响应式布局：桌面端为左右分栏；移动端（≤960px）自动折叠为顶部导航栏，菜单按钮开合
- 主题变量化管理：所有颜色通过 CSS 自定义属性（Design Tokens）定义，深色主题只需覆盖一组变量

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 结构 | HTML5 |
| 样式 | CSS3（自定义属性、Grid / Flex、媒体查询） |
| 逻辑 | 原生 JavaScript（IntersectionObserver、localStorage、Web Storage API） |
| 版本管理 | Git + GitHub |
| 部署 | GitHub Pages |

## 目录结构

```
lab03/
├── index.html        # 页面结构
├── css/
│   └── style.css     # 样式与主题变量（含深色主题定义）
├── js/
│   └── main.js       # 主题切换、菜单开合、滚动淡入与导航高亮
├── assets/           # 项目插画资源（SVG）
└── profile.md        # 个人信息资料
```

## 本地运行

方式一：直接用浏览器打开 `index.html`；

方式二（推荐）：使用 VS Code 的 **Live Server** 插件运行，可获得实时刷新体验。

## 在线访问

网站已通过 GitHub Pages 部署上线：

**https://elinook.github.io/portfolio/**
