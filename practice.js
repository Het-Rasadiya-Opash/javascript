const arr = [5, 1, 3, 2, 6];
function findmaX(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findmaX(arr));

const output = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);


