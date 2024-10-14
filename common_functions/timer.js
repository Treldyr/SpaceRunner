function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

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