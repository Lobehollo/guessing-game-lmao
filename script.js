"use strict";

let secretNumber = Math.trunc (Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector(".message").textContent = "No Number Provided";
    }
    else if(guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number!!!"
        document.querySelector(".highscore").textContent = score;
        document.querySelector("body").style.backgroundColor = '#16E60B'
        document.querySelector(".number").style.backgroundColor = '#ffffff'
        document.querySelector('.number').textContent = secretNumber;

    }
    else if(guess > secretNumber){
        if(score > 1) {
            document.querySelector(".message").textContent = "Too HIGH Bro !!"
            score = score - 1;
            document.querySelector(".score").textContent = score;
            document.querySelector(".number").style.backgroundColor = '#ff0000'
        }
        else{
            document.querySelector(".message").textContent = "You lost the game"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = '#ff0000'
            document.querySelector('.number').textContent = secretNumber;
        }
       
    }
    else if(guess < secretNumber){
        if(score > 1) {
            document.querySelector(".message").textContent = "Too LOW Bro !!"
            score = score - 1;
            document.querySelector(".score").textContent = score;
            document.querySelector(".number").style.backgroundColor = '#ff0000'
        }
        else{
            document.querySelector(".message").textContent = "You lost the game"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = '#ff0000'
            document.querySelector('.number').textContent = secretNumber;
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = '';
    document.querySelector(".number").style.backgroundColor = '#ffffff'
    document.querySelector("body").style.backgroundColor = '#222'

})