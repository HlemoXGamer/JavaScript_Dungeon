let myArray = ["E", "l", "z", ["e", "r"], "o"];
let result = myArray
  .reduce(function (acc, cur) {
    return acc + cur;
  })
  .split("")
  .filter(function (e) {
    return e !== ",";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });
console.log(result);
// Elzero
