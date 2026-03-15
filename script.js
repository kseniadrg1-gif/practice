let str = "a bc def ghij";
let words = str.split(" ");
let result = [];
for (i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.length <= 3) {
    result.push(word.toUpperCase());
  } else {
    result.push(word);
  }
}
console.log(result);
