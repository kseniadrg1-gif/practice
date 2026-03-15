let arr = [1, 2, 3, 4, 5, 6];
let result = [];
for (let i = 0; i < arr.length; i += 2) {
  let first = arr[i];
  let second = arr[i + 1];
  let combined = String(first) + String(second);
  result.push(Number(combined));
}
console.log(result);
