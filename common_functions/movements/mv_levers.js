// --------------------------------------------------//
//                                                   //
//         LINEAR MOVEMENTS WITH LEVER                //
//                                                   //
// --------------------------------------------------//


function dest_downward_with_lever(){
    if((boards[actual_board][fromtop+1][fromleft]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop+1,fromleft))){
        fromtop++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward_with_lever(){
    if((boards[actual_board][fromtop][fromleft-1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop,fromleft-1))){
        fromleft--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_upward_with_lever(){
    if((boards[actual_board][fromtop-1][fromleft]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop-1,fromleft))){
        fromtop--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}


function dest_rigthward_with_lever(){
    if((boards[actual_board][fromtop][fromleft+1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop,fromleft+1))){
        fromleft++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}

