---
# home: true
heroImage: /logo.jpg
actionText: 赞叹 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
# - title: Vue驱动
#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
# - title: 高性能
#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright ©        2018-present simin
---
## 这是踩坑日记

> 20190122 部署静态页面到github.io上
  因为部署的是vue脚手架打包的dist文件，打包出的 index.html 文件中引用css和js资源的路径前面带了 '/'，导致在github-pages上打开时找不到（页面白屏，请求资源404），解决办法是将 config中的index.js中的 `assetsPublicPath: '/'`,改为 `assetsPublicPath: './'`，打包出的路径前面是'./' ，这样就是相对路径寻址了

> chocolatey 一个类似于 apt-get brew 的 windows 上的 包管理工具

> windows 上的快捷操作
  使用 `win+left/right` 来给窗口分屏，使用`win+d` 来切回桌面