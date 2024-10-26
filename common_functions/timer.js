// This file require basic.js to use the Pad function !!!

// --------------------------------------------------//
//                                                   //
//             VARIABLE INITIALIZATION               //
//                                                   //
// --------------------------------------------------//


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var intervalId;

// --------------------------------------------------//
//                                                   //
//                  TO START THE TIMER               //
//                                                   //
// --------------------------------------------------//


startTimer();


// --------------------------------------------------//
//                                                   //
//              THE FUNCTION OF THE TIMER            //
//                                                   //
// --------------------------------------------------//

function startTimer() {
    // Update the timer display every second
    intervalId = setInterval(() => {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }, 1000); // run the function every second (1000 milliseconds)
}

function stopTimer() {
    clearInterval(intervalId);
}


function resetTimer(){
    secondsLabel.innerHTML = pad(0);
    minutesLabel.innerHTML = pad(0);
    totalSeconds = 0;
}

