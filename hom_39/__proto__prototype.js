/* 
let animal ={eats: true}
let rabbit = {jumps: true}
rabbit.__proto__=animal  
console.log(rabbit.eats)


let animal ={
    eats: true,
    walk() {
        console.log("Animal walk")
    }
};
let rabbit = {
    jumps: true,
    __proto__:animal
};
let longEar={
    earLenght:10,
    __proto__:rabbit
};
longEar.walk();
console.log(longEar.jumps)


true
null
undefined


let animal ={
  jumps: null
};
let rabbit = {
  __proto__:animal,
  jumps: true
};
console.log(rabbit.jumps)
delete rabbit.jumps
console.log(rabbit.jumps)
delete animal.jumps
console.log(rabbit.jumps)


let head = {
    glasses: 1
};
let table = {
    __proto__: head,
    pen: 3
};
let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};
let pockets = {
    __proto__: bed,
    money: 2000
};
console.log(bed.glasses)


prototype
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat();
console.log(rabbit)
console.log(animal)


1) true
2) false
3) true
4) undefined


Function.prototype.defer = function (ms) {
    setTimeout(this, ms);};
function f() {
    console.log("Hello!");
}
f.defer(1000);


function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};
let rabbit = new Rabbit("Rabbit");
Все эти вызовы делают одно и тоже или нет?
rabbit.sayHi();                               Rabbit
Rabbit.prototype.sayHi();                     undefined
Object.getPrototypeOf(rabbit).sayHi();        undefined
rabbit.__proto__.sayHi();                     undefined
*/