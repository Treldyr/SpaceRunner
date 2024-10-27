// movements of players

function go_up_p1(){
    if(isBrained){
        if(!isReverse){
            dest_upward_p2();
        }else{
            dest_downward_p2();
        }
    } else {
        if(!isReverse){
            dest_upward_p1();
        }else{
            dest_downward_p1();
        }
    }
}


function go_down_p1(){
    if(isBrained){
        if(!isReverse){
            dest_downward_p2();
        }else{
            dest_upward_p2();
        }
    } else {
        if(!isReverse){
            dest_downward_p1();
        }else{
            dest_upward_p1();
        }
    }
}

function go_left_p1(){
    if(isBrained){
        if(!isReverse){
            dest_leftward_p2();
        }else{
            dest_rigthward_p2();
        }
    } else {
        if(!isReverse){
            dest_leftward_p1();
        }else{
            dest_rigthward_p1();
        }
    }
}

function go_rigth_p1(){
    if(isBrained){
        if(!isReverse){
            dest_rigthward_p2();
        }else{
            dest_leftward_p2();
        }
    } else {
        if(!isReverse){
            dest_rigthward_p1();
        }else{
            dest_leftward_p1();
        }
    }
}


function go_up_p2(){
    if(!isBrained){
        dest_upward_p2();
    } else {
        dest_upward_p1();
    }
}

function go_down_p2(){
    if(!isBrained){
        dest_downward_p2();
    } else {
        dest_downward_p1();
    }
}

function go_left_p2(){
    if(!isBrained){
        dest_leftward_p2();
    } else {
        dest_leftward_p1();
    }
}

function go_right_p2(){
    if(!isBrained){
        dest_rigthward_p2();
    } else {
        dest_rigthward_p1();
    }
}


// shift for players

function dest_upward_p1(){
    if((boards[actual_board][fromtop1-1][fromleft1]!=3)&&(boards[actual_board][fromtop1-1][fromleft1]!=4)){
        fromtop1--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("up")
}

function dest_upward_p2(){
    lastmMoveByFantom = "u"
    if(((boards[actual_board][fromtop2-1][fromleft2]!=2)&&(boards[actual_board][fromtop2-1][fromleft2]!=4))||(isTrans)){
        fromtop2--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost("up")
}

function dest_downward_p1(){
    if((boards[actual_board][fromtop1+1][fromleft1]!=3)&&(boards[actual_board][fromtop1+1][fromleft1]!=4)){
        fromtop1++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("down")
}


function dest_downward_p2(){
     lastmMoveByFantom = "d"
    if(((boards[actual_board][fromtop2+1][fromleft2]!=2)&&(boards[actual_board][fromtop2+1][fromleft2]!=4))||(isTrans)){
        fromtop2++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost("down")
}


function dest_leftward_p1(){
    if((boards[actual_board][fromtop1][fromleft1-1]!=3)&&(boards[actual_board][fromtop1][fromleft1-1]!=4)){
        fromleft1--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("left")
}


function dest_leftward_p2(){
    lastmMoveByFantom = "l"
    if(((boards[actual_board][fromtop2][fromleft2-1]!=2)&&(boards[actual_board][fromtop2][fromleft2-1]!=4))||(isTrans)){
        fromleft2--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost("left")
}

function dest_rigthward_p1(){
    if((boards[actual_board][fromtop1][fromleft1+1]!=3)&&(boards[actual_board][fromtop1][fromleft1+1]!=4)){
        fromleft1++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("right")
}


function dest_rigthward_p2(){
    lastmMoveByFantom = "r"
    if(((boards[actual_board][fromtop2][fromleft2+1]!=2)&&(boards[actual_board][fromtop2][fromleft2+1]!=4))||(isTrans)){
        fromleft2++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost("right")
}


// update the images of the players

function updateImageGhost(direction){
    if(!isInvisible){
        let chara2 = document.getElementById('ghost'+actual_board);
        chara2.setAttribute('style',"position: fixed;top : "+(5*fromtop2+5)+"vh;left : "+(3.5*fromleft2+5)+"vw;");
        if(isChangedIdentity){
            chara2.setAttribute('src',"../../../images/"+chara+direction+".png");
        }
    }
}

function updateImageCharacter(direction){
    let chara1 = document.getElementById('character'+actual_board);
    chara1.setAttribute('style',"position: fixed;top : "+(5*fromtop1+5)+"vh;left : "+(3.5*fromleft1+5)+"vw;");
    if(isChangedIdentity){
        chara1.setAttribute('src', "../../../images/fantom" + charap2 + ".png");
    } else {
        chara1.setAttribute('src',"../../../images/"+chara+direction+".png");
    }
}