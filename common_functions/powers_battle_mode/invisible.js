// IDs for the promise
var powInvisibleId;

function startInvisible(numberPower){
    isInvisible = true
    document.getElementById("ghost0").style.display = "none";
    turnTruePowUsed(numberPower)
    powInvisibleId = setInterval(() => {
        isInvisible = false
        clearInterval(powInvisibleId);
    }, 2000); // run the function after two second (5000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}