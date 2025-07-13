let nickname = '私の名前は河野裕樹です。';
let age = nickname + '年齢は24歳です。';
console.log(age);

let languages1 = 'JavaScript';
let languages2 = 'PHP';
let languages3 = 'Ruby';
let languages4 = 'Python';
let templateText = `私の好きな言語は${languages1}です。
次は${languages4}を勉強してみたいです。`;
console.log(templateText);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

console.log((playerList[0].age + playerList[1].age + playerList[2].age)/3)

function sayHello(){
  console.log('Hello');
}
sayHello();

const sayWorld = function() {
  console.log("World");
};
sayWorld();

user.birthday = '2000-09-27';
user.sayHello = function(){
  console.log('Hello!');
};
  
user.sayHello();


function add(x,y){
 let calc = x + y;
 console.log(calc);
}
add(3,4);

function subtract(x,y){
 let calc = x - y;
 console.log(calc);
}
subtract(13,3);

function multiply(x,y){
 let calc = x * y;
 console.log(calc);
}
multiply(7,7);

function divide(x,y){
 let calc = x / y;
 console.log(calc);
}
divide(35,7);

function remainder(x,y){
  let calc = x % y;
  return calc;
}
console.log('5を3で割った余りは'+remainder(5,3)+'です。');

let x = 0;
foo();
function foo() {
  x = 1;
  console.log(x);
}

// 関数内だけスコープが有効なため関数内で定義した変数は関数内でしか使えずエラーが起こっており、関数の外で定義した変数は関数の中からでも参照することができるため関数の外側で変数を定義することでエラーが出ず、コンソールに表示できる。

let random = Math.floor(Math.random()*10);
console.log('random => ', random);

function callback(){
  console.log('Hello World!');
}
setTimeout(callback,3000);

let num = 0;
if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

let numbers = [];
for(let i = 0; i < 100; i++){
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let element of mixed){
  if(typeof element === 'string'){
  console.log('not number');
  }else if(element % 2 === 1){
  console.log('even');
  }else if(element % 2 === 0){
  console.log('odd');
  }
}