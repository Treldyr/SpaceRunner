// --------------------------------------------------//
//                                                   //
//         LINEAR MOVEMENTS WITH LAVA                //
//                                                   //
// --------------------------------------------------//


function dest_downward_with_lava(){
    if(boards[actual_board][fromtop+1][fromleft]!=2){
        fromtop++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward_with_lava(){
    if(boards[actual_board][fromtop][fromleft-1]!=2){
        fromleft--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_upward_with_lava(){
    if(boards[actual_board][fromtop-1][fromleft]!=2){
        fromtop--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}


function dest_rigthward_with_lava(){
    if(boards[actual_board][fromtop][fromleft+1]!=2){
        fromleft++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}