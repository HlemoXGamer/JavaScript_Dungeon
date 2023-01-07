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

/*
Video #064 Anonymous Function
let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("ID Name").onclick = sayHello;
document.getElementById("ID Name").onclick = function () {
  console.log("Wassup");
};

setTimeout(function () {
  console.log("Hello");
}, 2000);
*/

/*
Video #065 Return Nested Function
// Example 1

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }
// console.log(sayMessage("Osama", "Mohamed"));

// Example 2

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }
// console.log(sayMessage("Osama", "Mohamed"));

// Example 3

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }
// console.log(sayMessage("Osama", "Mohamed"));
*/

/*
Video #066 Arrow Function Syntax
// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = (num) => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));
*/

/*
Video #067 Scope - Global And Local
// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();
*/

/*
Video #068 Scope - Block
var x = 10;

if (true) {
  let x = 50;
}

console.log(x);
*/

/*
Video #069 Scope - Lexical
function parent() {
  let a = 10;

  function child() {
    console.log(a);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();
*/

/*
Challenge #070 Arrow Function 
// Challenge 1
// let names = function (...names) {
//   return `String [${names.join("], [")}] => Done !`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// names = (...names) => `String [${names.join("], [")}] => Done !`;
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//Challenge 2

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + parseInt(nums);
// console.log(calc(10, myNumbers[0], myNumbers[1]));
*/

/*
Video #071 High Order Function - Map
let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// let addSelf = myNums.map(function (element, index, array) {
//   return element + element;
// }, 10);

// let addSelf = myNums.map((element) => element + element);
// console.log(addSelf);

function addition(element) {
  return element + element;
}

let add = myNums.map(addition);
console.log(add);
*/

/*
Video #072 High Order Function - Map - Practice
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (element) {
//     return element === element.toUpperCase()
//       ? element.toLowerCase()
//       : element.toUpperCase();
//   })
//   .join("");

// Arrow Function Version
let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw);

// let inv = invertedNumbers.map(function (element) {
//   return -element;
// });

// Arrow Function Version

let inv = invertedNumbers.map((a) => -a);
console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (element) {
//     return isNaN(parseInt(element)) ? element : "";
//   })
//   .join("");

// Arrow Function Version

let ign = ignoreNumbers
  .split("")
  .map((a) => (isNaN(parseInt(a)) ? a : ""))
  .join("");

console.log(ign);
*/

/*
Video #073 Higher Order Function - Filter
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter(function (e) {
  return e.startsWith("A");
});
console.log(filterFriends);

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (e) {
  return e % 2 === 0;
});

console.log(evenNumbers);

// Map VS Filter

// let addMap = numbers.map(function (element) {
//   return element + element;
// });
// console.log(addMap);

// let addfilter = numbers.filter(function (element) {
//   return element + element;
// });
// console.log(addMap);
*/

/*
Video #074 Higher Order Function - Filter - Practice
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (e) {
    return e.length <= 4;
  })
  .join(" ");

console.log(smallWords);

let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (e) {
    return isNaN(parseInt(e));
  })
  .join("");

console.log(ign);

let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (e) {
    return !isNaN(parseInt(e));
  })
  .map(function (e) {
    return e * e;
  })
  .join("");

console.log(mixedContent);
*/

/*
Video #075 Higher Order Function - Reduce
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
}, 5);

console.log(add);
*/

/*
Video #076 Higher Order Function - Reduce - Practice
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let check = theBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return !ele.startsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);
*/

/*
Video #077 Higher Order Function - ForEach And Practice
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (e) {
  e.onclick = function () {
    allLis.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    allDivs.forEach(function (e) {
      e.style.display = "none";
    });
  };
});
*/

/*
Challenge #078 Higher Order Function - Challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zLetter = myString[myString.length - true];

let solution = myString
  .split("")
  .filter(function (e) {
    return isNaN(parseInt(e)) && e !== zLetter;
  })
  .map(function (e) {
    return e.startsWith(",")
      ? (e = "")
      : (e = e) && e.startsWith("_")
      ? (e = " ")
      : (e = e);
  })
  .reduce(function (acc, cur) {
    return acc === cur ? acc : acc + cur;
  });

console.log(solution);
*/

/*
Video #079 Object - Intro
let user = {
  theName: "Osama",
  theAge: 38,

  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello);
*/

/*
Video #080 Dot Notation vs Bracket Notation
let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country);
console.log(user.myVar);
console.log(user[myVar]);
*/

/*
Video #081 Nested Object And Advanced Trainings
let user = {
  name: "Osama",
  age: 38,
  skills: ["html", "css", "js"],
  available: false,
  addresses: {
    ksa: "Riyad",
    egypt: {
      one: "cairo",
      two: "giza",
    },
  },
  checkav: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Available`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkav());
*/

/*
Video #082 Create Object With New Keyword
let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());
*/

/*
Video #083 This Keyword
console.log(this);
console.log(this === window);

myvar = 100;

console.log(window.myvar);
console.log(this.myvar);

function sayHello() {
  console.log(this);
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user = {
  age: 38,
  ageInDays: function () {
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());
*/

/*
Video #084 Create Object With Create Method
let user = {
  age: 40,
  doubleAge: function () {
    return user.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
*/

/*
Video #085 Create Object With Assign Method
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};
let obj2 = {
  prop2: 2,
  meth1: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
*/

/*
Video #086 What Is DOM And Select Elements
let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElements = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements);
console.log(myClassElement[0]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElements[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
*/

/*
Video #087 Get Set Elements Content And Attributes
let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.Js</span> File.";
myElement.textContent = "Text From <span>Main.Js</span> File.";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.con");
myLink.setAttribute("title", "Twitter");

*/

/*
Video #088 Check Attributes And Examples
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attibutes`);
}
*/

/*
Video #089 Create And Append Elements
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

//append Element to Body
document.body.appendChild(myElement);

console.log(myElement);

console.log("Wassup");
*/

/*
Video #090 Product With Title And Description Practice
//My Way
// for (let i = 1; i <= 100; i++) {
//   let myDiv = document.createElement("div");
//   myDiv.className = "Product";
//   myDiv.innerHTML = `<h3>Product Title ${i}</h3> <p>Product Description</p>`;
//   document.body.appendChild(myDiv);
// }

//Elzero Way
// for (let i = 1; i <= 100; i++) {
//   let myMainElement = document.createElement("div");
//   let myHeading = document.createElement("h3");
//   let myPara = document.createElement("p");

//   let myHeadingText = document.createTextNode("Product Title" + " " + i);
//   let myParagraphText = document.createTextNode("Product Description");

//   myHeading.appendChild(myHeadingText);
//   myMainElement.appendChild(myHeading);
//   myPara.appendChild(myParagraphText);
//   myMainElement.appendChild(myPara);

//   myMainElement.className = "product";

//   document.body.appendChild(myMainElement);
// }
*/

/*
Video #091 Deal With Child
let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
*/

/*
Video #092 DOM Events
// onclick;
// oncontextmenu;
// onmouseenter;
// onmouseleave;

// onload;
// onscroll;
// onresize;

// onfocus;
// onblur;
// onsubmit;
let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("Clicked!");
};
*/

/*
Video #093 Validate Form And Prevent Defualt
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onmouseenter = function (event) {
  console.log(event);
  event.preventDefault();
};
*/

/*
Video #094 Event Simulation - Click Focus Blur
let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};
*/

/*
Video #095 Class List Object And Methods
let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("0"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("osama");
};
*/

/*
Video #096 CSS Styling And Stylesheets
let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight:bold; color: #089089; opacity: 0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

document.styleSheets[3].rules[0].style.removeProperty("line-height");
document.styleSheets[3].rules[0].style.setProperty("background-color", "red ");
*/

/*
Video #097 Before, After, Prepend, Append, Remove
let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.before("Wassup From JS");
element.after(createdP);
element.append("Hello From Js");
element.prepend(createdP);
element.remove();
*/

/*
Video #098 DOM Traversing
let span = document.querySelector(".two");

console.log(span.nextElementSibling);
console.log(span.previousElementSibling);

console.log(span.nextSibling);
console.log(span.previousSibling);

span.onclick = function () {
  span.parentElement.remove();
};
*/

/*
Video #099 DOM Cloning
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);
*/

/*
Video #100
let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Wassup From OnClick 1");
// }
// function two() {
//   console.log("Wassup From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Wassup From OnClock 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone");

// cloned.onclicked = function () {
//   console.log("i'm Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("i'm Cloned");
  }
});
*/

/*
Challenge #101
*/
// Solved In External Folders

/*
Video #102 What is BOM
*/

/*
Video #103 Alert - Confirm - Prompt
// alert("test")

// let confirmMsg = confirm("Are You Sure?");

// confirmMsg === true
//   ? console.log("Item Deleted")
//   : console.log("Item Submited");

// let promptMsg = prompt("Good Day For You?");

// console.log(promptMsg);
*/

/*
Video #104 setTimeout And clearTimeout
// setTimeout(function () {
//   let a = document.createElement("h1");
//   a.innerHTML = "Wat R U Lookin' At U Stupid Son Of Bitch !!";
//   a.style.fontSize = "90px";
//   document.body.appendChild(a);
// }, 3000);

// setTimeout(sayHello, 3000);

// function sayHello() {
//   let a = document.createElement("h1");
//   a.innerHTML = "Willy Wanka Say Helloooo :)";
//   a.style.fontSize = "90px";
//   document.body.appendChild(a);
// }

// setTimeout(sayHello, 3000, "Your Fat Mother", 150);

// function sayHello(user, age) {
//   let a = document.createElement("h1");
//   a.innerHTML = "This Is Message From" + " " + user;
//   a.style.fontSize = "90px";
//   document.body.appendChild(a);
// }

let counter = setTimeout(sayHello, 3000);

function sayHello() {
  let a = document.createElement("h1");
  a.innerHTML = "This Is Message From Your Fat Mother";
  a.style.fontSize = "90px";
  document.body.appendChild(a);
}

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};
*/

/*
Video #105 setInterval and ClearInterval
let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
*/

/*
Video #106 Window Location Object
location.href = "https://google.com";
location.href = "/#sec02";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);

console.log(location.hash);

location.reload();

location.replace("https://google.com");
location.assign("elzero.org");
*/

/*
Video #107 Window Open And Close
//window.close()
//window.open("", "", "", "");
*/

/*
Video #108 Window History Object
*/

/*
Video #109 Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth",
// });

// window.scrollBy({
//   left: 500,
//   top: 200,
//   behavior: "smooth",
// });
*/

/*
Video #110 Scroll To Top Using Y Practice
// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };
*/

/*
Video #111 Local Storage
// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

//Remove one
//window.localStorage.removeItem("color")

//Remove All
//window.localStorage.clear()

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");
*/

/*
Video #112 Local Storage And Color Application Practice
let lis = document.querySelectorAll("li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // Remove Active Class From All Lis
  lis.forEach(function (li) {
    li.classList.remove("active");
  });
  // Add Active Class To Current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach(function (li) {
  li.addEventListener("click", function (el) {
    // el.currentTarget.dataset.color
    // Remove Active Class From All Lis
    lis.forEach(function (li) {
      li.classList.remove("active");
    });
    // Add active Class To Current Element
    el.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", el.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = el.currentTarget.dataset.color;
  });
});
*/

/*
Video #113 Session Storage And UseCases
window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");
// Same LocalStorage Attributes
*/

/*
Challenge #114 BOM
*/
