let playing = false;
let score;
let action;
let timeRemaining;
let correctAnswer; 

// if we click o the start/reset button
document.getElementById("startReset").onclick = 
function() {
    // if we are playing
    if(playing === true) {
        // reload page
        location.reload(); 
    // if we are not playing
    } else {
        playing = true;
        // set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        // show countdown box
        show("timeRemaining");
        timeRemaining = 60;
        document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
        // hide the game Over box;
        hide("gameOver");
        // change button to reset
        document.getElementById("startReset").innerHTML = "Reset Game";
        // start countdown
        startCountdown();

         // generate new Q&A
         generateQA();
    }
}
 
// if we click on answer box
for(i = 1; i < 5 ; i++) {
    document.getElementById("box" + i).onclick = 
    function() {
        //  if we are playing
        if(playing == true) {
            if(this.innerHTML == correctAnswer) {
                    // correct?
                        // yes
                    // increase score
                score ++;
                document.getElementById("scoreValue").innerHTML = score;
                // show correct and hide box for 1 sec
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
            // generate new Q&A
            generateQA();
            
            } else{
                // wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

  // function start counter
function startCountdown() {
    action = setInterval(function(){
        // reduce time by 1 sec in loops
        timeRemaining -= 1;
        document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
          // timeleft?
                // yes => continue
                // no => gameover

        if(timeRemaining === 0) {
            stopCountdound();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = `<p>Game Over!</p><p>Your score is ${score}.</p>`;
            hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startReset").innerHTML = "Start Game";
        }
    }, 1000);
}

// function counter
function stopCountdound() {
    clearInterval(action);
}

// hide element
function hide(id) {
    document.getElementById(id).style.display = "none";
}
      
// show element
function show(id) {
    document.getElementById(id).style.display = "block";
}
    
// generate multiple questions and answers

function generateQA() {
    const x = (Math.round(Math.random() * 9)) + 1;
    const y = (Math.round(Math.random() * 9)) + 1;
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + " x " + y;
    const correctPosition = (Math.round(Math.random() * 3)) + 1;
    // fill one box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; 

    // fill the other box with the wrong answers

    let answers = [correctAnswer];
    for(let i = 1; i < 5; i++) {
        if(i !== correctPosition) {
            // wrong answer
            let wrongAnswer;
            do{
                wrongAnswer = ((Math.round(Math.random() * 9)) + 1) * ((Math.round(Math.random() * 9)) + 1);
            } while(answers.indexOf(wrongAnswer) > -1) {
                
            }
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}


