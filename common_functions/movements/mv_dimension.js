// --------------------------------------------------//
//                                                   //
//        LINEAR MOVEMENTS WITH DIMENSIONS           //
//                                                   //
// --------------------------------------------------//


function dest_dim_down(){
    let nextcase = boards[actual_board][fromtop+1][fromleft]
    if ((nextcase!=4)
        && (((isDimRed)&&(nextcase!=3))||((!isDimRed)&&(nextcase!=2)))){
        fromtop++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_dim_left(){
    let nextcase = boards[actual_board][fromtop][fromleft-1]
    if ((nextcase!=4)
        && (((isDimRed)&&(nextcase!=3))||((!isDimRed)&&(nextcase!=2)))){
        fromleft--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_dim_up(){
    let nextcase = boards[actual_board][fromtop-1][fromleft]
    if ((nextcase!=4)
        && (((isDimRed)&&(nextcase!=3))||((!isDimRed)&&(nextcase!=2)))){
        fromtop--;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}

function dest_dim_right(){
    let nextcase = boards[actual_board][fromtop][fromleft+1]
    if ((nextcase!=4)
        && (((isDimRed)&&(nextcase!=3))||((!isDimRed)&&(nextcase!=2)))){
        fromleft++;
        playMove();
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}
