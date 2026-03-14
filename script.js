for (i = 0; i <= 1000; i++) {
  let str = String(i);
  if (str.length >= 2) {
    let firstDigit = Number(str[0]);
    let secondDigit = Number(str[1]);

    if (firstDigit + secondDigit === 5) {
      console.log(i);
    }
  }
}
