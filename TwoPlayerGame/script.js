var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p = document.getElementById("finalScore");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var targetInput = document.getElementById("target");

var p1Score = 0;
var p2Score = 0;
var endGame = false;
var finalDisplay = 5;

targetInput.addEventListener("change", function(){
	finalDisplay = targetInput.value;
	p.textContent = targetInput.value;
	reset();
});

p1.addEventListener("click", function(){
	if (!endGame){
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score == finalDisplay) {
			endGame = true;
			p1Display.classList.add("winner");
		}
	}
	
});

p2.addEventListener("click", function(){
	if (!endGame) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score == finalDisplay) {
			endGame = true;
			p2Display.classList.add("winner");
		}
	}
	
});



reset.addEventListener("click", function(){
	Allreset();
});

function Allreset(){
	endGame = false;
	
	p1Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");

	p2Score = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
}

