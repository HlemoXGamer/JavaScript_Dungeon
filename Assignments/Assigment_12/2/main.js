for (let i = 0; i < 10; i++) {
  let myDiv = document.createElement("div");
  let myImg = document.createElement("img");
  document.body.appendChild(myDiv);
  myDiv.appendChild(myImg);
  myImg.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImg.setAttribute("alt", "Elzero Logo");
  myImg.setAttribute("decoding", "async");
}
