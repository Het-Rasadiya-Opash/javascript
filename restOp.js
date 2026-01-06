function sum(...nums) {
  let add = 0;
  for (let i of nums) {
    add = add + i;
  }
  return add;
}
console.log(sum(1, 2, 3, 4));
