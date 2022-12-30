let start = 1;
let end = 6;
let breaker = 2;

for (i = start; i <= end; i++) {
  console.log(i);
  for (j = breaker; j < end; j += 2) {
    console.log("-- " + j);
  }
}
