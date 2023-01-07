let elOne = document.getElementsByClassName("one")[0];
let elTwo = document.getElementsByClassName("two")[0];

elOne.title = elOne.className;
elTwo.title = elTwo.className;
elOne.textContent = elTwo.textContent;
elTwo.textContent = `${elTwo.title
  .slice(0, 1)
  .toUpperCase()}${elTwo.title.slice(1, 3)} ${elTwo.attributes.length}`;
