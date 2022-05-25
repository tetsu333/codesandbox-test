// var val1 = "var変数";
// console.log(val1);

// val1 = "val上書き";
// console.log(val1);

// var val1 = "var再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// let val2 = "let再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "const上書き";
// console.log(val3);

// const val3 = "const再宣言";
// console.log(val3);

// const val4 = {
//   name: "hoge",
//   age: 10
// };
// val4.name = "fuga";
// val4.addres = "日本";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "tom";
// const age = 10;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// const myProfile = {
//   name: "Tom",
//   age: 10
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["tom", 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
