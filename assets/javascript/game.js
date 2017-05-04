// DECLARING GLOBAL VARIABLES//
var winCount = 0;
var loseCount = 0;

//DECLARING FUNCTIONS//

// Sets random number values and sets score to 0
function reset() {
	randomNumber = Math.floor(Math.random()*100) + 20;
	totalScore = 0;
	greenValue = Math.floor(Math.random() * 12) + 2;
	blueValue = Math.floor(Math.random() * 12) + 2;
	redValue = Math.floor(Math.random() * 12) + 2;
	purpleValue = Math.floor(Math.random() * 12) + 2;
}

// Updates data on screen
function update() {
	$(".total-score").html(totalScore);
	$(".random-number").html(randomNumber);
	$(".wins").html("Wins: " + winCount);
	$(".losses").html("Losses: " + loseCount);
}

// Logic comparing randomNumber to totalScore to determine a win or a loss
function compare(){
	if (totalScore > randomNumber) {
		lose();
	}
	else if (totalScore === randomNumber) {
		win();
	}
}

// Increases wins and resets game
function win() {
	winCount++;
	$(".result").html("You Win!");
	reset();
}

// Increases losses and resets game
function lose() {
	loseCount++;
	$(".result").html("You Lose!");
	reset();
}

// EXECUTE GAME FUNCTIONS WHEN A CRYSTAL IS CLICKED//
reset();
update();

$(".green-crystal").on("click", function() {
	totalScore += greenValue;
	compare();
	update();
});
$(".blue-crystal").on("click", function() {
	totalScore += blueValue;
	compare();
	update();
});
$(".red-crystal").on("click", function() {
	totalScore += redValue;
	compare();
	update();
});
$(".purple-crystal").on("click", function() {
	totalScore += purpleValue;
	compare();
	update();
});