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

// const myProfile = ["tom", 20];
// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = "太郎") => console.log(`こんにちは！${name}さん！`);
// sayHello("Tom");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

const nameArr = ["田中", "山田", "佐藤"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));
