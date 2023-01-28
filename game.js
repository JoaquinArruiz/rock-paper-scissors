// querys //
const pointerRoundDesc = document.querySelector('.roundResult')

const pointerComputerChoice = document.querySelector('.computerLastchoice')

const pointerRock = document.querySelector('.rockButton');
const pointerPaper = document.querySelector('.paperButton');
const pointerScissors = document.querySelector('.scissorsButton');

const pointerNum = document.querySelectorAll ('.marker')
const pointerPlayerChoice = document.querySelector('.playerLastchoice')
const pointerPMarker = document.querySelectorAll('.pmarker')
const pointerCMarker = document.querySelectorAll('.cmarker')
const pointerOptions = document.querySelectorAll('.optionsBox')


// global var //
let Options = ["ROCK", "PAPER", "SCISSORS"];


let playerScore = -1;
let computerScore = -1;

let playChoice = ""
let comChoice = ""


//             game logic               //

//Function that generates random number for the getComputerChoice() function
let randomInt = (a) => { // a in case that more options want to be added
    return Math.floor(Math.random() * a); // default use of a = 3, because the computerOptions array is gonna be [0,1,2]
}


//Function that transform the received int into an option of the array (ROCK, PAPER, SCISSORS)
let getComputerChoice = () => { // takes the randomInt function and returns random str of the computerOptions array
    let ComputerChoice = Options[randomInt(3)];

    return ComputerChoice;
}


//Function that transform the option received into an emoji
let emojiComputer = (computerChoice) => {
    if (computerChoice == Options[0]) {
        pointerComputerChoice.innerText = '✊' 
    }
    if (computerChoice == Options[1]) {
        pointerComputerChoice.innerText = '✋' 
    }
    if (computerChoice == Options[2]) {
        pointerComputerChoice.innerText = '✌️' 
    }
}


//Funciton that plays a rounds, checks both options and gives the winner +1 in the score, also changes some of the scoreboard
let playRound = (playerChoice,computerChoice) => {
    if (playerScore != 4 && computerScore != 4) {
        if  (
            (playerChoice == Options[0] && computerChoice == Options[2]) || 
            (playerChoice == Options[1] && computerChoice == Options[0]) || 
            (playerChoice == Options[2] && computerChoice == Options[1])
            ) 
            {   
                
                playerScore = playerScore + 1
                console.log ("comp:", computerScore)
                console.log ("play:", playerScore)
                if (playerScore != -1) {
                    pointerPMarker[playerScore].innerText = '✅'
                    pointerRoundDesc.innerText = 'PLAYER WINS THE ROUND'
                }
            }

        if ((computerChoice  == Options[0] && playerChoice == Options[2]) || 
            (computerChoice == Options[1] && playerChoice == Options[0]) || 
            (computerChoice == Options[2] && playerChoice == Options[1])) 
            {   
                
                computerScore = computerScore +1
                console.log ("comp:", computerScore)
                console.log ("play:", playerScore)
                if (computerScore != -1) {
                    pointerCMarker[computerScore].innerText = '✅'
                    pointerRoundDesc.innerText = 'COMPUTER WINS THE ROUND'
                }      
            }

        if (computerChoice == playerChoice) 
            {   
                console.log ("comp:", computerScore)
                console.log ("play:", playerScore)
                pointerRoundDesc.innerText = "IT'S A TIE"
            }
    }
}

//Function that sets all the game configs to 0, so you dont have to reload the page to play again// NOT WORKING, STILL WIP
let resetAll = () => { 
    pointerComputerChoice.innerText = '❔' 
    pointerPlayerChoice.innerText = '❔'
    playerScore = -1
    computerScore = -1
    playChoice = ""
    comChoice = ""
    
    for (let i = 0; i<5; i++ ){
        pointerCMarker[i].innerText = '➖'
        pointerPMarker[i].innerText = '➖'
        }
    document.body.style.backgroundColor = "black"

    pointerRock.innerText='✊'
    pointerPaper.innerText='✋'
    pointerScissors.innerText='✌️'
    pointerRoundDesc.innerText = 'PRESS ANY BUTTON TO START'
    
}


//Function that returns the winner of the game, checking which one reached a score of 5
let checkGameWinner = (playerScore, computerScore) => {


    if (playerScore == 4 || computerScore == 4){
        if (playerScore >= 4) {
            pointerRoundDesc.innerText = 'PLAYER WINS THE GAME'
        }
        if (computerScore >= 4) {
            pointerRoundDesc.innerText = 'COMPUTER WINS THE GAME'
        }
        pointerRock.innerText='🔁'
        pointerPaper.innerText='🔁'
        pointerScissors.innerText='🔁'
        pointerRock.addEventListener('click', () => {
            location.reload()
            resetAll()
            Game()
        })
        pointerPaper.addEventListener('click', () => {
            location.reload()
            resetAll()
            Game()
        })
        pointerScissors.addEventListener('click', () => {
            location.reload()
            resetAll()
            Game()
        })
    }
}


//Function that executes all the other functions, to play the game
let playGame = (playerChoice) => {
    comChoice = getComputerChoice();
    playRound(playerChoice,comChoice);
    emojiComputer(comChoice)
    checkGameWinner(playerScore, computerScore)
}

let removeEventListener = () => {
    pointerRock.removeEventListener('click', Game())
    pointerPaper.removeEventListener('click', Game())
    pointerScissors.removeEventListener('click', Game())
    pointerRock.removeEventListener('click', resetAll())
    pointerPaper.removeEventListener('click', resetAll())
    pointerScissors.removeEventListener('click', resetAll())
}

let Game = () => {
    pointerRock.addEventListener('click', () => {
        pointerPlayerChoice.innerText='✊';
        playChoice = Options[0]
        playGame(playChoice)
    })
    
    pointerPaper.addEventListener('click', () => {
        pointerPlayerChoice.innerText='✋';
        playChoice = Options[1]
        playGame(playChoice)
    })
    
    pointerScissors.addEventListener('click', () => {
        pointerPlayerChoice.innerText='✌️';
        playChoice = Options[2]
        playGame(playChoice)
    })
}



Game()




