---
title: render函数
date: 2019-01-28 13:35:03
tags: 总结
---

template 只是一种对开发者友好的语法，能够一眼看到 DOM 节点，容易维护，在 Vue.js 编译阶段，会解析为 Virtual DOM。

Vue.js 的 Render 函数与虚拟DOM对象是类似的语法，需要使用一些特定的选项，将 template 的内容改写成一个 JavaScript 对象。

一段可以写在js文件里引入并使用render函数渲染的 vue组件
``` javascript
export default {
  data () {
    return {
      show: false
    }
  },
  render(h) {
    let childNode;
    if (this.show) {
      childNode = h('p', '内容 1');
    } else {
      childNode = h('p', '内容 2');
    }
    
    return h('div', {
      attrs: {
        id: 'main'
      },
      class: {
        container: true
      },
      style: {
        color: 'red'
      }
    }, [childNode]);
  }
}
```
`h`即是 `createElement`，是render函数的核心，有三个参数

 1. 要渲染的元素或组件，可以是一个 html 标签、组件选项或一个函数（不常用），该参数为必填项。示例：
```javascript
  // 1. html 标签
  h('div');
  // 2. 组件选项
  import DatePicker from '../component/date-picker.vue';
  h(DatePicker);
```
```javascript

```
2. 对应属性的数据对象，比如组件的 props、元素的 class、绑定的事件、slot、自定义指令等，该参数是可选的，上文所说的 Render 配置项多，指的就是这个参数。该参数的完整配置和示例，可以到 Vue.js 的文档查看，没必要全部记住，用到时查阅就好：
   [createElement 参数](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0)。

3. 子节点，可选，String 或 Array，它同样是一个 h。示例：
```javascript
[
  '内容',
  h('p', '内容'),
  h(Component, {
    props: {
      someProp: 'foo'
    }
  })
]
```
