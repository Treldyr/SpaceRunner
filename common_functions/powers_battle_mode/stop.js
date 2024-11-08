// IDs for the promise
var powstopId;

function startStop(numberPower) {
    turnTruePowUsed(numberPower)
    freezeCharacter("ghost0")
    disablePowerItem("pouv"+numberPower)
}

function freezeCharacter(character_id){
    isStop = true
    document.getElementById(character_id).style.opacity = 0.5;
    powstopId = setInterval(() => {
        isStop = false
        document.getElementById(character_id).style.opacity = 1;
        clearInterval(powstopId);
    }, 2000); // run the function after two second (2000 milliseconds)
}