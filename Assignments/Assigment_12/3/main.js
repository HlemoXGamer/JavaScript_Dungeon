let input = document.querySelector("[name = dollar]");
let result = document.getElementsByClassName("result")[0];

input.oninput = function () {
  result.innerHTML = `{${input.value}} USD Dollar = {${(
    input.value * 24.752
  ).toFixed(2)}} Egyptian Pound`;
};
