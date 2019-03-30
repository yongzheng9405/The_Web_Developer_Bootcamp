var colors =[];
var numoOfColor = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	
	setupModeBtns();
	setupSquares();
	
	reset();
}


function setupModeBtns() {
	//modebuttons
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy") {
				numoOfColor = 3;

			} else {
				numoOfColor = 6;
			}
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//add click listener
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct !";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again ?"

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again !"
			}
		});

	}
}

function reset() {
	resetButton.textContent = "New Game !"
	colors = generateRandomColors(numoOfColor);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	
	messageDisplay.textContent = "";
}


resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color
		arr[i] = randomColor();
	}
	//return the array
	return arr;
}

function randomColor(){
	//make a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);

	//make a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//make a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}