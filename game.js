let randomInt = (a) => { // a in case that more options want to be added
    return Math.floor(Math.random() * a); // default use of a = 3, because the computerOptions array is gonna be [0,1,2]
}


let getComputerChoice = () => { // takes the randomInt function and returns random str of the computerOptions array
    let ComputerChoice = Options[randomInt(3)];

    return ComputerChoice;
}


let playRound = (playerChoice,computerChoice) => {
    
    if  (
        (playerChoice == Options[0] && computerChoice == Options[2]) || 
        (playerChoice == Options[1] && computerChoice == Options[0]) || 
        (playerChoice == Options[2] && computerChoice == Options[1])
        ) 
        {           
            playerScore++
            pointerPMarker[playerScore].innerText = '✅'
            pointerRoundDesc.innerText = 'PLAYER WINS THE ROUND'
        }

    if ((computerChoice  == Options[0] && playerChoice == Options[2]) || 
        (computerChoice == Options[1] && playerChoice == Options[0]) || 
        (computerChoice == Options[2] && playerChoice == Options[1])) 
        {
            computerScore++
            pointerCMarker[computerScore].innerText = '✅'
            pointerRoundDesc.innerText = 'COMPUTER WINS THE ROUND'
        }

    if (computerChoice == playerChoice) 
        {
            pointerRoundDesc.innerText = "IT'S A TIE"
        }
}

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
// var //
let Options = ["ROCK", "PAPER", "SCISSORS"];
let playerOption;

let playerScore = -1;
let computerScore = -1;

let playChoice
let comChoice = ""
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

pointerRock.addEventListener('click', () => {
    if (playerScore < 4 || computerScore < 4) {
        playChoice = Options[0];
        comChoice = getComputerChoice();
        playRound (playChoice, comChoice);
        emojiComputer(comChoice)
        pointerPlayerChoice.innerText = '✊'       
        
    }
    if (playerScore == 4 || computerScore == 4) {
        pointerScissors.innerText = '🔁'
        pointerRock.innerText = '🔁'
        pointerPaper.innerText = '🔁'
        pointerRock.addEventListener ('click', () => {
            location.reload() 
        })
        pointerPaper.addEventListener ('click', () => {
            location.reload() 
        })
        pointerScissors.addEventListener ('click', () => {
            location.reload() 
        })
    }
})

pointerPaper.addEventListener('click', () => {
    if (playerScore < 4 || computerScore < 4) {
        playChoice = Options[1];
        comChoice = getComputerChoice();
        playRound (playChoice, comChoice);
        emojiComputer(comChoice)
        pointerPlayerChoice.innerText = '✋'
    }
    if (playerScore == 4 || computerScore == 4) {
        pointerScissors.innerText = '🔁'
        pointerRock.innerText = '🔁'
        pointerPaper.innerText = '🔁'
        pointerRock.addEventListener ('click', () => {
            location.reload() 
        })
        pointerPaper.addEventListener ('click', () => {
            location.reload() 
        })
        pointerScissors.addEventListener ('click', () => {
            location.reload() 
        })
    }
})

pointerScissors.addEventListener('click', () => {
    if (playerScore < 4 || computerScore < 4) {
        playChoice = Options[2];
        comChoice = getComputerChoice();
        playRound (playChoice, comChoice);
        emojiComputer(comChoice)
        pointerPlayerChoice.innerText = '✌️'
    }
    if (playerScore == 4 || computerScore == 4) {
        pointerScissors.innerText = '🔁'
        pointerRock.innerText = '🔁'
        pointerPaper.innerText = '🔁'
        pointerRock.addEventListener ('click', () => {
            location.reload() 
        })
        pointerPaper.addEventListener ('click', () => {
            location.reload() 
        })
        pointerScissors.addEventListener ('click', () => {
            location.reload() 
        })
    }
})