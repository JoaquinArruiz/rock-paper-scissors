let computerOptions = ["rock", "paper", "scissors"];
let playerOption;

let playerScore = 0
let computerScore = 0

let randomInt = (a) => { // a in case that more options want to be added
    return Math.floor(Math.random() * a) // default use of a = 3, because the computerOptions array is gonna be [0,1,2]
}

let getComputerChoice = () => { // takes the randomInt function and returns random str of the computerOptions array
    let ComputerChoice = computerOptions[randomInt(3)]; 
    return ComputerChoice;
}

playerOption = prompt("Input your option")

