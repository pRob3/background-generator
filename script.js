var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

// console.log(css);
// console.log(color1);
// console.log(color2);
// var bg =  window.getComputedStyle(body);
// console.log(randomBtn);


function setGradient(){
    body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";

    css.textContent = body.style.background + ";";
}

// Set the color onload
setGradient();

// Color input listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random button listener
randomBtn.addEventListener("click", randomGradient);

// Random color Generator
function randomColor(){
    var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}

// Random change the color input values
function randomGradient(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}