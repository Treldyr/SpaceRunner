// This file require basic.js to use the Pad function !!!

// --------------------------------------------------//
//                                                   //
//             VARIABLE INITIALIZATION               //
//                                                   //
// --------------------------------------------------//


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalCentiSeconds = 0;
var totalTimePlayed = 0;
var countdownFinished = false
var intervalId;


// --------------------------------------------------//
//                                                   //
//              THE FUNCTION OF THE COUNTDOWN        //
//                                                   //
// --------------------------------------------------//

function startCountDown(nbseconds) {
    let secondsCount;
    let minutesCount;
    countdownFinished = false
    totalCentiSeconds = nbseconds
    // Update the timer display every second
    intervalId = setInterval(() => {
        --totalCentiSeconds;
        ++totalTimePlayed;
        secondsCount = Math.floor((totalCentiSeconds /100)% 60)
        minutesCount = Math.floor(totalCentiSeconds / 6000)
        secondsLabel.innerHTML = pad(secondsCount);
        minutesLabel.innerHTML = pad(minutesCount);
        if(totalCentiSeconds===0){
            stopCountDown()
            countdownFinished = true
        }
}, 10); // run the function every 10 milliseconds (0.01 seconds)

}

function stopCountDown() {
    clearInterval(intervalId);
}


function resetCountDown(nbseconds){
    secondsLabel.innerHTML = pad(nbseconds);
    minutesLabel.innerHTML = pad(nbseconds);
    totalCentiSeconds = nbseconds;
}