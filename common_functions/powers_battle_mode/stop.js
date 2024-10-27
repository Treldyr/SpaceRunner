// IDs for the promise
var powstopId;

function startStop(numberPower) {
    isStop = true
    turnTruePowUsed(numberPower)
    document.getElementById("ghost0").style.opacity = 0.5;
    powstopId = setInterval(() => {
        isStop = false
        document.getElementById("ghost0").style.opacity = 1;
        clearInterval(powstopId);
    }, 2000); // run the function after two second (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}