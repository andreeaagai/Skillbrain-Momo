const randomDice = (start ,end) => {
    let randomNumber1 = Math.floor(Math.random() * (end - start) + start);
    return "images/dice" + randomNumber1.toString() + ".png"
}

let dice1 = randomDice(1, 7);
let dice2 = randomDice(1, 7);

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if ( dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else if (dice1 === dice2) {
    document.querySelector("h1").innerHTML = "Draw!";
}

const speak = (win) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: win,
        hl: 'en-us',
        v: 'Mike',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
};


const winner = () => {
    let win = "";

    if (dice1 < dice2) {
        win = "Player 2 Wins!";
    } else if (dice1 > dice2) {
        win = "Player 1 Wins!";
    } else if (dice1 === dice2) {
        win = "It`s a Draw!";
    }
}


const functionWhenDOMLoaded = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const el = document.getElementsByClassName('title');
        if (el.length > 0) {
            speak(winner());
        }
    });
};

functionWhenDOMLoaded();