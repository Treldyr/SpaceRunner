// IDs for the promise
var powIdentityId;

function startIdentity(numberPower){
    isChangedIdentity = true
    turnTruePowUsed(numberPower)
    updateImageGhost("down")
    updateImageCharacter("down")
    powIdentityId = setInterval(() => {
        isChangedIdentity = false
        document.getElementById('ghost'+actual_board).setAttribute('src', "../../../images/fantom" + charap2 + ".png");
        updateImageCharacter("down")
        clearInterval(powIdentityId);
    }, 6000); // run the function for 6 second (6000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}