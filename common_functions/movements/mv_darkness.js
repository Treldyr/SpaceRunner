// --------------------------------------------------//
//                                                   //
//         LINEAR MOVEMENTS IN THE DARK              //
//                                                   //
// --------------------------------------------------//


function dest_downward_in_darkness(){
    if(boards[actual_board][fromtop+1][fromleft]!=2){
        fromtop++;
        playMove();
        light_down(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    document.getElementById('hat'+actual_board).setAttribute('src',"../../../images/specific/coal_hat_down.png");
}


function dest_leftward_in_darkness(){
    if(boards[actual_board][fromtop][fromleft-1]!=2){
        fromleft--;
        playMove();
        light_left(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    document.getElementById('hat'+actual_board).setAttribute('src',"../../../images/specific/coal_hat_left.png");
}


function dest_upward_in_darkness(){
    if(boards[actual_board][fromtop-1][fromleft]!=2){
        fromtop--;
        playMove();
        light_up(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    document.getElementById('hat'+actual_board).setAttribute('src',"../../../images/specific/coal_hat_up.png");
}


function dest_rigthward_in_darkness(){
    if(boards[actual_board][fromtop][fromleft+1]!=2){
        fromleft++;
        playMove();
        light_right(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    document.getElementById('hat'+actual_board).setAttribute('src',"../../../images/specific/coal_hat_right.png");
}