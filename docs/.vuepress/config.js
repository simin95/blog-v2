module.exports = {
  title: 'Blog',
  description: '只有渴求进步的人才会进步',
  head: [
    ['link', { rel: 'icon', href: '/icon/myBook.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  // 供 pwa 的配置
  serviceWorker: true,

  // base: '/',
  base: '/vuepress-blog/',//当打包到vuepress-blog博客的时候才设置这个路径
  dist: './dist',

  // 使用自定义主题
  // theme: 主题名称,
  themeConfig: {
    // 导航栏配置，注意：文件夹名称不能为中文
    nav: [
      { text: '主页', link: '/' },
      {
        text: '编程知识',
        link: '/knowledge/',
        // 在此处配置所有的博客路径
        items: [
          { text: 'html&css', link: '/knowledge/htmlcss/' },
          { text: 'js', link: '/knowledge/js/' },
          { text: 'vue', link: '/knowledge/vue/' },
          { text: 'react', link: '/knowledge/react/' },
          { text: 'node', link: '/knowledge/node/' },
          { text: 'webpack', link: '/knowledge/webpack/' },
          { text: 'linux', link: '/knowledge/linux/' },
          { text: '算法', link: '/knowledge/algorithm/' },
          { text: '网络', link: '/knowledge/network/' },
          { text: 'docker', link: '/knowledge/docker/' },
        ],
      },
      { text: '项目', link: '/project/' },
      { text: '读书观影笔记', link: '/hobby/' },
      { text: '杂谈', link: '/otherTips/' },
      { text: 'Github', link: 'https://github.com/simin95' },
    ],
    // 侧边栏配置，每添加一篇博客就配置一下这里，处理单位是文件夹
    // 注意了：文件名不要含有 ：，这些标准之外的符号，使用下划线或驼峰来写
    sidebar: {
      '/knowledge/htmlcss/': [
        {
          title: 'html&css', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/htmlcss/使用flex布局', '使用flex布局'],
          ],
        },
      ],

      '/knowledge/js/': [
        {
          title: 'js基础', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/js/js函数基础_call和apply和bind', 'js函数基础_call,apply和bind'], // 你的md文件地址 + 名称
            ['/knowledge/js/js基础_正确的使用Promise和async', 'js基础_正确的使用Promise和async'],
            ['/knowledge/js/js基础_原型和继承', 'js基础_原型和继承'],
            ['/knowledge/js/js基础_深拷贝', 'js基础_深拷贝'],
            ['/knowledge/js/函数节流和防抖', '函数节流和防抖'],
            ['/knowledge/js/eventLoop', 'eventLoop'],
            ['/knowledge/js/闭包的内在原理', '闭包的内在原理'],
            ['/knowledge/js/js设计模式', 'js设计模式'],
          ],
        },
        {
          title: '关于promise',
          collapsable: true,
          children: [
            ['/knowledge/js/手写promise_使用class','手写promise_使用class'],
            ['/knowledge/js/手写promise','手写promise'],
          ],
        },
      ],

      '/knowledge/vue/': [
        {
          title: 'vue', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/vue/尝试 vue-cli 3', '尝试 vue-cli 3'],
            ['/knowledge/vue/render函数', 'render函数'],
            ['/knowledge/vue/用于vue组件间传值的其他黑科技', '用于vue组件间传值的其他黑科技'],
            ['/knowledge/vue/vue源码理解', 'vue源码理解'],
            ['/knowledge/vue/手撸一个简易MVVM模型', '手撸一个简易MVVM模型'],
            ['/knowledge/vue/组件化设计方法论', '组件化设计方法论'],
            ['/knowledge/vue/开发vue插件', '开发vue插件'],
          ],
        },
      ],

      '/knowledge/react/': [
        {
          title: 'react', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/react/diff算法', 'diff算法'],
            ['/knowledge/react/redux使用指南', 'redux使用指南'],
          ],
        },
      ],

      '/knowledge/node/': [
        {
          title: 'nodejs', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/node/使用express和mongoDB', '使用express和mongoDB'],
          ],
        },
      ],

      '/knowledge/webpack/': [
        {
          title: 'webpack', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/webpack/webpack打包初探', 'webpack打包初探'],
          ],
        },
      ],

      '/knowledge/linux/': [
        {
          title: 'linux入门', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/linux/linux基本操作', 'linux基本操作'],
          ],
        },
      ],

      '/knowledge/algorithm/': [
        {
          title: '一些基础算法', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/algorithm/快速排序', '快速排序'],
            ['/knowledge/algorithm/广度优先遍历', '广度优先遍历'],
            ['/knowledge/algorithm/深度优先遍历', '深度优先遍历'],
            ['/knowledge/algorithm/RSA加密算法初探', 'RSA加密算法初探'],
          ],
        },
      ],
      '/knowledge/network/': [
        {
          title: '一些网络知识', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/network/跨域及其解决方式', '跨域及其解决方式'],
            ['/knowledge/network/懒加载和预加载', '懒加载和预加载'],
            ['/knowledge/network/浏览器存储', '浏览器存储'],
            ['/knowledge/network/http协议应知', 'http协议应知'],
            ['/knowledge/network/tcp与udp协议', 'tcp与udp协议'],
            ['/knowledge/network/WebSocket', 'WebSocket'],
          ],
        },
      ],
      '/knowledge/docker/': [
        {
          title: 'docker的使用', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/docker/使用docker部署前端工程最简版', '使用docker部署前端工程最简版'],
          ],
        },
      ],


      '/project/': [
        {
          title: '权限中台的设计思路', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/project/权限中台的设计思路', '权限中台的设计思路'],
          ],
        },
        
        {
          title: '项目2',
          collapsable: true,
          children: [

          ],
        },
      ],
      '/otherTips/': [
        {
          title: '杂谈', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            
            ['/otherTips/markdown的语法总结', 'markdown的语法总结'],
            ['/otherTips/组件的设计规范', '组件的设计规范'],
            ['/otherTips/智能家居设备配网逻辑', '智能家居设备配网逻辑'],
            // ['/otherTips/cdn是什么', 'cdn是什么'],
            // ['/otherTips/docker是什么', 'docker是什么'],
          ],
        },
      ],
      '/hobby/': [
        {
          title: '读书笔记', // 侧边栏名称
          collapsable: false, // 可折叠
          children: [
            ['/hobby/book/面对变化世界的原则-瑞达里欧', '面对变化世界的原则-瑞达里欧'], // 你的md文件地址 + 名称
            // ['w', 'w']
          ],
        },
        {
          title: '观影笔记',
          collapsable: true,
          children: [['q','q']],
        },
      ],
    },
    sidebarDepth: 2,
  },
};
