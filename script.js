let str = "dfgr347cvvf9df6df";
let position = [];
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char >= "0" && char <= "9") {
    position.push(i);
  }
}
console.log(position);
