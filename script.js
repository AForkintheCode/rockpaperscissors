//scoreboard
var wins = 0;
var ties = 0;
var losses = 0

options = ["R", "P", "S"]

//initiate start-up
var start = confirm("Would you like to play a game?")
    if(start){        
        window.alert("Get ready to throw down!")
        playGame()
    }
    else{
        window.alert("Thank you come again.")
    }

//the game part
function playGame(){
            playerChoice = window.prompt("Rock (R), paper (P), or scissors(S)?")
            playerChoice = playerChoice.toUpperCase()
            var compChoice = options[Math.floor(Math.random()*options.length)]
            if (playerChoice === compChoice){
                console.log("It's a tie!")
                ties++
            }
            else if (playerChoice == "R" && compChoice == "S" || playerChoice == "P" && compChoice == "R" || playerChoice == "S" && compChoice == "P"){
                console.log("It's a win!")
                wins++
            }
            else {
                console.log("Computer wins!")
                losses++
            }

            window.alert("Computer chose " + compChoice)
            window.alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)
            let playAgain = confirm("Would you like to play again?")
            if (playAgain === true) {
                playGame()
                }
            else {
                window.alert("Thanks for playing!")
            } 
            return;
        }

