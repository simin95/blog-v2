---
title: vue源码理解 ———— 持续更新
date: 2019-01-28 13:35:03
tags: 总结
---
### 第一章

### 第二章
1. $options 存储了 初始化vue实例时传入的选项

2. data的初始化：`this.$options.data` 简写为 `this.data`
   使用 es6 的 proxy 代理了 data属性(函数)，实现方式：`proxy(vm, '_data', key)` 
   即 对于
   ``` javascript
    export default {
      data() {
        return {
          hello: o
        }
      },
    }

    // 以下方法均能访问到data里的数据：
    this.hello
    this._data.hello
    this.$options.data().hello
   ```

3. vm._render 最终是通过执行 createElement 方法并返回的是 VNode

4. Virtual DOM 是用一个原生的js对象描述一个DOM节点的方法，用 VNode 这个class描述，定义在 `src/core/vdom/vnode.js ` 
   其实现借鉴了 [snabbdom](https://github.com/snabbdom/snabbdom) 实现虚拟DOM的库

5. 使用 `createElement`创建VNode，定义在 `src/core/vdom/create-elemenet.js`

6. _update 方法的作用是把 VNode 渲染成真实的 DOM，它的定义在 `src/core/instance/lifecycle.js`

7. _update 的核心就是调用 vm.__patch__ 方法，它的定义在`src/platform/web/runtime/index.js`里，因为其与平台相关，再往下看它的实现，是由定义在`src/core/vdom/patch.js` 的 createPatchFunction 函数，通过在`src/platform/web/runtime/patch.js` 中预传入 与平台相关的 nodeOps 参数和 modules 参数，返回一个只接受四个参数，并已预定义好与平台相关参数的 vm.__patch__ 方法 

### 第三章

1. 组件化：组件是资源独立的，组件在系统内部可复用，组件和组件之间可以嵌套。

2. 如果给 render 函数 的 createElement 传入的是一个组件，则会调用 createComponent 方法创建 VNode，定义在 `src/core/vdom/create-component.js` 中

3. 

### 第四章 双向绑定，更新

1. 响应式对象data：通过定义在 `src/core/observer/index.js` 中的 observe 给非 VNode 的对象类型数据添加一个 Observer
  
2. Observer 是一个类，它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新
   
3. 依赖收集：响应式对象 getter 相关的逻辑就是做依赖收集，其中 Dep 是整个 getter 依赖收集的核心，它的定义在 `src/core/observer/dep.js` 中




## 看源码的技巧
1. 一次看一条分支

参考资料：
[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis)