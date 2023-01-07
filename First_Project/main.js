// Start Header

let header = document.createElement("header");
let nav = document.createElement("nav");
let logo = document.createElement("h2");
let links = document.createElement("ul");
let Items = document.createElement("li");

document.body.appendChild(header);
header.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(links);
for (let i = 1; i <= 3; i++) {
  let Li = links.appendChild(Items).cloneNode();
  links.appendChild(Li);
}
let liOne = document.querySelector("ul li:nth-child(1)");
let liTwo = document.querySelector("ul li:nth-child(2)");
let liThree = document.querySelector("ul li:nth-child(3)");
let liFour = document.querySelector("ul li:nth-child(4)");

logo.innerHTML = "Elzero";
liOne.innerHTML = "Home";
liTwo.innerHTML = "About";
liThree.innerHTML = "Service";
liFour.innerHTML = "Contact";

document.body.style.cssText =
  "margin:0;padding:0;box-sizing:border-box;font-family:sans-serif;";

logo.style.cssText = "Font-size:24px; margin:0;color:#2196f3;";

nav.style.cssText =
  "Padding:20px;display:flex; justify-content:space-between; align-items:center";

links.style.cssText =
  "list-style:none;display:flex;gap:20px;color:#777;font-weight:600";

links.style.margin = "0";

// End Header
// Start Content

let main = document.createElement("main");
let product = document.createElement("div");
let span = document.createElement("span");
let productName = document.createElement("h4");

document.body.appendChild(main);
product.appendChild(span);
product.appendChild(productName);

for (let i = 1; i <= 15; i++) {
  span.innerHTML = `${i}`;
  productName.innerHTML = "Product";
  let cloneProduct = product.cloneNode(true);
  main.appendChild(cloneProduct);
  cloneProduct.className = "Product";
  document.querySelector(`main div:nth-child(${i})`).style.cssText =
    "background-color:#fff; padding:35px 15px 15px 15px;text-align:center; width:calc((100% / 3) - 45px); border-radius:8px;";
  document.querySelector(`main div:nth-child(${i}) span`).style.cssText =
    "font-size:45px;font-weight:bold;";
  document.querySelector(`main div:nth-child(${i}) h4`).style.cssText =
    "color:#777;font-weight:400";
}

main.style.cssText =
  "display:flex;background-color:#ddd;padding:20px; flex-flow:row wrap; gap:20px 20px;";

// End Content

// Start Footer

let footer = document.createElement("footer");
let footerCont = document.createElement("h1");

document.body.appendChild(footer);
footer.appendChild(footerCont);

footerCont.innerHTML = "Copyright 2021";

footerCont.style.cssText =
  "Padding:25px;background-color:#2196f3;margin:0;color:#fff;text-align:center;";
// End Footer
