const randomDice = (start ,end) => {
    let randomNumber1 = Math.floor(Math.random() * end) + start;
    return "images/dice" + randomNumber1.toString() + ".png"
}

let diceValue1 = randomDice(1, 6);
let diceValue2 = randomDice(1, 6);

document.querySelectorAll("img")[0].setAttribute("src", diceValue1);
document.querySelectorAll("img")[1].setAttribute("src", diceValue2);

if ( diceValue1 < diceValue2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
} else if (diceValue1 > diceValue2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
