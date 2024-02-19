---
title: js基础：深拷贝
date: 2018-10-16 12:30:00
tags: 总结
---
## 基本类型 和 引用类型
js是一门神奇的语言，变量类型分为基本类型(`String, Boolean, Number, Undefined, Null, Symbol`)和引用类型(`Object, Array, Function`)  
* 基本数据类型的特点：直接存储在栈(stack)中的数据  
* 引用数据类型的特点：栈中存储的是该对象在堆中的引用地址，真实的数据存放在堆内存(heap)里

## 对象的赋值，浅拷贝，深拷贝
### 赋值
当把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

### 浅拷贝
能创建一个新的对象，将第一层属性全部按照基本类型复制，但对于嵌套多层的对象和数组，第一层以下的层中的属性，仍指向同一内存地址  
实现较方便，在对象和数组无嵌套的情况下可使用  
> 实现
1. Object.assign()
``` javascript
  let obj2 = Object.assign({}, obj)
```
2. Array.prototype.concat()
``` javascript
  let arr2 = arr1.concat()
```

### 深拷贝
1. JSON.parse(JSON.stringify())
简单好用的方法，缺点是不能处理函数。JSON.stringify() 在对象中遇到值为 undefined、function 和 symbol 时会自动将这个字段忽略，在数组中则会返回 null（以保证单元位置不变）。

2. 递归实现
``` javascript
    //定义检测数据类型的功能函数
    function checkedType(target) {
      return Object.prototype.toString.call(target).slice(8, -1)
    }
    //实现深度克隆---对象/数组
    function clone(target) {
      //判断拷贝的数据类型
      //初始化变量result 成为最终克隆的数据
      let result, targetType = checkedType(target)
      if (targetType === 'Object') {
        result = {}
      } else if (targetType === 'Array') {
        result = []
      } else {
        return target
      }
      //遍历目标数据
      for (let i in target) {
        //获取遍历数据结构的每一项值。
        let value = target[i]
        //判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' ||
          checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
          //继续遍历获取到value值
          result[i] = clone(value)
        } else { //获取到value值是基本的数据类型或者是函数。
          result[i] = value;
        }
      }
      return result
    }

```
3. lodash工具函数
[_.cloneDeep](https://www.html.cn/doc/lodash/#_clonedeepvalue)