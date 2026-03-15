let str = "aaa bbb ccc eee fff";
let words = str.split("");
let result = [];
for (let i = 0; i < str.length; i++) {
  if (i % 2 === 1) {
    let word = words[i];
    let capitalized = word[0].toApperCase() + word.slise(1);
    result.push(words[i]);
  }
}
let finalStr = result.join(" ");
console.log(finalStr);
