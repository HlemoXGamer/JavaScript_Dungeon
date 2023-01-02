let myString = "EElllzzzzzzzeroo";
let result = myString
  .split("")
  .filter(function (e, i) {
    return myString.indexOf(e) === i;
  })
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  });

console.log(result);
// Elzero
