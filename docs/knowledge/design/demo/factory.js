function Car(name) {
  this.name = name
  this.type = 'car'
}

function Bike(name) {
  this.name = name
  this.type = 'bike'
}

class Factory{
  constructor(type, name) {
    this.type = type
    this.name = name
  }
  getInstance() {
    if(this.type === 'car') {
      return new Car(this.name)
    }
    return new Bike(this.name)
  }
}

// 测试用例
const factory = new Factory('car', 'audio')
const car = factory.getInstance()
const factory2 = new Factory('bike', 'mybike')
const bike = factory2.getInstance()

console.log(car, bike);
