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


function checkIsAir(){
    if((gaz[actual_board][0][0]==fromtop)&&(gaz[actual_board][0][1]==fromleft)&&(!found_b0)){
        idGaz = (actual_board)*10
        found_b0 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+12
    }
    if((gaz[actual_board][1][0]==fromtop)&&(gaz[actual_board][1][1]==fromleft)&&(!found_b1)){
        idGaz = (actual_board)*10 + 1
        found_b1 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+10
    }
    if((gaz[actual_board][2][0]==fromtop)&&(gaz[actual_board][2][1]==fromleft)&&(!found_b2)){
        idGaz = (actual_board)*10 + 2
        found_b2 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+10
    }
    if((gaz[actual_board][3][0]==fromtop)&&(gaz[actual_board][3][1]==fromleft)&&(!found_b3)){
        idGaz = (actual_board)*10 + 3
        found_b3 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+10
    }
    if((gaz[actual_board][4][0]==fromtop)&&(gaz[actual_board][4][1]==fromleft)&&(!found_b4)){
        idGaz = (actual_board)*10 + 4
        found_b4 = true;
        document.getElementById("air"+idGaz).style.display = "none";
        playSuccess()
        totalSeconds = totalSeconds+10
    }
}