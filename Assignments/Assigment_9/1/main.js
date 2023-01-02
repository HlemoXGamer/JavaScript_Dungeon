function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}.,`;
  }
  namePattern();
  function ageWithMessage() {
    return `Your Age is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  countryTwoLetters();
  function fullDetails() {
    return `${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
