const playerButton = document.querySelector('#playerButton')
const resetButton = document.querySelector('#reset')
const computerDisplay = document.querySelector("#computerDisplay")
const playerDisplay = document.querySelector("#playerDisplay")
const winningScoreSelect = document.querySelector("#dropdown")


let playerScore = 0
let computerScore = 0
let winningScore = 3
let isGameOver = false

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
})

playerButton.addEventListener('click', function(){
    if(!isGameOver){
        playerScore = playerScore + Math.round(Math.random())
        computerScore = computerScore + Math.round(Math.random())
        if((playerScore === winningScore) || (computerScore === winningScore)){
            if(playerScore === computerScore){
                isGameOver = false
                winningScore += 2
            }else if(playerScore > computerScore){
                isGameOver = true
                playerDisplay.classList.add('winner')
                computerDisplay.classList.add('loser')
            }else if(playerScore < computerScore){
                isGameOver = true
                computerDisplay.classList.add('winner')
                playerDisplay.classList.add('loser')
            }
        }
        playerDisplay.innerHTML = playerScore
        computerDisplay.innerHTML = computerScore
    }
})
resetButton.addEventListener('click', function(){
    isGameOver = false
    playerScore = 0
    computerScore = 0
    playerDisplay.textContent = 0
    computerDisplay.textContent = 0
    playerDisplay.classList.remove('winner', 'loser')
    computerDisplay.classList.remove('winner', 'loser')
})