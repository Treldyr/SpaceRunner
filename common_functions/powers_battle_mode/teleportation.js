function doTeleportation(numberPower){
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower);

    fromtop1 = fromtop1+ getRandomIntMax(7)-3;
    if(fromtop1<1){
        fromtop1 = 1
    }
    if(fromtop1>=boards[actual_board].length-1){
        fromtop1 = boards[actual_board].length-2
    }

    fromleft1 = fromleft1+ getRandomIntMax(7)-3;
    if(fromleft1<1){
        fromleft1 = 1
    }
    if(fromleft1>=boards[actual_board][0].length-1){
        fromleft1 = boards[actual_board][0].length-2
    }

    let chara1 = document.getElementById('character'+actual_board);
    chara1.setAttribute('style',"position: fixed;top : "+(5*fromtop1+5)+"vh;left : "+(3.5*fromleft1+5)+"vw;");
}