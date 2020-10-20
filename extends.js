//原型链继承
function Parent() {
  this.color = ['red', 'blue']
}
Parent.prototype.sayHi = function () {
  console.log('hi');
}
function Child() {
  this.name = 'Lee'
}
Child.prototype = new Parent() //将Child的原型指向Parent的实例

//借用构造函数继承
function Parent() {
  this.color = ['red', 'blue']
}
function Child() {
  Parent.call(this) //调用父类构造函数
  this.name = 'Lee'
}

//组合继承
function Parent() {
  this.color = ['red', 'blue']
}
Parent.prototype.sayHi = function () {
  console.log('hi');
}
function Child() {
  Parent.call(this)  //调用父类的构造函数
  this.name = 'Lee'
}
Child.prototype = new Parent() //将Child的原型指向Parent的实例
Child.prototype.constructor = Child

//原型式继承
function object(o) {
  function F() {
  }
  F.prototype = o
  return new F()
}

//寄生式继承
function creatAnother(o) {
  var clone = object(o)
  clone.sayHi = function () {
    console.log('creatAnthor');
  }
  return clone
}

//圣杯继承
function Parent() {
  this.color = ['red', 'blue']
}
Parent.prototype.sayHi = function () {
  console.log('hi');
}
function Child() {
  Parent.call(this)  //调用父类的构造函数
  this.name = 'Lee'
}

inheritPrototype(Child, Parent) //将子类的原型指向父类的副本

function inheritPrototype(child, parent) {
  var prototype = object(parent) //创建一个父类的副本
  prototype.constructor = child
  child.prototype = prototype
}