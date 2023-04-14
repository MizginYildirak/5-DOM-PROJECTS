let increase = document.getElementById("btn-increase");
let reset = document.getElementById("btn-reset");
let decrease = document.getElementById("btn-decrease");
let output = document.querySelector("#output");

function handleColorChange(counter) {
  if (counter > 0) {
    output.style.color = "green";
  } else if (counter < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
}

increase.addEventListener("click", function () {
  let result = Number(output.innerText) + 1;

  output.innerText = result;
  handleColorChange(result);
});

decrease.addEventListener("click", function () {
  let result = Number(output.innerText) - 1;

  output.innerText = result;
  handleColorChange(result);
});

reset.addEventListener("click", function () {
  output.innerText = 0;
  handleColorChange(0);
});
