var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomColorButton")

function currentColor (){
	css.textContent = body.style.background
}

function defaultColor (){
	css.innerHTML=`${color1.value} and ${color2.value}`
}

function changeBackground (){
	body.style.background="linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+")";
	currentColor()
}

function getRandomColor() {
  body.style.background="linear-gradient(to right, "
  +'#' + Math.floor(Math.random()*16777215).toString(16) 
  +", "
  +'#' + Math.floor(Math.random()*16777215).toString(16) 
  +")";
  currentColor()
}

color1.addEventListener("input", changeBackground)
color2.addEventListener("input", changeBackground)
randomButton.addEventListener("click", getRandomColor)

defaultColor()