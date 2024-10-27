// movements of players

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
    updateImageGhost()
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
    updateImageGhost()
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
    updateImageGhost()
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
    updateImageGhost()
}