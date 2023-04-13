let increase = document.getElementById('btn-increase');
let reset = document.getElementById('btn-reset');
let decrease = document.getElementById('btn-decrease');
let output = document.querySelector("#output");

increase.addEventListener("click", function() {
    let result = Number(output.innerText) + 1;

    output.innerText = result;
}) 


decrease.addEventListener("click", function() {
    let result = Number(output.innerText) - 1;

    output.innerText = result;
}) 


reset.addEventListener("click", function() {
    output.innerText = 0;
})