// --------------------------------------------------//
//                                                   //
//                  BASIC MOVEMENTS                  //
//                                                   //
// --------------------------------------------------//

function isSuperposition(ptop1,pleft1,ptop2,pleft2){
    if((ptop1==ptop2)&&(pleft1==pleft2)){
        return true;
    }
    return false;
    // no collision = just return false
}


function dest_downward_p1(height,length){
    if((boards[actual_board][fromtop1+1][fromleft1]!=2)&&(!isSuperposition(fromtop1+1,fromleft1,fromtop2,fromleft2))){
        fromtop1++;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
}


function dest_leftward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1-1]!=2)&&(!isSuperposition(fromtop1,fromleft1-1,fromtop2,fromleft2))){
        fromleft1--;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
}


function dest_upward_p1(height,length){
    if((boards[actual_board][fromtop1-1][fromleft1]!=2)&&(!isSuperposition(fromtop1-1,fromleft1,fromtop2,fromleft2))){
        fromtop1--;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
}


function dest_rigthward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1+1]!=2)&&(!isSuperposition(fromtop1,fromleft1+1,fromtop2,fromleft2))){
        fromleft1++;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
}

function dest_downward_p2(height,length){
    if((boards[actual_board][fromtop2+1][fromleft2]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2+1,fromleft2))){
        fromtop2++;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
}


function dest_leftward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2-1]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2-1))){
        fromleft2--;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
}


function dest_upward_p2(height,length){
    if((boards[actual_board][fromtop2-1][fromleft2]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2-1,fromleft2))){
        fromtop2--;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
}


function dest_rigthward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2+1]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2+1))){
        fromleft2++;
        playMove();
    }else{
        playWallHit()
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
}

function set_new_positions(e,height,length){
    if(!inpause){
        if ( is_input_up_p2_multiplayer(e)) { // going up p1 - Z key
            if(!playerOneImmo){
                dest_upward_p1(height,length);
            }
        }
        else if (is_input_down_p2_multiplayer(e))  { // going down p1 - S key
            if(!playerOneImmo){
                dest_downward_p1(height,length);
            }
        }
        else if (is_input_left_p2_multiplayer(e))  { // going left p1 - Q key
            if(!playerOneImmo){
                dest_leftward_p1(height,length);
            }
        }
        else if (is_input_right_p2_multiplayer(e))  { // going rigth p1 - D key
            if(!playerOneImmo){
                dest_rigthward_p1(height,length);
            }
        }
        else if ((e.keyCode == '38')) { // going up for p2
            if(!playerTwoImmo){
                dest_upward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '40')) { // going down for p2
            if(!playerTwoImmo){
                dest_downward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '37')) { // going left for p2
            if(!playerTwoImmo){
                dest_leftward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '39')) { // going right for p2
            if(!playerTwoImmo){
                dest_rigthward_p2(height,length);
            }
        }
        nbCoups++;
        check_get_powItem();
    }
}

// --------------------------------------------------//
//                                                   //
//                  FELIX MOVEMENTS                  //
//                                                   //
// --------------------------------------------------//