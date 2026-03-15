let str = "123789";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (Number(str[i]) % 2 === 0) {
    result += str[i];
  }
}

console.log(result);
