let str = "aaa bbb ccc";

let result = str
  .split("")
  .map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join("");
console.log(result);
