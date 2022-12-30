function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Your Age in Mounths is ${theAge * 12}`);
    console.log(`Your Age in weeks is ${theAge * 12 * 4}`);
    console.log(`Your Age in days is ${theAge * 12 * 4 * 7}`);
    console.log(`Your Age in hours is ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Your Age in minutes is ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Your Age in minutes is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
