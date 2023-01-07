let numbers = document.querySelector("[name= 'elements']");
let form = document.forms;
let theText = document.querySelector("[name= 'texts']");
let theSelector = document.querySelector("[name= 'type']");
let results = document.getElementsByClassName("results")[0];

form[0].onsubmit = function (el) {
  el.preventDefault();
  document.querySelectorAll(".box").forEach((el) => el.remove());

  for (let i = 1; i <= numbers.value; i++) {
    let myBox = document.createElement(theSelector.value);
    let boxText = document.createTextNode(theText.value);
    myBox.className = "box";
    myBox.title = "Element";
    myBox.id = `id-${i}`;

    myBox.appendChild(boxText);
    results.appendChild(myBox);
  }
};
