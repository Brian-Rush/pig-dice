// Business logic

//Player Object Constructor

function Player(name) {
  this.name = name;
  this.turnRunningScore = 0;
  this.totalBankedScore;
  this.lastRoll;
  this.currentTurnArray = [];
}

//Creates our two players
var playerOne = new Player("Player One");
var playerTwo = new Player("Player Two");
console.log(playerOne, playerTwo);

// Dice Constructor (argument = number of sides you want. default = 6)

function Dice(sides) {
  this.sides = sides || 6;
}

// Roll Prototype - Gets a random number between 1 and 6
Dice.prototype.roll = function() {
  var roll = Math.floor((Math.random() * this.sides ) + 1);
  if (roll === 1) {
    alert("hey");
  }
  return roll;
}

// Current Turn Array Prototype
Player.prototype.addRollToArray = function (x) {
  this.currentTurnArray.push(x)
}

// Get sum of Turn Running Total
Player.prototype.sumOfRolls = function() {
  console.log(this.currentTurnArray);
  for (var i = 0; i < this.currentTurnArray.length; i++) {
    this.turnRunningScore += this.currentTurnArray[i = this.currentTurnArray.length - 1];
    console.log(this.turnRunningScore);
  }
}
console.log(playerOne.turnRunningScore);

// Create six-sided dice
var sixSidedDice = new Dice();

// console.log(sixSidedDice.roll());

// Front end logic

$(function() {
  $("#player-one-roll").click(function(event) {
    event.preventDefault();
    var sixSidedDiceRoll = sixSidedDice.roll();

    playerOne.addRollToArray(sixSidedDiceRoll);
    playerOne.sumOfRolls();

    $("#player-one-running").html("<h1 class='running-total'>" + playerOne.turnRunningScore + "</h1>");
    console.log(sixSidedDiceRoll);


  });
});
