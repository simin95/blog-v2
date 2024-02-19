let hero = {
  name: '赵云',
  hp: 100,
  sp: 100,
};

let handler = {
  get: (hero, name) => {
    return hero[name];
  },
  set: (hero, name, value) => {
    console.log(`hero name change to ${value}`)
    console.log(hero[name]);
    
    hero[name] = value;
    console.log(hero[name]);
    return true
  },
};
let heroProxy = new Proxy(hero, handler);

// console.log(heroProxy.name);
heroProxy.name = `关羽`;
console.log(heroProxy.name);

// Object.defineProperty(hero, 'hp', {
//   get() {
//     console.log('访问了hp属性');
//     return this._hp;
//   },
//   set(val) {
//     console.log(`hp set to: ${val}`);
//     return this._hp = val;
//   },
// });

// hero.hp = 200
// console.log(hero._hp);
