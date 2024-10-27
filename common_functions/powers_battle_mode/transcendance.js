// IDs for the promise
var powtransId;

function startTranscendance(numberPower) {
    isTrans = true
    turnTruePowUsed(numberPower)
    powtransId = setInterval(() => {
        isTrans = false
        clearInterval(powtransId);
    }, 2000); // stop the function after two seconds (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}