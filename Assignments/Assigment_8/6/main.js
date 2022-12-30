function multiply(...number) {
  let result = 0;
  for (i = 0; i < number.length; i++) {
    if (typeof number[i] === "string") {
      continue;
    } else {
      result = parseInt(number[i - 1]) * parseInt(number[i]);
    }
  }
  document.write(`<p>${result}</p>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
