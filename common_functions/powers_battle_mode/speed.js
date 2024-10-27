// IDs for the promise
var powspeedId;

function startSpeed(numberPower) {
    isFast = true
    turnTruePowUsed(numberPower)
    powspeedId = setInterval(() => {
        isFast = false
        clearInterval(powspeedId);
    }, 2000); // stop the function after two seconds (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}