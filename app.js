let nickname = '河野裕樹';
// データ型を言えるようになる
let age = 24;
console.log('私の名前は'+nickname+'です。年齢は'+age+'歳です。');

// 配列に変更する
let languages = ['JavaScript','PHP','Ruby','Python','Go'];
let templateText = `私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);


let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
// 配列とオブジェクトの違い

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

// 関数とは
function sayHello(){
  console.log('Hello');
}
sayHello();

const sayWorld = function() {
  console.log("World");
};
sayWorld();

// メソッドとは
user.birthday = '2000-09-27';
user.sayHello = function(){
  console.log('Hello!');
};
user.sayHello();

// 問題通りにする
// 引数とは・どこが引数
let calc = {};

calc.add = function(x,y){// 仮引数
  console.log(x + y);
}
calc.add(3,4);// 実引数

calc.subtract = function(x,y){
  console.log(x - y);
}
calc.subtract(13,3);

calc.multiply = function(x,y){
  console.log(x * y);
}
calc.multiply(7,7);

calc.divide = function(x,y){
  console.log(x / y);
}
calc.divide(35,7);

// 返り値とは
// どこに返るか
function remainder(x,y){
  let calc = x % y;
  return calc;
}
console.log('5を3で割った余りは'+remainder(5,3)+'です。');

// スコープとは

function foo() {
  let x = 1;
  console.log(x);
};
foo();
  

// 関数内だけスコープが有効なため関数内で定義した変数は関数内でしか使えずエラーが起こっており、関数の外で定義した変数は関数の中からでも参照することができるため関数の外側で変数を定義することでエラーが出ず、コンソールに表示できる。

let random = Math.floor(Math.random()*10);
console.log('random => ', random);

// コールバック関数とは
function callback(){
  console.log('Hello World!');
}
setTimeout(callback,3000);

setTimeout(remainder,3000);// callback
setTimeout(remainder(4, 3),3000);// 1

let num = 0;
if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

let numbers = [];
// for文をどういうときに使用する
// 文法
for(let i = 0; i < 100; i++){
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
// for(let element of mixed){
//   if(typeof element === 'string'){
//   console.log('not number');
//   }else if(element % 2 === 1){
//   console.log('even');
//   }else if(element % 2 === 0){
//   console.log('odd');
//   }
// }
for(let i = 0; i < mixed.length; i++){
  if(typeof mixed[i] === 'string'){
    console.log('not number');
  }else if(mixed[i] % 2 === 1){
    console.log('odd');
  }else if(mixed[i] % 2 === 0){
    console.log('even');
  }
}