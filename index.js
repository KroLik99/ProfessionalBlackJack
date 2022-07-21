
let cards = [];
let sum = 0;
let sumEl = document.querySelector("#sum-el");

let win = false;
let isAlive = false;
let msg = "";
let messageEl= document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");

let player={
    name: "Tie",
    chips: 1000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+player.chips;

if (win && isAlive){
    console.log("Winning cash is on your bank account!");
}else if (!win && isAlive){
    console.log("Not quite there yet.");
}else{
    console.log("You lost.");
}
function startGame(){
    isAlive = true;
    let num1 = getRandomCard();
    let num2 = getRandomCard();
    cards.push(num1, num2);
    console.log(cards)
    sum = num1 + num2;
    renderGame();
}

function renderGame(){
    /* Write the conditional according to these rules:
    - if less than or equal to 20 -> "Do you want to draw a new card?"
    - else if exactly 21 -> "Woohoo! You got blackjack!"
    - else -> "You're out of the game."
     */
    sumEl.textContent = "Sum: "+ sum;
    cardsEl.textContent = "Cards: ";
    /*
    Create a for-loop that renders out all the cards instead of just two.
     */
    for(let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i]+" ";
    }

    if (sum<=20){
        msg = "Do you want to draw a new card?";
    }else if (sum ===21){
        msg = "You got blackjack!";
        win = true;
    } else{
        msg = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = " " + msg;
}

//Create a function that always returns the number 5
function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1;
    if(randomNum>10){
        return 10;
    } else if (randomNum===1){
        return 11
    }else{
        return randomNum;
    }
}

function newCard(){
    if(isAlive && !win){
        console.log("New card");
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        cardsEl.textContent += cards;
        console.log(cards);
        renderGame();
    } else if(isAlive && win){
        cardsEl.textContent = "Congratulations!"
    }
    else{
        cardsEl.textContent = "You lost";
    }
}


/* cmd+d or ctrl+d and click the multiple words like return and you can edit the return keywords on multiple lines*/
let raceTime1 = [100,103,104,106];
function totalRaceTime(){
    let tRT = 0;
    for(let i = 0; i<raceTime1.length; i++){
        let totalRT = raceTime1[i];
        tRT +=totalRT;
    }
    return tRT
}

let castles = {
    occupied: false,
    name: "Count Dracula's Castle",
    rooms: 13,
    victims: ["Jessica", "Patrick", "Thomas", "Heidi", "Bram"]
}
console.log(castles.name);
console.log(castles.rooms);