let Options = ["rock", "paper", "scissors"];
let playerOption;

let playerScore = 0;
let computerScore = 0;



let randomInt = (a) => { // a in case that more options want to be added
    return Math.floor(Math.random() * a); // default use of a = 3, because the computerOptions array is gonna be [0,1,2]
}



let getComputerChoice = () => { // takes the randomInt function and returns random str of the computerOptions array
    let ComputerChoice = Options[randomInt(3)]; 
    return ComputerChoice;
}



let  getPlayerChoice = (a) => {
    let PlayerChoice = Options[a];
    console.log(PlayerChoice);
    return PlayerChoice;    
}


let playRound = (a,b) => {

    if (((a == "rock") && (b == "scissors")) || ((a=="paper") && (b=="rock")) || ((a=="scissors") && (b=="paper"))) {
        playerScore = playerScore + 1
    }
    else {

        if (((b == "rock") && (a == "scissors")) || ((b=="paper") && (a=="rock")) || ((b=="scissors") && (a=="paper"))) {
            computerScore = computerScore + 1
            return computerScore    
        }
    }
}

let playGame = () => {
    for (i = 0; i < 5; i++) {
        getComputerChoice()
        playRound(PlayerChoice, ComputerChoice)
    }
}