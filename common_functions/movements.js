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


// --------------------------------------------------//
//                                                   //
//             MOVEMENTS WHILE SLIDING               //
//                                                   //
// --------------------------------------------------//


function dest_upward_sliding(){
    pos_top = fromtop;
    pos_left = fromleft;
    let founded = false;
    while(founded != true)
    {
        if(boards[actual_board][pos_top][pos_left]==2){
            founded = true;
        }
        pos_top--;
    }
    fromtop = pos_top+2;
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}

function dest_downward_sliding(){
    pos_top = fromtop;
    pos_left = fromleft;
    let founded = false;
    while(founded != true)
    {
        if(boards[actual_board][pos_top][pos_left]==2){
            founded = true;
        }
        pos_top++;
    }
    fromtop = pos_top-2;
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward_sliding(){
    pos_top = fromtop;
    pos_left = fromleft;
    let founded = false;
    while(founded != true)
    {
        if(boards[actual_board][pos_top][pos_left]==2){
            founded = true;
        }
        pos_left--;
    }
    fromleft = pos_left+2;
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}



function dest_rigthward_sliding(){
    pos_top = fromtop;
    pos_left = fromleft;
    let founded = false;
    while(founded != true)
    {
        if(boards[actual_board][pos_top][pos_left]==2){
            founded = true;
        }
        pos_left++;
    }
    fromleft = pos_left-2;
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}


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


// --------------------------------------------------//
//                                                   //
//         LINEAR MOVEMENTS IN THE DARK              //
//                                                   //
// --------------------------------------------------//


function dest_downward_in_darkness(){
    if(boards[actual_board][fromtop+1][fromleft]!=2){
        fromtop++;
        playMove();

        show_light_case(actual_board,fromtop+1,fromleft-2)
        show_light_case(actual_board,fromtop+2,fromleft-1)
        show_light_case(actual_board,fromtop+2,fromleft)
        show_light_case(actual_board,fromtop+2,fromleft+1)
        show_light_case(actual_board,fromtop+1,fromleft+2)

        hide_light_case(actual_board,fromtop-2,fromleft-2)
        hide_light_case(actual_board,fromtop-3,fromleft-1)
        hide_light_case(actual_board,fromtop-3,fromleft)
        hide_light_case(actual_board,fromtop-3,fromleft+1)
        hide_light_case(actual_board,fromtop-2,fromleft+2)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward_in_darkness(){
    if(boards[actual_board][fromtop][fromleft-1]!=2){
        fromleft--;
        playMove();

        show_light_case(actual_board,fromtop-2,fromleft-1)
        show_light_case(actual_board,fromtop-1,fromleft-2)
        show_light_case(actual_board,fromtop,fromleft-2)
        show_light_case(actual_board,fromtop+1,fromleft-2)
        show_light_case(actual_board,fromtop+2,fromleft-1)

        hide_light_case(actual_board,fromtop-2,fromleft+2)
        hide_light_case(actual_board,fromtop-1,fromleft+3)
        hide_light_case(actual_board,fromtop,fromleft+3)
        hide_light_case(actual_board,fromtop+1,fromleft+3)
        hide_light_case(actual_board,fromtop+2,fromleft+2)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_upward_in_darkness(){
    if(boards[actual_board][fromtop-1][fromleft]!=2){
        fromtop--;
        playMove();

        show_light_case(actual_board,fromtop-1,fromleft-2)
        show_light_case(actual_board,fromtop-2,fromleft-1)
        show_light_case(actual_board,fromtop-2,fromleft)
        show_light_case(actual_board,fromtop-2,fromleft+1)
        show_light_case(actual_board,fromtop-1,fromleft+2)

        hide_light_case(actual_board,fromtop+2,fromleft-2)
        hide_light_case(actual_board,fromtop+3,fromleft-1)
        hide_light_case(actual_board,fromtop+3,fromleft)
        hide_light_case(actual_board,fromtop+3,fromleft+1)
        hide_light_case(actual_board,fromtop+2,fromleft+2)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}


function dest_rigthward_in_darkness(){
    if(boards[actual_board][fromtop][fromleft+1]!=2){
        fromleft++;
        playMove();

        show_light_case(actual_board,fromtop-2,fromleft+1)
        show_light_case(actual_board,fromtop-1,fromleft+2)
        show_light_case(actual_board,fromtop,fromleft+2)
        show_light_case(actual_board,fromtop+1,fromleft+2)
        show_light_case(actual_board,fromtop+2,fromleft+1)

        hide_light_case(actual_board,fromtop-2,fromleft-2)
        hide_light_case(actual_board,fromtop-1,fromleft-3)
        hide_light_case(actual_board,fromtop,fromleft-3)
        hide_light_case(actual_board,fromtop+1,fromleft-3)
        hide_light_case(actual_board,fromtop+2,fromleft-2)
    }else{
        playWallHit()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}

