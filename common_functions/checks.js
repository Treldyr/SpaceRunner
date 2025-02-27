function checkIsGaz(){
    if((gaz[actual_board][0][0]==fromtop)&&(gaz[actual_board][0][1]==fromleft)&&(!found_b0)){
        idGaz = (actual_board)*4
        found_b0 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
    if((gaz[actual_board][1][0]==fromtop)&&(gaz[actual_board][1][1]==fromleft)&&(!found_b1)){
        idGaz = (actual_board)*4 + 1
        found_b1 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
    if((gaz[actual_board][2][0]==fromtop)&&(gaz[actual_board][2][1]==fromleft)&&(!found_b2)){
        idGaz = (actual_board)*4 + 2
        found_b2 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
}


function checkIsItem2Players(){
    if((gaz[actual_board][0][0]==fromtop1)&&(gaz[actual_board][0][1]==fromleft1)&&(!found_b0)
    || (gaz[actual_board][0][0]==fromtop2)&&(gaz[actual_board][0][1]==fromleft2)&&(!found_b0)){
        idGaz = (actual_board)*4
        found_b0 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
    if((gaz[actual_board][1][0]==fromtop1)&&(gaz[actual_board][1][1]==fromleft1)&&(!found_b1)
    || (gaz[actual_board][1][0]==fromtop2)&&(gaz[actual_board][1][1]==fromleft2)&&(!found_b1)){
        idGaz = (actual_board)*4 + 1
        found_b1 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
    if((gaz[actual_board][2][0]==fromtop1)&&(gaz[actual_board][2][1]==fromleft1)&&(!found_b2)
    || (gaz[actual_board][2][0]==fromtop2)&&(gaz[actual_board][2][1]==fromleft2)&&(!found_b2)){
        idGaz = (actual_board)*4 + 2
        found_b2 = true;
        document.getElementById("gaz"+idGaz).style.display = "none";
        playSuccess()
    }
}

function checkIsBomb(){
    if((bomb[actual_board][0][0]==bossTop)&&(bomb[actual_board][0][1]==bossLeft)&&(!found_b0)){
        idGaz = (actual_board)*4
        found_b0 = true;
        document.getElementById("bomb"+idGaz).style.display = "none";
        playSuccess() // TODO change to another sound
        freezeCharacter("boss0")
        hideNextHeart(1);
    }
    if((bomb[actual_board][1][0]==bossTop)&&(bomb[actual_board][1][1]==bossLeft)&&(!found_b1)){
        idGaz = (actual_board)*4 + 1
        found_b1 = true;
        document.getElementById("bomb"+idGaz).style.display = "none";
        playSuccess() // TODO
        freezeCharacter("boss0")
        hideNextHeart(2);
    }
    if((bomb[actual_board][2][0]==bossTop)&&(bomb[actual_board][2][1]==bossLeft)&&(!found_b2)){
        idGaz = (actual_board)*4 + 2
        found_b2 = true;
        document.getElementById("bomb"+idGaz).style.display = "none";
        playSuccess() // TODO
        freezeCharacter("boss0")
        hideNextHeart(3);
    }
}


function checkIsAir(time_to_add){
    if((gaz[actual_board][0][0]==fromtop)&&(gaz[actual_board][0][1]==fromleft)&&(!found_b0)){
        idGaz = (actual_board)*10
        found_b0 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+time_to_add
    }
    if((gaz[actual_board][1][0]==fromtop)&&(gaz[actual_board][1][1]==fromleft)&&(!found_b1)){
        idGaz = (actual_board)*10 + 1
        found_b1 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+time_to_add
    }
    if((gaz[actual_board][2][0]==fromtop)&&(gaz[actual_board][2][1]==fromleft)&&(!found_b2)){
        idGaz = (actual_board)*10 + 2
        found_b2 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+time_to_add
    }
    if((gaz[actual_board][3][0]==fromtop)&&(gaz[actual_board][3][1]==fromleft)&&(!found_b3)){
        idGaz = (actual_board)*10 + 3
        found_b3 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+time_to_add
    }
    if((gaz[actual_board][4][0]==fromtop)&&(gaz[actual_board][4][1]==fromleft)&&(!found_b4)){
        idGaz = (actual_board)*10 + 4
        found_b4 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+time_to_add
    }
}