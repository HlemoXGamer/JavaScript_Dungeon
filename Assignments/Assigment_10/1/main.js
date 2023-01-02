let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let solution = mix
  .map(function (e) {
    return isNaN(parseInt(e)) ? e : "";
  })
  .reduce(function (arr, curr) {
    return `${arr}${curr}`;
  });

console.log(solution);
// Elzero
