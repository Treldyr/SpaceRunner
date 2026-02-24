// This file require basic.js to use the Pad function !!!

// --------------------------------------------------//
//                                                   //
//             VARIABLE INITIALIZATION               //
//                                                   //
// --------------------------------------------------//


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalCentiSeconds = 0;
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
    let secondsCount;
    let minutesCount;
    // Update the timer display every second
    intervalId = setInterval(() => {
        ++totalCentiSeconds;
        secondsCount = Math.floor((totalCentiSeconds /100)% 60)
        minutesCount = Math.floor(totalCentiSeconds / 6000)
        secondsLabel.innerHTML = pad(secondsCount);
        minutesLabel.innerHTML = pad(minutesCount);
    }, 10); // run the function every 10 milliseconds (0.01 seconds)
}

function stopTimer() {
    clearInterval(intervalId);
}


function resetTimer(){
    secondsLabel.innerHTML = pad(0);
    minutesLabel.innerHTML = pad(0);
    totalCentiSeconds = 0;
}

