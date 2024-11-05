// This file require basic.js to use the Pad function !!!

// --------------------------------------------------//
//                                                   //
//             VARIABLE INITIALIZATION               //
//                                                   //
// --------------------------------------------------//


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var totalTimePlayed = 0;
var countdownFinished = false
var intervalId;


// --------------------------------------------------//
//                                                   //
//              THE FUNCTION OF THE COUNTDOWN        //
//                                                   //
// --------------------------------------------------//

function startCountDown(nbseconds) {
    countdownFinished = false
    totalSeconds = nbseconds
    // Update the timer display every second
    intervalId = setInterval(() => {
        --totalSeconds;
        ++totalTimePlayed;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        if(totalSeconds===0){
            stopCountDown()
            countdownFinished = true
        }
}, 1000); // run the function every second (1000 milliseconds)

}

function stopCountDown() {
    clearInterval(intervalId);
}


function resetCountDown(nbseconds){
    secondsLabel.innerHTML = pad(nbseconds);
    minutesLabel.innerHTML = pad(nbseconds);
    totalSeconds = nbseconds;
}

// --------------------------------------------------//
//                                                   //
//          THE FUNCTION OF THE TOTAL TIME           //
//                                                   //
// --------------------------------------------------//
