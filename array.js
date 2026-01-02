// const a = [10, 20, 30];
// console.log(a);

// const arr = new Array(1, 2, 4);

// console.log(arr);

// console.log(a.at(0));
// console.log(a.concat(arr));

// const ages = [32, 33, 16, 40];
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.every(checkAge));

// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.fill("Kiwi");
// fruits.fill("Kiwi", 2, 4);
// console.log(fruits);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach((i) => {
//   console.log(i);

//   sum = sum + i;
// });
// console.log("Sum :" + sum);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Banana", 3));
// let index = fruits.indexOf("Apple");
// console.log(index);
// let result = Array.isArray(fruits);
// console.log(result);
// let text = fruits.join(" and ");
// console.log(text);
// console.log(fruits.length);

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);
// console.log(newArr);

// console.log(fruits.pop());
// fruits.push("kiwi")
// console.log(fruits);

// const num = [1, 2, 3, 4, 5];
// let result = num.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(result);

// console.log(fruits.reverse());
// console.log(fruits.shift());

// console.log(fruits.slice(1, 3));

// console.log(fruits.sort());
// fruits.splice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const rev = arr1.toReversed();
// console.log(rev);
// console.log(arr1);

// let text = fruits.toString();
// console.log(text);

// fruits.unshift("Lemon", "Pineapple");
// console.log(fruits);

const months = ["Januar", "Februar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
