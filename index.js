const inputEl = document.getElementById("inputRadius");
const buttonEl = document.getElementById("submitBtn");
const PI = 3.14;
let radius;
let circumference;

function roundUpTo2Decimals(num) {
  return Math.ceil(num * 100) / 100;
}


buttonEl.onclick = () => {
    radius = inputEl.value;
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("circumference").textContent = roundUpTo2Decimals(circumference);
}
