let str = [1, 2, 3, 4, 5, 6];
evenNum = 0;
oddNum = 0;
for (i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    evenNum += str[i];
  } else {
    oddNum += str[i];
  }
}
let result = evenNum / oddNum;
console.log(result);
