---
title: js基础：面向对象，原型和继承
date: 2018-10-10 12:30:00
tags: 总结
---

> 关键词：面向对象，原型，构造函数，实例，继承，ES6的class

面向对象的编程方式(OOP: Object Oriented Programming)是一种程序设计的架构，面向对象的程序设计完全不同于传统的面向过程程序设计，它大大地降低了软件开发的难度，使编程就像搭积木一样简单，同样在js里也有类似的实现，这就是就是js里的 `原型`

tip: 面向对象的特点：`封装，继承，多态`

`封装`：隐藏对象的属性和实现细节，仅对外提供公共访问方式，使得整个系统能由多个高内聚，低耦合的模块组装而成，模块复用提高了代码复用能力

`继承`：从已有父类中派生出新的子类，子类继承父类的方法和属性，并且可以根据自己的需求扩展出新的行为，数据和方法复用提高代码复用能力

`派生`：子类在父类方法和属性的基础上产生了新的方法和属性

`多态`：继承自一个每个对象可以用自己的方式去响应共同的调用函数，产生不同的行为

`抽象`：

1. 理解原型
   - 在js中，对象是属性名和属性值的集合，对象属性可以使简单值，函数或其他对象，同时，js可以动态修改和删除对象的属性。

   - 每个对象都有原型这个内置属性，准确的说，是含有对原型的引用，当查找属性时，若对象本身不具有此属性，则会检查它的原型上是否有此属性，从根本上说，任意对象的原型也是一个对象

   - 对象的原型通过`prototype`来访问和设置，例如：
      ```javascript
        const animal = {
          kind: 'animal',
          eat: function() {
            console.log('eat');
          }
        }
        const person = {
          talk: function() {
            console.log('talk');
          }
        }
        //使用此方法设置animal对象为person对象的原型
        Object.setPrototypeOf(person, animal)
        person.eat() // 输出： eat
        person.kind  // 输出： animal 
      ```
      可以看出，`person` 对象继承了 `animal`对象
      如果打印出`person` 对象，是这样的，其中`__proto__`是对象的内置属性，也就是原型属性（prototype的缩写）：
      ```javascript
        const person = {
          talk: function() {
            console.log('talk');
          },
          __proto__: {
            kind: 'animal',
            eat: function() {
              console.log('eat');
            },
            __proto__: {} // 这里最终指向 Object 对象
          }
        }
      ```

   - 原型链：在js里，每个对象都可以拥有一个原型(也只能有一个原型），原型也是一个对象，原型也可以拥有一个原型，以此形成了一个链

2. 构造函数

    - 对象实例由构造函数通过 `new` 操作符产生，其prototype属性共同指向构造函数的原型 
    
    - 我们要创建多个相同类型的对象的实例，通过构造函数来初始化对象为已知的初始状态
    
    - 任何一个函数都可以做构造函数（构造器），构造函数具有可更改的原型对象，可通过`.prototype`属性修改

3. 


几个属性：
constructor: 
prototype: 
_proto_: 

2. ES6里的实现

