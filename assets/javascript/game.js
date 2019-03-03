$(document).ready(function() {

	// Arrays
	// random computer variable array
	var rand = [];

	for (var r = 19; r < 121; r++) {
		rand.push(r);
	}

	// crystal array
	var crystals = [];

	for (var c = 2; c < 13; c++) {

		crystals.push(c);
	}
	// console.log(crystals);

	// Variables 
	// random variables selected by computer
	var randNumber; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;


    
// Fuctions
	// function to pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	// function to pick random numbers for the crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // 
		console.log("crystal numbers: " + crystalNumbers);

	} //End of crystal number function

// use an array to change value of each crystal button 

	function crystalValues(arr) {
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // end crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // End of reset

	// Game start..

	pickRandomNumber(rand); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// button functions for crystals..

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// if user wins, score increases
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("Winner, winner, chicken dinner!")}, 200);
		}
        // if losses a round
		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("Ooops, you lose! Try again.")}, 200);
		}
	});

}); 