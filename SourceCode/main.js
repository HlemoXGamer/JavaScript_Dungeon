/*
Video #007 Output To Screen
window.alert("Wassup From Js File"); // Apper Alert in Page "Not Useable"
document.write("<h1>Inserted HTML Element From JS</h1>"); // To Insert A String Or HTML Element "Not Best Bracktes For Insert HTML Element"
console.log("Ohayo Console-ken"); // Insert Message In Console
*/

/*
Video #008 Console Methods And Styling And WebAPI
console.error("Error"); // Same Like console.log But Dats An Error Issue
console.table(["Humburger", "Fries", "Cola"]); // Insert A Table Of Data In Console
console.log(
  "Wassup From Js %cFile %cHomiee",
  "color: red; font-size:2rem",
  "color: blue; font-size:2rem"
  ); // To Style Messages In Console "%c Must Be lowercase" 
*/

/* 
Video #010 Data Types And Typeof Operator
console.log("Ahmed"); // Insert Ahmed
console.log(typeof "Mohamed"); // Insert Type Of Message
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 20]);
console.log(typeof ["OS", "Ram", "GPU"]);
console.log(typeof { name: "Coffee", age: "2 min", country: "Kitchen" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
*/

/* 
Video #011 Variables
var user = "Homie";
console.log(user);
js.innerHTML = "Coffee"; // Syntax = id.innerHTML = "Value";
*/

/* 
Video #013 Var, Let, Const Compare

  var
  - Redeclare (True)
  - Access Before Declare (Undefined)
  - Variable Scope Drama (Added To Window)
  - Block or Function Scope

  let
  - Redeclare (False)
  - Access Before Declare (Error)
  - Variable Scope Drama (Added To Global Scope)
  - Block or Function Scope

  const
  - Redeclare (False)
  - Access Before Declare (Error)
  - Variable Scope Drama (Added To Global Scope)
  - Block or Function Scope
*/

/*
Video #014 String Syntax And Character Escape Sequences
console.log("Elzero Web School");
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log("Elzero \\ Web \"School\"");
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");
*/

/*
Video #015 Concatenations
let a = "Java"
let b = "Script"

document.write(a + " " + b);
console.log(a, b);
*/

/*
Video #016 Template Literals Template Strings 
let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " \"\" " + b + "\n" + c + " " + d );

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

let title = "Elzero";
let desc = "Elzero Web School"

let markUp = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markUp);
*/

/* 
Video #018 Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
  console.log(10 + 20);
  console.log(10 + "Hamada");
  
  console.log(20 - 10);
  console.log(10 - "Ahmed"); // NaN
  console.log(typeof NaN);
  
  console.log(10 * 20);
  console.log(10 * -20);
  
  console.log(20 / 5);
  console.log(20 / 3);
  
  console.log(2 ** 4);
  
  console.log(10 % 2);
  console.log(11 % 2);
  
  let num = 1;
  num++;
  ++num;
  
  let num2 = 5;
  num2--;
  --num2;
*/

/*
Video #019 Unary Plus And Negation Operators
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"13.7");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
console.log("========================================");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"13.7");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);
*/

/*
Video #020 Type Coercion 
let a = "10";
let b = 20;
let c = true;

console.log(+a + b);
console.log(a - b);
console.log("" - 2);
console.log(+"");
console.log(0 - 2);
console.log(false - true);
console.log(a + b + c);
console.log(+a + b + c);
*/

/*
Video #021 Assignment Operators
let a = 10;

a = a + 20;

a = a + 70;

a += 100; // ==> a = a + 100
a -= 50; // ==> a = a - 50
a /= 50; // ==> a = a / 50

console.log(a);
*/

/*
Video #023 Numbers
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
*/

/*
Video #024 Number Methods
console.log(100..toString());
console.log((100).toString());

console.log(100.5555555.toFixed(2));
console.log(100.5555555.toFixed(3));
console.log(100.5565555.toFixed(2));
console.log(100.5545555.toFixed(2));

console.log(Number("100 Pepsi"));
console.log(+"100 Pepsi");
console.log(parseInt("100 Pepsi"));
console.log(parseInt("Cola 100 Pepsi"));
console.log(parseInt("100.5 Pepsi"));
console.log(parseFloat("100 Pepsi"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama"));
console.log(Number.isNaN("Osama" / 20));
*/

/*
Video #025 Math Object
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.ceil(99.8));
console.log(Math.floor(99.2));
console.log(Math.floor(99.8));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.5));
*/

/*
Challenge #026
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.floor(d));
console.log(Math.pow(a,Math.floor(d)));

console.log(Math.floor(d));
console.log(Math.round(d))
console.log(Math.trunc(d))
console.log(Math.trunc(Math.min(a,b,c,d)))

console.log(((Math.floor(b) / Math.floor(d)) / Math.ceil(d) * Math.floor(d)).toFixed(2)); // 66.67
console.log(Math.ceil((((Math.floor(b) / Math.floor(d)) / Math.ceil(d) * Math.floor(d)).toFixed(2)))) //67
*/

/*
Video #027 String Methods
let theName = "Ahmed";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[1]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);

console.log(theName.trim()); // To Clear All Spaces In String

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
*/

/*
Video #028 String Methods
let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));

console.log(a.lastIndexOf("Web"));
console.log(a.lastIndexOf("Web", 8));

console.log(a.indexOf("o"));
console.log(a.lastIndexOf("o"));

console.log(a.slice(2,6));
console.log(a.slice(-5, -1));

console.log(a.repeat(5));

console.log(a.split());
console.log(a.split(""));
console.log(a.split("", 6));
*/

/*
Video #029 String Methods
let a = "Elzero Web School";

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6));
console.log(a.substring(a.length - 1));
console.log(a.substring(a.length - 5, a.length -3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("z", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("o", 6))
*/
/*
Challenge #030 
let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
console.log(a.charAt(13).toUpperCase().repeat(8));
console.log(a.split(" ", 1))
console.log(a.substr(0,10))
console.log(a.slice(0,1).toLowerCase() + a.slice(1).toUpperCase() + a.slice(-1).toLowerCase());
*/

/*
Video #031 Comparison Operators 
console.log(10 == "10"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value And Type
console.log(10 !== "10"); // Compare Value And Type
console.log(10 !== 10); // Compare Value And Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);
*/

/*
Video #032 Logical Operators
console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 >8 && 10>=10);
console.log(10 == "10" && 10 >8 && 10>50);

console.log(10 == "10" || 10 > 80 || 10 > 50);
*/

/*
Video #033 If Conditions & Video #034 Nested If Condition
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  }

  if (student === true) {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);
*/

/*
Video #035 Conditional Ternary Operator 
let theName = "Ahmed";
let theGender = "Male";
let theAge = "30";

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

console.log(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log(60)
  : console.log("Unknow");
*/

/*
Video #036 Nullish Coalescing Operator And Logical Or
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = "";

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);
*/

/*
Challenge #037
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && 1 <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log(">40")
  : console.log(Unknown);

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st.charAt(st.search("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
/*
Video #038 Switch Statement
let day = 0;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
  
}
*/

/*
Challenge #039 Switch And If Condition Challenge 
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT" || "Support":
    salary = 6000;
    break;
  case "Developer" || "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays == 0) {
  money = 5000;
  console.log(`My money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`My money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`My money is ${money}`);
} else if (holidays == 5) {
  money = 0;
  console.log(`My money is ${money}`);
} else {
  money = 0;
  console.log(`My money is ${money}`);
}
*/
/*
Video #040 Array Big Introduction
let myFriends = ["Ahmer", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(` ${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(typeof myFriends);

console.log(Array.isArray(myFriends));
*/

/*
Video #041 Using Length With Array
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends.length);

myFriends[6] = "Gamal";

console.log(myFriends);

console.log(myFriends.length);

myFriends[myFriends.length] = "Osama";

myFriends.length = 10;
*/

/*
Video #042 Add And Remove From Array
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");

console.log(myFriends);

myFriends.push("Samah", "Eman");

console.log(myFriends);

let first = myFriends.shift();

console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop();

console.log(myFriends);

console.log(`last Name Is ${last}`);

*/

/*
Video #043 Searching Array
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.indexOf("Osama") === -1) {
  console.log("Not Found");
}
*/

/*
Video #044 Sorting Arrays
let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());
console.log(myFriends.sort().reverse());
*/

/*
Video #045 Slicing Array
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -1));
console.log(myFriends);

myFriends.splice(1, 2, "Samer", "Samara");

console.log(myFriends);
*/

/*
Video #046 Joining Arrays
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|").toUpperCase());
*/

/*
Challenge #047 Array Challenge
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse());
console.log(my.slice(++zero, --counter).reverse());
console.log(my[--counter].slice(--zero, counter) + my[++zero].slice(counter));
console.log(
  my[zero].slice(-counter--, -zero) + my.reverse()[++counter].charAt(--zero)
);
*/

/*
Video #048 Loop - For And Concept Of Loop

// for
// for ([1] [2] [3]){
  // block of code
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
video #049 Loop On Sequences
let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira"];

let onlyNames = [];

// if (typeof myFriends[0] === "string") {
//   onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === "string") {
//   onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[2] === "string") {
//   onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === "string") {
//   onlyNames.push(myFriends[3]);
// }
// if (typeof myFriends[4] === "string") {
//   onlyNames.push(myFriends[4]);
// }
// if (typeof myFriends[5] === "string") {
//   onlyNames.push(myFriends[5]);
// }
// if (typeof myFriends[6] === "string") {
//   onlyNames.push(myFriends[6]);
// }
// console.log(onlyNames);

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
*/

/*
Video #050 Nested Loops And Trainings
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(products[i]);
  console.log("Colors:");
  for (let j = 0; j < colors.length; j++) {
    console.log(colors[j]);
  }
  console.log("Models:");
  for (let k = 0; k < models.length; k++) {
    console.log(models[k]);
  }
}
*/

/*
Video #051 Loop Control - Break, Continue, Label
let products = ["Keyboard", 10, 20, "Mouse", "Pen", "Pad", 30, 40, "Monitor"];

let colors = ["Red", "Green", "Black"];

mainloop: for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
  nestedloop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainloop;
    }
  }
}
*/

/*
Video #052  Loop - For Advanced Example
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}
*/

/*
Video #053 Add Products To Page
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`</div>`);
}
*/

/*
Video #054 Loop While
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < 10) {
  console.log();
  index++;
}

while (index < products.length) {
  console.log(products[index]);
  index++;
}
*/

/*
Video #055 Loop Do While
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
*/

/*
Challenge #056
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

counter = 0;

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
myAdmins.length = myAdmins.indexOf("Stop");
document.write(`<div>We Have ${myAdmins.length} Admins</div> <hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team members :</h3> `);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<div>${++counter} - ${myEmployees[j]}</div> <br>`);
    }
  }
  counter = 0;
  document.write(`<hr>`);
}
*/

/*
Video #057 Function Intro And Basic Usage
function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");
*/

/*
Video #058 Function Advanced Examples
function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App Is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age Is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);
*/

/*
Video #059 Function Return And Use Cases
function calc(num1, num2) {
  return num1 + num2;
}

let result = calc(10, 20);

console.log(result);

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interruptting`;
    }
    console.log(i);
  }
}

generate(10, 20);
*/

/*
Video #060 Default Parameters
function sayHello(userName = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${userName} Your Age Is ${age}`;
}

console.log(sayHello());
*/

/*
Video #061 Function Rest Parameters
function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `final result is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));
*/

/*
Video #062 Function Ultimate Practice
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome ${us}</h2>`);
  document.write(`<p>Age: ${us}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (sk.length === 0) {
      document.write(`<p>No Skills To Hide</p>`);
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "Css");
*/

/*
Challenge #063 
// Usually If Condition
// function showDetails(a, b, c) {
//   let info = [a, b, c];
//   for (let i = 0; i < info.length; i++) {
//     if (typeof info[i] === "string") {
//       a = info[i];
//     } else if (typeof info[i] === "number") {
//       b = info[i];
//     } else if (typeof info[i] === "boolean") {
//       if (info[i] === true) {
//         c = "Available For Hire";
//       } else {
//         c = "Not Available For Hire";
//       }
//     }
//   }
//   document.write(`<div>`);
//   document.write(`<p>Hello ${a}, Your Age Is ${b} You Are ${c}</p>`);
//   document.write(`</div>`);
// }

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Conditional Ternary Operator 
// function showDetails(a, b, c) {
//   let info = [a, b, c];
//   for (let i = 0; i < info.length; i++) {
//     typeof info[i] === "string" ?
//   }
//   document.write(`<div>`);
//   document.write(`<p>Hello ${a}, Your Age Is ${b} You Are ${c}</p>`);
//   document.write(`</div>`);
// }

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/
