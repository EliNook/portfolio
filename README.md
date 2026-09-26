# 个人作品集网站

基于原生 HTML / CSS / JavaScript 构建的个人作品集网站，用于展示个人项目实践与技术方向。

## 功能特性

- 个人名片与技能方向展示
- 精选作品列表（图文分栏布局，支持悬停缩放与滚动淡入动效）
- 关于我、联系方式等栏目
- 深浅色主题切换：点击侧栏右上角按钮即可切换，选择通过 `localStorage` 持久化保存，刷新页面后仍保持上次使用的主题
- 响应式布局，兼容桌面端与移动端（移动端侧栏折叠为顶部导航栏）

## 技术栈

- HTML5 + CSS3 + 原生 JavaScript（无框架、无第三方组件库）
- CSS 自定义属性（Design Tokens）实现主题变量化管理
- IntersectionObserver 实现滚动淡入与导航高亮
- Git 进行版本管理，GitHub Pages 部署上线

## 本地运行

直接用浏览器打开 `index.html`，或使用 VS Code 的 Live Server 插件运行。

## 在线访问

https://elinook.github.io/portfolio/
