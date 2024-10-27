// IDs for the promise
var powBrainId;

function startBrain(numberPower){
    isBrained = true
    turnTruePowUsed(numberPower)
    powBrainId = setInterval(() => {
        isBrained = false
        clearInterval(powBrainId);
    }, 2000); // run the function after two second (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}