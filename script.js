var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["rock", "paper", "scissors"];

function playGame() {
    var userChoice = prompt('Pick rock, paper, or scissors...');

    if(!userChoice) {
        return;
    };

    userChoice = userChoice.toLowerCase();

    var index = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[index];

    alert("The computer picked " + computerChoice);

    if(userChoice === computerChoice) {
        ties++;
        alert("You tied!");
    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        alert("You won!");
    } else {
        losses++;
        alert("You lost!");
    }

    alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var playAgain = confirm("Do you want to play again?");

    if(playAgain) {
        playGame();
    }
}

playGame();