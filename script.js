//selector

const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');
const inputScoreElm = document.querySelector('#inputScore');
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn')
const resetBtnElm = document.querySelector('#resetBtn');
const formElm = document.querySelector('form');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
let turnPlayer = 'p1'
//single responsibility principle

//update winning scroe / playingToScore into DOM

playingToElm.textContent = winningScore

//diable playerbutton base on turn

turnPlayer === 'p1' ? p2BtnElm.setAttribute('disabled', 'disabled') : p1BtnElm.setAttribute('disabled', 'disabled');

function validationInput(score){
    if(score < 1){
        alert('please provide a value more than 0')
    }
}
function resetValues(){
     p1Score = 0;
     p2Score = 0;
     winningScore = 5;
     gameOver = false;
     turnPlayer = 'p1'
     p1BtnElm.removeAttribute('disabled');
     p2BtnElm.removeAttribute('disabled');
     p1ScoreElm.textContent = p1Score;
     p1ScoreElm.textContent = p2Score;
     playingToElm.textContent = winningScore
}

//inputing and updating playing to score

formElm.addEventListener('submit', (e) => {
    e.preventDefault()
    //reset previous state
    resetValues()
    //getting the input
    // console.log(inputScoreElm.value)
    const inputScore = inputScoreElm.value

    //validation check

    // if(inputScore < 1){
    //     alert('please provide a value more than 0')
    // }

    validationInput(inputScore)
    //saving it into data layer
    winningScore = inputScore

    //showing the value on dom

    playingToElm.textContent = inputScore;

    //reset the input

    inputScoreElm.value=''
})

function handleWinningState(){
    if(p1Score === winningScore){
       
        //show message
        alert('player-1 is winner')

    }else if(p2Score === winningScore){
        //show message
        alert('player-2 is winner')
    }
    if(p1Score === winningScore || p2Score === winningScore ){
        gameOver = true
        //disabled player 1 or player 2 Btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        p2BtnElm.setAttribute('disabled', 'disabled');
    }

    
}


p1BtnElm.addEventListener('click', (e) => {
    //increase the count and update DOM

    //increase conditionally

    if(turnPlayer === 'p1' && !gameOver && p1Score < winningScore){
        p1Score++
        //update DOM
        p1ScoreElm.textContent = p1Score
        //change player turn
        turnPlayer ='p2'

        //disable p1 Button
        p1BtnElm.setAttribute('disabled', 'disabled');
        //enable p2 button
        p2BtnElm.removeAttribute('disabled');
    }
    // if(p1Score === winningScore){
    //     gameOver = true

    //     //disabled player 1 or player 2 Btn
    //     p1BtnElm.setAttribute('disabled', 'disabled');
    //     p2BtnElm.setAttribute('disabled', 'disabled');
    //     //show message
    //     alert('player-1 is winner')

    // }

    


})

p2BtnElm.addEventListener('click', (e) => {
    //increase the count and update DOM
    //increase conditionally
    if(turnPlayer === 'p2' && !gameOver && p2Score < winningScore){
        p2Score++
        p2ScoreElm.textContent = p2Score
        turnPlayer = 'p1'
        //disable p1 Button
        p2BtnElm.setAttribute('disabled', 'disabled');
        //enable p2 button
        p1BtnElm.removeAttribute('disabled');
    }
    // if(p2Score === winningScore){
    //     gameOver = true
    //     //disabled player 1 or player 2 Btn
    //     p1BtnElm.setAttribute('disabled', 'disabled');
    //     p2BtnElm.setAttribute('disabled', 'disabled');
    //     //show message
    //     alert('player-2 is winner')
    // }

})

resetBtnElm.addEventListener('click', resetValues)
