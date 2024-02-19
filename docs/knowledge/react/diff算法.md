---
title: React 的 diff 算法理解
date: 2019-04-03 11:35:03
tags: 总结
---

## React Virtual DOM 的 diff算法

## react 的 diff 算法高性能的原因主要基于以下三个假设：
1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。

2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。

3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

### tree diff
  对树进行分层比较，两棵树只会对同一层次的节点进行比较
### component diff
  不同类型的两个组件将被直接替换，若开发者认为替换前后的组件结构相似，可以通过使用`shouldComponentUpdate()`来声明此组件不需要被直接替换，而是使用tree diff，以进一步而获取更好的性能

### element diff
  当节点处于同一层级时，React diff 提供了三种节点操作: INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）
  对同一层级的同组子节点，添加唯一 key 进行区分，以进行 移动，插入和删除操作

## 总结：
  - React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；
  - React 通过分层求异的策略，对 tree diff 进行算法优化；
  - React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
  - React 通过设置唯一 key的策略，对 element diff 进行算法优化；
  - 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；
  - 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
