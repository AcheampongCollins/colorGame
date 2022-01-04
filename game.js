
var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares = 3;
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6 ;
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    
})


resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColor(numOfSquares);
  // pick a new random colors
  pickedColor = pickColor();
  //change colors of squares 
  colorDisplay.textContent = pickedColor;
  for ( var i = 0; i < squares.length; i++){
     // add initial colors to squares
 squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue"
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;
for ( var i = 0; i < squares.length; i++){
    // add initial colors to squares
squares[i].style.backgroundColor = colors[i];

// add click listener to squares
squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if( clickedColor === pickedColor){
        messageDisplay.textContent = " Correct!";
        resetButton.textContent = " Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
    }
});
}
 
function changeColors(color){
    // loop through all squares
    for (var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor =color;
    }
}

function pickColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
};

function generateRandomColor(num){
    // make an array
    var arr = [];
    //repeat num times 
    for (var i = 0; i < num; i++){
        // get random colors and push into arr
    arr.push(randomColor());
    };
// return that array
return arr;
};

// generate random number function 
function getRndInterger(max,min){
    return Math.floor(Math.random()*(max-min) + 1)+min;
};

function randomColor(){
    var r = getRndInterger(0 , 255);
    var g = getRndInterger(0 , 255);
    var b = getRndInterger(0 , 255);
   return "rgb(" + r +", " + g + ", " + b + ")";
};
