/**
 * 根节点 类
 *
 * @class Root
 */
class Root {
  constructor(name, position, salary) {
    this.sublist = [];
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  // 添加 树枝节点 和 叶节点
  add(branch) {
    this.sublist.push(branch);
  }
  // 获得 自己的 的信息
  getInfo() {
    return `头头${this.name}是${this.position}价值${this.salary}`;
  }
  // 获得 所有子节点 的信息
  getAllInfo() {
    return this.sublist;
  }
}
class Branch {}
class Leaf {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  // 获取自己的信息
  getInfo() {
    return `小兵${this.name}是${this.position}薪水${this.salary}`;
  }
}

// 执行主程序
(function start() {
  const boss = new Root('三哥', '董事长', '100000');
  // console.log(boss.getInfo());
  const a = new Leaf('小兵a', '普通员工', '6000');
  const b = new Leaf('小兵b', '普通员工', '6000');
  boss.add(a);
  boss.add(b);

  boss.getAllInfo()
})();
