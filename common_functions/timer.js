// This file require basic.js to use the Pad function !!!

// --------------------------------------------------//
//                                                   //
//            DATABASE TIMESTAMP MANAGEMENT          //
//                                                   //
// --------------------------------------------------//


var startingTime = performance.now();

function diffEnCentiemes(t1, t2) {
    return Math.round((t2 - t1) / 10); // 10 ms = 1 centième
}

// --------------------------------------------------//
//                                                   //
//             VARIABLE INITIALIZATION               //
//                                                   //
// --------------------------------------------------//


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var totalCentiSeconds = Infinity;
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
    startingTime = performance.now();
    // Update the timer display every second
    intervalId = setInterval(() => {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }, 1000); // run the function every 1000 milliseconds (1 seconds)
}


function stopTimer() {
    clearInterval(intervalId);
}


function resetTimer(){
    secondsLabel.innerHTML = pad(0);
    minutesLabel.innerHTML = pad(0);
    totalSeconds = 0;
}

