// Detecting button press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // gaseste primul buton si adauga un eveniment acestuia pt ca listens = "click" sa se intample 
    // si cand se intampla sa ruleze functia;

    let buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);
    });
}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {
   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key);
        }
    }

    function buttonAnimation(currentKey) {
        let actieButton = document.querySelector("." + currentKey);
        actieButton.classList.add("pressed");
        //Asa adaug o clasa noua

        setTimeout(function() {
            actieButton.classList.remove("pressed");
        }, 100);
    }

// mySound = new Audio([urlString]);
//mySound.play();


// function Audio(fileLocation) {
//     this.fileLocation = fileLocation;
//     this.play = function() {

//     }
// }
