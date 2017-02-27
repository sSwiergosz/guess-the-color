var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

easyButton.addEventListener("click", function() {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		//there are only 3 colors in array
		//if color exists
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		//hide three bottom squares
		else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add clickListeners to squares
	squares[i].addEventListener("click", function() {
		//get color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			//change colors of every square and main header
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play again";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	//pick one color as a result
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//generate array of random colors for the game
	var arr = [];
	for(var i = 0; i < num; i++) {
		//add to array one random rgb color
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//generate random rgb colors
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}