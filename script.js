let str = "123045607890";
let count = 0;
let position = -1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "0") {
    count++;
    if (count === 3) {
      position = i;
      break;
    }
  }
}
console.log(position);
