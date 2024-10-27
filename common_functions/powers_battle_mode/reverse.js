// IDs for the promise
var powReverseId;

function startReverse(numberPower){
    isReverse = true
    turnTruePowUsed(numberPower)
    powReverseId = setInterval(() => {
        isReverse = false
        clearInterval(powReverseId);
    }, 2000); // run the function after two second (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}