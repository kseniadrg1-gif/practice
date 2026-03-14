let str = "023m0df0dfg0";
let position = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "0") {
    position.push(i);
  }
}
console.log(position);
