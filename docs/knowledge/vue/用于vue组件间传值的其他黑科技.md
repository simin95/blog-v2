---
title: 用于vue组件间传值的其他黑科技
date: 2019-01-15 13:35:03
tags: 总结
---

> 最近读了一篇文章，在讲除了 业务中 常用的 `$emit $on` , vuex 状态管理插件 , bus 总线组件 这三种组件之间通信的其他三种方法，在这里记录下来

- 首先说明下常用的三种方法：

  1. `$emit $on` 是用于父子组件传值的通用方法，只能用于父子组件通信，对于跨级或兄弟组件的通信无能为力
  2. bus 总线组件: 作为所有需要存取状态组件的子组件引入，由 bus 组件派发事件（`Bus.$emit`）,由 bus 组件监听事件 (`Bus.$on`); 简单好用，完全耦合业务逻辑而设计和使用
  3. vuex: 状态管理插件，适用大型项目，能监控状态变化，并有灵活的模块化组织方式和好用的状态映射方法，也是强耦合于业务逻辑

- 考虑新的使用场景：抽离业务的组件设计
  这时就不能参照处理业务逻辑传递状态的方式了，因为组件必须是独立的，功能完全脱离业务逻辑设计，所以要用一些其他的实现方式

1. provide/inject: 上下文传值

   - [官网说明](https://cn.vuejs.org/v2/api/#provide-inject)
   - provide/inject 是 vue 2.2.0 版本后新增的 API,provide 用于一个组件向其所有后代组件注入一个依赖，inject 用于子组件接受这个依赖；
   - 不推荐在业务代码中使用

   可以用这个 API 结合 根组件 app.vue 实现全局状态共享
   因为 app.vue 是所有组件的根组件，所以所有组件可以接收到，全局共享根组件将使 app.vue 成为全局变量/仓库，每个组件通过 `this.app` 来访问根结点

   ```javascript
    // 在 app.vue 里提供本组件的实例
    export default {
        provide () {
          return {
            // 除了叫 app 也可以叫其他的名字，比如：VueRootHm 什么的
            app: this
          }
        }
      }

    // 在其他子组件里注入根结点的实例
    export default {
        inject: ['app']
      }
   ```

2. 自己实现 dispatch(子组件向父组件派发事件) / boardcast(父组件向子组件广播事件)，通过$on 监听到
   虽然已经被废弃，但自己实现一个可以在组件开发中使用：写在一个emitter.js，通过mixin 混入需要使用的组件
   功能如下：
   - 在子组件调用 dispatch 方法，向上级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该上级组件已预先通过 $on 监听了这个事件；
   - 相反，在父组件调用 broadcast 方法，向下级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该下级组件已预先通过 $on 监听了这个事件。
   - 原理：本组件使用 $emit 触发的事件，在本组件内可以通过 $on 监听得到
   ``` javascript
    // emitter.js
    export default {
      methods: {
        // dispatch 方法，要指定目标父组件 name
        dispatch(componentName, eventName, params) {
          let parent = this.$parent || this.$root
          let name = parent.$options.name
          // 当父组件或根组件存在 且  (其名称 不等于 目标父组件名 或 不存在),即本次匹配不到的条件，就向上再找一层
          while(parent && (!name || name !== componentName)) {
            parent = parent.$parent
            // 如果父组件没有 name 属性，仍使用子组件的name
            if(parent) {
              name = parent.$options.name
            }
          }
          // 匹配到时
          if(parent) {
            // concat方法用于连接多个数组
            parent.$emit.apply(parent, [eventName].concat(params))
          }
        },
        // boardcast 方法
        broadcast(componentName, eventName, params) {
          broadcast.call(this, componentName, eventName, params)
        },
      }
    }
    // 此函数 递归调用
    function broadcast(componentName, eventName, params) {
      this.$children.forEach(child => {
        const name = child.$options.name
        if(name === componentName) {
          child.$emit.apply(child, [eventName].concat(params))
        } else {
          // 匹配不到则递归每个子组件，继续向下找
          boardcast.apply(child, [componentName, eventName].concat(params))
        }
      })
    }
   ```
   使用时：
   ``` javascript
    import Emitter from '../mixins/emitter.js';
    // A组件
    export default {
      name: 'componentA',
      mixins: [ Emitter ],
      methods: {
        handleClick () {
          this.broadcast('componentB', 'on-message', 'Hello Vue.js');
        }
      }
    }
    // B组件
    export default {
      name: 'componentB',
      created () {
        this.$on('on-message', this.showMessage);
      },
      methods: {
        showMessage (text) {
          window.alert(text);
        }
      }
    }
   ```
  即将原来的 $emit, $on 包装成了向 固定名称组件 派发事件的方法
  
3. 通过 name 属性找到 任意组件 的实例（父组件,兄弟组件,子组件），此方法已不再走触发事件通知的思路了
  总体思路：递归，遍历；所有函数都作为工具函数引入组件中使用
  - 向上找到 最近的 指定组件——findComponentUpward
    context：当前组件, componentName：目标组件名称，是一个数组（多个目标）
  ``` javascript
    function findComponentUpward(context, componentName) {
      let parent = context.$parent
      let name = parent.$options.name

      while(parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if(parent) name = parent.$options.name
      }
      return parent
    }
    export { findComponentUpward }
  ```
  使用时：
  ``` javascript
    // B组件 中拿到它的 最近的 指定先辈组件的 实例
    export default {
      name: 'componentB',
      mounted () {
        const comA = findComponentUpward(this, 'componentA');
      },
      methods: {
        showMessage (text) {
          window.alert(text);
        }
      }
    }
  ```



补充几个概念

1. `$parent $children`
2. `$dispatch $boradcast` : 在 Vue.js 1.x 中，提供了两个方法：`$dispatch` 和 `$broadcast` ，前者用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过 $on （或 events，2.x 已废弃）监听到，后者相反，是由上级向下级广播事件的。
   废弃原因是：`因为基于组件树结构的事件流方式有时让人难以理解，并且在组件结构扩展的过程中会变得越来越脆弱。`也就是说状态管理就要全局管理，不能依赖组件组织的结构传递状态，会越变越脆弱

有时需要传的不仅是状态，可能是一整个组件的实例

> 参考：[Vue.js 组件精讲](https://juejin.im/book/5bc844166fb9a05cd676ebca)
