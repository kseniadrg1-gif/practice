let str = "sdhbHphJjJ";
let count = 0;
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char >= "A" && char <= "Z") {
    count++;
  }
}
if (count <= 2) {
  console.log("В строке не более двух заглавных букв");
} else {
  console.log("В строке больше двух заглавных букв");
}
