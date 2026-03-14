let numbers = "12,34,56";
let sum = numbers
  .split(",")
  .map(Number)
  .reduce((a, b) => a + b, 0);
console.log(sum);
