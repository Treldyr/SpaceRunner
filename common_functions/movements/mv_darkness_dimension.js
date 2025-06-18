// --------------------------------------------------//
//                                                   //
//   LINEAR MOVEMENTS WITH DIMENSION IN THE DARK     //
//                                                   //
// --------------------------------------------------//


function dest_dim_down_in_darkness(){
    let nextcase = boards[actual_board][fromtop+1][fromleft]
    if ((nextcase!=3)
        && (((isDimRed)&&(nextcase!=1))||((!isDimRed)&&(nextcase!=2)))){
        fromtop++;
        playMetalFootstep();
        light_down(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_dim_left_in_darkness(){
    let nextcase = boards[actual_board][fromtop][fromleft-1]
    if ((nextcase!=3)
        && (((isDimRed)&&(nextcase!=1))||((!isDimRed)&&(nextcase!=2)))){
        fromleft--;
        playMetalFootstep();
        light_left(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_dim_up_in_darkness(){
    let nextcase = boards[actual_board][fromtop-1][fromleft]
    if ((nextcase!=3)
        && (((isDimRed)&&(nextcase!=1))||((!isDimRed)&&(nextcase!=2)))){
        fromtop--;
        playMetalFootstep();
        light_up(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}

function dest_dim_right_in_darkness(){
    let nextcase = boards[actual_board][fromtop][fromleft+1]
    if ((nextcase!=3)
        && (((isDimRed)&&(nextcase!=1))||((!isDimRed)&&(nextcase!=2)))){
        fromleft++;
        playMetalFootstep();
        light_right(actual_board,fromtop,fromleft)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}