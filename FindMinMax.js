let arr = [12, 23, 10, 8, 20];
let min = arr[0];
let max = arr[0];
let len = arr.length;

for (i = 1; i <= len; i++) {
  if (min > arr[i]) {
    min = arr[i];
  } else if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Min : ", min);
console.log("Max : ", max);
