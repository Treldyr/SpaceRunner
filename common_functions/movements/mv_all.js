// --------------------------------------------------//
//                                                   //
//                 LINEAR MOVEMENTS                  //
//                                                   //
// --------------------------------------------------//


function dest_downward(){
    if(actual_board<2){
        if((boards[actual_board][fromtop+1][fromleft]!=2)&&(boards[actual_board][fromtop+1][fromleft]!=15)){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
    } else if (actual_board==2){
        pos_top = fromtop;
        pos_left = fromleft;
        let founded = false;
        while(founded != true)
        {
            if(boards[actual_board][pos_top][pos_left]==6){
                founded = true;
            }
            pos_top++;
        }
        fromtop = pos_top-2;
    } else if (actual_board==3){
        if(boards[actual_board][fromtop+1][fromleft]!=8){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
        checkGhost(ghostLeft,fromleft,ghostTop,fromtop)
    } else if(actual_board==4){
        let nextcase = boards[actual_board][fromtop+1][fromleft]
        if ((nextcase!=12) && (((isDimRed)&&(nextcase!=11))||((!isDimRed)&&(nextcase!=10)))){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==5){
        if(boards[actual_board][fromtop+1][fromleft]!=14){
            fromtop++;
            playMove();
            light_down(actual_board,fromtop,fromleft)
        }else{
            playWallHit()
        }
    } else if(actual_board==6){
        if(boards[actual_board][fromtop+1][fromleft]!=17){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==18){
        if(boards[actual_board][fromtop+1][fromleft]!=20){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
        checkShuriken(6)
        checkIsAlign(fromleft,fromtop,boss2Left,boss2Top)
        checkHitBrahma()
    } else if(actual_board==20){
        if(boards[actual_board][fromtop+1][fromleft]!=20){
            fromtop++;
            playMove();
            spawn_papy();
            delayMovePapy("d");
            if(boards[actual_board][fromtop][fromleft]==18){
                respawnFromBrahma()
            }
        }else{
            playWallHit()
        }
        checkIsAlign(fromleft,fromtop,bossDarkLeft,bossDarkTop)
        checkHitBrahma()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
}


function dest_leftward(){
    if(actual_board<2){
        if((boards[actual_board][fromtop][fromleft-1]!=2)&&(boards[actual_board][fromtop][fromleft-1]!=15)){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
    } else if (actual_board==2){
        pos_top = fromtop;
        pos_left = fromleft;
        let founded = false;
        while(founded != true)
        {
            if(boards[actual_board][pos_top][pos_left]==6){
                founded = true;
            }
            pos_left--;
        }
        fromleft = pos_left+2;
    } else if (actual_board==3){
        if(boards[actual_board][fromtop][fromleft-1]!=8){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
        checkGhost(ghostLeft,fromleft,ghostTop,fromtop)
    } else if(actual_board==4){
        let nextcase = boards[actual_board][fromtop][fromleft-1]
        if ((nextcase!=12) && (((isDimRed)&&(nextcase!=11))||((!isDimRed)&&(nextcase!=10)))){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==5){
        if(boards[actual_board][fromtop][fromleft-1]!=14){
            fromleft--;
            playMove();
            light_left(actual_board,fromtop,fromleft)
        }else{
            playWallHit()
        }
    } else if(actual_board==6){
        if(boards[actual_board][fromtop][fromleft-1]!=17){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==18){
        if(boards[actual_board][fromtop][fromleft-1]!=20){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
        checkShuriken(6)
        checkIsAlign(fromleft,fromtop,boss2Left,boss2Top)
        checkHitBrahma()
    } else if(actual_board==20){
        if(boards[actual_board][fromtop][fromleft-1]!=20){
            fromleft--;
            playMove();
            spawn_papy();
            delayMovePapy("l");
            if(boards[actual_board][fromtop][fromleft]==18){
                respawnFromBrahma()
            }
        }else{
            playWallHit()
        }
        checkIsAlign(fromleft,fromtop,bossDarkLeft,bossDarkTop)
        checkHitBrahma()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
}


function dest_upward(){
    if(actual_board<2){
        if((boards[actual_board][fromtop-1][fromleft]!=2)&&(boards[actual_board][fromtop-1][fromleft]!=15)){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
    }else if (actual_board==2){
        pos_top = fromtop;
        pos_left = fromleft;
        let founded = false;
        while(founded != true)
        {
            if(boards[actual_board][pos_top][pos_left]==6){
                founded = true;
            }
            pos_top--;
        }
        fromtop = pos_top+2;
    } else if (actual_board==3){
        if(boards[actual_board][fromtop-1][fromleft]!=8){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
        checkGhost(ghostLeft,fromleft,ghostTop,fromtop)
    } else if(actual_board==4){
        let nextcase = boards[actual_board][fromtop-1][fromleft]
        if ((nextcase!=12) && (((isDimRed)&&(nextcase!=11))||((!isDimRed)&&(nextcase!=10)))){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==5){
        if(boards[actual_board][fromtop-1][fromleft]!=14){
            fromtop--;
            playMove();
            light_up(actual_board,fromtop,fromleft)
        }else{
            playWallHit()
        }
    } else if(actual_board==6){
        if(boards[actual_board][fromtop-1][fromleft]!=17){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==18){
        if(boards[actual_board][fromtop-1][fromleft]!=20){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
        checkShuriken(6)
        checkIsAlign(fromleft,fromtop,boss2Left,boss2Top)
        checkHitBrahma()
    } else if(actual_board==20){
        if(boards[actual_board][fromtop-1][fromleft]!=20){
            fromtop--;
            playMove();
            spawn_papy();
            delayMovePapy("u");
            if(boards[actual_board][fromtop][fromleft]==18){
                respawnFromBrahma()
            }
        }else{
            playWallHit()
        }
        checkIsAlign(fromleft,fromtop,bossDarkLeft,bossDarkTop)
        checkHitBrahma()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
}


function dest_rigthward(){
    if(actual_board<2){
        if((boards[actual_board][fromtop][fromleft+1]!=2)&&(boards[actual_board][fromtop][fromleft+1]!=15)){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
    } else if (actual_board==2){
        pos_top = fromtop;
        pos_left = fromleft;
        let founded = false;
        while(founded != true)
        {
            if(boards[actual_board][pos_top][pos_left]==6){
                founded = true;
            }
            pos_left++;
        }
        fromleft = pos_left-2;
    } else if (actual_board==3){
        if(boards[actual_board][fromtop][fromleft+1]!=8){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
        checkGhost(ghostLeft,fromleft,ghostTop,fromtop)
    } else if(actual_board==4){
        let nextcase = boards[actual_board][fromtop][fromleft+1]
        if ((nextcase!=12) && (((isDimRed)&&(nextcase!=11))||((!isDimRed)&&(nextcase!=10)))){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
    } else if (actual_board==5){
        if(boards[actual_board][fromtop][fromleft+1]!=14){
            fromleft++;
            playMove();
            light_right(actual_board,fromtop,fromleft)
        }else{
            playWallHit()
        }
    } else if(actual_board==6){
        if(boards[actual_board][fromtop][fromleft+1]!=17){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
    } else if(actual_board==18){
        if(boards[actual_board][fromtop][fromleft+1]!=20){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
        checkShuriken(6)
        checkIsAlign(fromleft,fromtop,boss2Left,boss2Top)
        checkHitBrahma()
    } else if(actual_board==20){
        if(boards[actual_board][fromtop][fromleft+1]!=20){
            fromleft++;
            playMove();
            spawn_papy();
            delayMovePapy("r");
            if(boards[actual_board][fromtop][fromleft]==18){
                respawnFromBrahma()
            }
        }else{
            playWallHit()
        }
        checkIsAlign(fromleft,fromtop,bossDarkLeft,bossDarkTop)
        checkHitBrahma()
    }
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
}

