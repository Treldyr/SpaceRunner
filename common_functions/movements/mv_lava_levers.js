// --------------------------------------------------//
//                                                   //
//         LINEAR MOVEMENTS WITH LAVA                //
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


function reset_level(){
    fromtop = coords_begin[actual_board][0];
    fromleft = coords_begin[actual_board][1];
    
    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(5*fromtop+5)+"vh;left : "+(3.5*fromleft+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");
}