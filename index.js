// rock paper scissors
let showPlayer = document.getElementById("showPlayer")
let showComputer = document.getElementById("showComputer")
let displayResult = document.getElementById("displayResult")
let gameArrey = ['rock', 'paper', 'scissors']
let result;
let playerScore = 0;
let computerScore = 0;

function playGame(name) {

    let playerIndex = gameArrey.findIndex(index => {
        return index == name;
    })

    let playerChoice = gameArrey[playerIndex];

    let ComputerIndex = Math.floor(Math.random() * gameArrey.length)

    let computerChoice = gameArrey[ComputerIndex];
    
    console.log(playerChoice, computerChoice);

    if (playerChoice === computerChoice) {
        result = "IT`S TIE!";
    }
    else {
        switch (playerChoice) {
            case "paper":
                result = computerChoice == "rock" ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "rock":
                result = computerChoice == "scissors" ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = computerChoice == "paper" ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }
    showPlayer.textContent = `Player : ${playerChoice}`;
    showComputer.textContent = `Copmputer : ${computerChoice}`;

    switch (result) {
        case "YOU WIN!":
            displayResult.classList.remove("green", "red")
            displayResult.classList.add("green")
            displayResult.textContent = result;
            playerScore++;
            break;
        case "YOU LOSE!":
            displayResult.classList.remove("green", "red")
            displayResult.classList.add("red")
            displayResult.textContent = result;
            computerScore++;
            break;
        case "IT`S TIE!":
            displayResult.classList.remove("green", "red")
            displayResult.textContent = result;
            break;
    }
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}