---
title: redux使用指南
date: 2019-3-9 9:30:00
tags: 总结
---

Redux 是 JavaScript 状态容器，提供可预测化的状态管理

状态管理的复杂性很大程度上来自于：我们总是将两个难以理清的概念混淆在一起：变化和异步

通过限制更新发生的时间和方式，Redux 试图让 state 的变化变得可预测。这些限制条件反映在 Redux 的三大原则中: 
1. 单一数据源
2. State 是只读的
3. 使用纯函数来执行修改 (reducers)

### action type 好在哪？
- 这只是一种开发者自己的规范和开发者之间的约定
1. 帮助维护命名一致性，因为所有的 action type 汇总在同一位置。
2. 在开发一个新功能之前你想看到所有现存的 actions 。
3. 及时从Action types 列表中追踪新功能的范围与实现。
4. 如果你在 import 一个 Action 常量的时候拼写错了，你会得到 undefined 。在 dispatch 这个 action 的时候，Redux 会立即抛出这个错误，你也会马上发现错误。

- Action Creators 有助于减少样板代码

- 