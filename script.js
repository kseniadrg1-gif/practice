let arr = [1, 2, 3, 4, 5, 6];
let half = arr.length / 2;
let sumFirst = 0;
for (let i = 0; i < half; i++) {
  sumFirst += arr[i];
}
let sumSecond = 0;
for (let i = half; i < arr.length; i++) {
  sumSecond += arr[i];
}

let result = sumFirst / sumSecond;
console.log(result);
