let str = "1 22 333 4444 22 5555 1";
let result = str
  .split(" ")
  .filter((word) => word.length <= 3)
  .join(" ");
console.log(result);
