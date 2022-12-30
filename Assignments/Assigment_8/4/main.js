function checkStatus(a, b, c) {
  let info = [a, b, c];
  for (let i = 0; i < info.length; i++) {
    if (typeof info[i] === "string") {
      a = info[i];
    } else if (typeof info[i] === "number") {
      b = info[i];
    } else if (typeof info[i] === "boolean") {
      if (info[i] === true) {
        c = "Available For Hire";
      } else {
        c = "Not Available For Hire";
      }
    }
  }

  document.write(`<div>`);
  document.write(`Hello ${a}, Your Age is ${b}, You Are ${c}`);
  document.write(`</div>`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
