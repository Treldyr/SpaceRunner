function set_new_positions_with_speedpow(e,height,length){
    if(!inpause){
        if ( is_input_up_p2_multiplayer(e)&&(!p1_won)) { // going up p1 - Z key
            dest_upward_lever_p1(height,length)
            if((p1_speed)&&(!p1_won)){
                dest_upward_lever_p1(height,length)
            }
        }
        else if (is_input_down_p2_multiplayer(e)&&(!p1_won))  { // going down p1 - S key
            dest_downward_lever_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_downward_lever_p1(height,length);
            }
        }
        else if (is_input_left_p2_multiplayer(e)&&(!p1_won))  { // going left p1 - Q key
            dest_leftward_lever_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_leftward_lever_p1(height,length);
            }
        }
        else if (is_input_right_p2_multiplayer(e)&&(!p1_won))  { // going rigth p1 - D key
            dest_rightward_lever_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_rightward_lever_p1(height,length);
            }
        }
        else if ((e.keyCode == '38') && (!p2_won)) { // going up for p2
            dest_upward_lever_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_upward_lever_p2(height,length);
            }
        } 
        else if ((e.keyCode == '40') && (!p2_won)) { // going down for p2
            dest_downward_lever_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_downward_lever_p2(height,length);
            }
        } 
        else if ((e.keyCode == '37') && (!p2_won)) { // going left for p2
            dest_leftward_lever_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_leftward_lever_p2(height,length);
            }
        } 
        else if ((e.keyCode == '39') && (!p2_won)) { // going right for p2
            dest_rightward_lever_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_rightward_lever_p2(height,length);
            }
        }
        nbCoups++;
    }
}


function set_new_positions_with_lever(e,height,length){
    if(!inpause){
        if (is_input_up_p2_multiplayer(e)&&(!p1_won)) { // going up p1 - Z key
            dest_upward_lever_p1(height,length)
        }
        else if (is_input_down_p2_multiplayer(e)&&(!p1_won))  { // going down p1 - S key
            dest_downward_lever_p1(height,length)
        }
        else if (is_input_left_p2_multiplayer(e)&&(!p1_won))  { // going left p1 - Q key
            dest_leftward_lever_p1(height,length)
        }
        else if (is_input_right_p2_multiplayer(e)&&(!p1_won))  { // going rigth p1 - D key
            dest_rightward_lever_p1(height,length)
        }
        else if ((e.keyCode == '38') && (!p2_won)) { // going up for p2
            dest_upward_lever_p2(height,length)
        } 
        else if ((e.keyCode == '40') && (!p2_won)) { // going down for p2
            dest_downward_lever_p2(height,length)
        } 
        else if ((e.keyCode == '37') && (!p2_won)) { // going left for p2
            dest_leftward_lever_p2(height,length)
        } 
        else if ((e.keyCode == '39') && (!p2_won)) { // going right for p2
            dest_rightward_lever_p2(height,length)
        }
        nbCoups++;
    }
}



function dest_upward_lever_p1(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop1-1,fromleft1)){
        dest_upward_p1(height,length);
    }
    check_lever_superposition(fromleft1, fromtop1,5,3.5);
}

function dest_downward_lever_p1(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop1+1,fromleft1)){
        dest_downward_p1(height,length);
    }
    check_lever_superposition(fromleft1, fromtop1,5,3.5);
}

function dest_leftward_lever_p1(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop1,fromleft1-1)){
        dest_leftward_p1(height,length);
    }
    check_lever_superposition(fromleft1, fromtop1,5,3.5);
}

function dest_rightward_lever_p1(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop1,fromleft1+1)){
        dest_rigthward_p1(height,length);
    }
    check_lever_superposition(fromleft1, fromtop1,5,3.5);
}

function dest_upward_lever_p2(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop2-1,fromleft2)){
        dest_upward_p2(height,length);
    }
    check_lever_superposition(fromleft2, fromtop2,5,3.5);
}

function dest_downward_lever_p2(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop2+1,fromleft2)){
        dest_downward_p2(height,length);
    }
    check_lever_superposition(fromleft2, fromtop2,5,3.5);
}

function dest_leftward_lever_p2(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop2,fromleft2-1)){
        dest_leftward_p2(height,length);
    }
    check_lever_superposition(fromleft2, fromtop2,5,3.5);
}

function dest_rightward_lever_p2(height,length){
    if(!isAdditionnalBlockInTheWay(fromtop2,fromleft2+1)){
        dest_rigthward_p2(height,length);
    }
    check_lever_superposition(fromleft2, fromtop2,5,3.5);
}