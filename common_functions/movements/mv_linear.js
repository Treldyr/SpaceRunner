// --------------------------------------------------//
//                                                   //
//                 LINEAR MOVEMENTS                  //
//                                                   //
// --------------------------------------------------//


function dest_downward(){
    if(boards[actual_board][fromtop+1][fromleft]!=2){
        fromtop++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward(){
    if(boards[actual_board][fromtop][fromleft-1]!=2){
        fromleft--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_upward(){
    if(boards[actual_board][fromtop-1][fromleft]!=2){
        fromtop--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}


function dest_rigthward(){
    if(boards[actual_board][fromtop][fromleft+1]!=2){
        fromleft++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}

