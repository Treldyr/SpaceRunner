

function dest_downward(){
    let nextcase = boards[actual_board][fromtop+1][fromleft]
    if((nextcase!=2)&&(nextcase!=5)&&(nextcase!=6)
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
    let nextcase = boards[actual_board][fromtop][fromleft-1]
    if((nextcase!=2)&&(nextcase!=5)&&(nextcase!=6)
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
    let nextcase = boards[actual_board][fromtop-1][fromleft]
    if((nextcase!=2)&&(nextcase!=5)&&(nextcase!=6)
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
    let nextcase = boards[actual_board][fromtop][fromleft+1]
    if((nextcase!=2)&&(nextcase!=5)&&(nextcase!=6)
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