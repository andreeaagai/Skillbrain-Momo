const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () { 
        nextSequence();
      }, 1000); 
    }
  } else {
    console.log("wrong");
    playSound("wrong"); 

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function nextSequence() {

  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  let randomChoseColour = buttonColours[randomNumber];
  gamePattern.push(randomChoseColour);

  $("#" + randomChoseColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100); 

  playSound(randomChoseColour);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


// for (let i = 0; i < document.querySelectorAll("#" + randomChoseColour).length; i++) {
//   document.querySelectorAll("#" + randomChoseColour)[i].addEventListener("click", function () {
//       let audio = new Audio("sounds/" + randomChoseColour + ".mp3");
//       audio.play();
//     });
// }