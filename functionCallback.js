// function display(text) {
//   console.log(text);
// }

// function sum(n1, n2) {
//   let result = n1 + n2;
//   display(result);
// }

// sum(2, 3);

function myDisplayer(something) {
  console.log(something);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
