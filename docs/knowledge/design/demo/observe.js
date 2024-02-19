// 定义主题
class Subject{
    // 主题内部保存/维护保存订阅者
    constructor() {
        this.observers = []
    }
    // 添加一个订阅者
    addObserver(observer) {
        this.observers.push(observer)
    }
    // 删除一个订阅者
    removeObserver(observer) {
        const index = this.observers.indexOf(observer)
        if(index > -1) {
            this.observers.splice(index, 1)
        }
    }
    // 通知所有订阅者，每个订阅者必须实现update方法
    notify() {
        this.observers.forEach(observer => {
            observer.update()
        }) 
    }
}

// 定义订阅者
class Observer {
    constructor(name) {
        this.name = name;
        this.update = function() {
            console.log(name + ' update');
        }
    }
}

// 测试用例
var subject = new Subject()

//创建观察者1
var observer1 = new Observer('hunger')
//主题添加观察者1
subject.addObserver(observer1)
//创建观察者2
var observer2 = new Observer('valley')
//主题添加观察者2
subject.addObserver(observer2)
// subject.removeObserver(observer1)

//主题通知所有的观察者更新
console.log('start! ');

subject.notify()