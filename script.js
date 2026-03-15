let arr = [123, 345, 789];
let reversedArr = [];
for (i = 0; i < arr.length; i++) {
  let num = arr[i];
  let reversedNum = Number(String(num).split("").reverse().join(""));
  reversedArr.push(reversedNum);
}
console.log(reversedArr);
