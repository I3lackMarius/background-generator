var _ = require("lodash");
// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("answer:", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function randomize() {
  color1.value = randomColor();
  color2.value = randomColor();

  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomize);
