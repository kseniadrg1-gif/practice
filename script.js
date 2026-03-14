let numbers = 123456;
let str = String(num);
let count = 0;
for (let i = 0; i < str.length; i++) {
  let digit = Number(str[i]);
  if (digit % 2 === 0) {
    count++;
  }
}
console.log(count);
