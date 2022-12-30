// Test Case 1
let num1 = 9; // "009"

if (num1 < 10) {
  console.log("00" + num1);
}
num1 < 10 ? console.log("00" + num1) : console.log("none");

// Test Case 2
let num2 = 20; // "020"

if (num2 > 10 && num2 < 100) {
  console.log("0" + num2);
}
num2 > 10 && num2 < 100 ? console.log("0" + num2) : console.log("none");

// Test Case 3
let num3 = 110; // "110"

if (num3 >= 100) {
  console.log(num3);
}
num3 >= 100 ? console.log(num3) : console.log("");
