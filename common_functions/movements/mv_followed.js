

function dest_downward(){
    if((boards[actual_board][fromtop+1][fromleft]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop+1,fromleft))){
        fromtop++;
        playMove();
        delayMovePapy("d");
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    spawn_papy();
}


function dest_leftward(){
    if((boards[actual_board][fromtop][fromleft-1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop,fromleft-1))){
        fromleft--;
        playMove();
        delayMovePapy("l");
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    spawn_papy();
}


function dest_upward(){
    if((boards[actual_board][fromtop-1][fromleft]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop-1,fromleft))){
        fromtop--;
        playMove();
        delayMovePapy("u");
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    spawn_papy();
}


function dest_rigthward(){
    if((boards[actual_board][fromtop][fromleft+1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop,fromleft+1))){
        fromleft++;
        playMove();
        delayMovePapy("r");
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    spawn_papy();
}