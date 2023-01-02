let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce(function (acc, cur) {
  return cur % 2 === 0 ? cur * acc : cur + acc;
}, 1);
console.log(result);
// 500
