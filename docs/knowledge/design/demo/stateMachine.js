console.log('start---------------------------\n');
/**
 * 这是状态模式 的 简单实现demo
 * 定义了一个有四种状态 的 正方形轨迹，状态只能在相邻的角变化
 */


// state父类，定义所有state需继承的属性，本来应该使用接口来定义的，但没找到怎么写
class State {
  constructor() {}
  next() {}
  changeTo() {}
}
class State1 extends State {
  constructor(user) {
    super();
    this.user = user;
  }
  // 辅助方法
  stateIndex() {
    return 1;
  }
  next() {
    console.log('next to State2');

    this.user.setState(this.user.getStateByIndex(2)(this.user));
    return this.user;
  }
  changeTo(index) {
    console.log(`change to State${index}`);
    if (index === 2 || index === 4) {
      this.user.setState(this.user.getStateByIndex(index)(this.user));
    } else {
      console.log(`非法的状态转换! ${this.stateIndex()} --> ${index}`);
    }
  }
}
class State2 extends State {
  constructor(user) {
    super();
    this.user = user;
  }
  // 辅助方法
  stateIndex() {
    return 2;
  }
  next() {
    console.log('next to State3');

    this.user.setState(this.user.getStateByIndex(3)(this.user));
    return this.user;
  }
  changeTo(index) {
    console.log(`change to State${index}`);
    if (index === 1 || index === 3) {
      this.user.setState(this.user.getStateByIndex(index)(this.user));
    } else {
      console.log(`非法的状态转换! ${this.stateIndex()} --> ${index}`);
    }
  }
}
class State3 extends State {
  constructor(user) {
    super();
    this.user = user;
  }
  // 辅助方法
  stateIndex() {
    return 3;
  }
  next() {
    console.log('next to State4');

    this.user.setState(this.user.getStateByIndex(4)(this.user));
    return this.user;
  }
  changeTo(index) {
    console.log(`change to State${index}`);
    if (index === 2 || index === 4) {
      this.user.setState(this.user.getStateByIndex(index)(this.user));
    } else {
      console.log(`非法的状态转换! ${this.stateIndex()} --> ${index}`);
    }
  }
}
class State4 extends State {
  constructor(user) {
    super();
    this.user = user;
  }
  // 辅助方法
  stateIndex() {
    return 4;
  }
  next() {
    console.log('next to State1');

    this.user.setState(this.user.getStateByIndex(1)(this.user));
    return this.user;
  }
  changeTo(index) {
    console.log(`change to State${index}`);
    if (index === 1 || index === 3) {
      this.user.setState(this.user.getStateByIndex(index)(this.user));
    } else {
      console.log(`非法的状态转换! ${this.stateIndex()} --> ${index}`);
    }
  }
}

// 持有这些状态的业务
class Calu {
  // 所有的状态个数是有限的
  constructor(index) {
    const allState = [
      new State1(this),
      new State2(this),
      new State3(this),
      new State4(this),
    ];
    this.state = allState[index-1];
  }
  // 一组辅助方法
  getState1(user) {
    return new State1(user);
  }
  getState2(user) {
    return new State2(user);
  }
  getState3(user) {
    return new State3(user);
  }
  getState4(user) {
    return new State4(user);
  }
  // 门面模式简化接口数量
  getStateByIndex(index) {
    return this[`getState${index}`];
  }
  setState(state) {
    this.state = state;
  }

  // 业务方法
  next() {
    return this.state.next();
  }
  changeTo(index) {
    this.state.changeTo(index);
    return this;
  }
}


// 使用，初始化时 确认初始状态 0-3
const me = new Calu(1);

// 链式调用
// me.next()
//   .next()
//   .next()
//   .next()
//   .next();

// 指向使用：有些状态是不能到达的
me.changeTo(3).next().changeTo(3).next().changeTo(2).next()


console.log('\nend-----------------------------');