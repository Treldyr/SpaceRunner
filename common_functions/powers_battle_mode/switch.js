function doSwitch(numberPower) {
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)
    let temp = fromtop1
    fromtop1 = fromtop2
    fromtop2 = temp
    temp = fromleft1;
    fromleft1 = fromleft2 
    fromleft2 = temp
    updateImageGhost("down")
    updateImageCharacter("down")
}