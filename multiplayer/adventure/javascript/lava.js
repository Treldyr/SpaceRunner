var fromtop1 =0;
var fromleft1 = 0;
var fromtop2 =0;
var fromleft2 = 0;


function set_new_positions(e,height,length){
    if(!inpause){
        if ( is_input_up_p2_multiplayer(e)&&(!p1_won)) { // going up p1 - Z key
            dest_upward_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_upward_p1(height,length)
            }
        }
        else if (is_input_down_p2_multiplayer(e)&&(!p1_won))  { // going down p1 - S key
            dest_downward_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_downward_p1(height,length);
            }
        }
        else if (is_input_left_p2_multiplayer(e)&&(!p1_won))  { // going left p1 - Q key
            dest_leftward_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_leftward_p1(height,length);
            }
        }
        else if (is_input_right_p2_multiplayer(e)&&(!p1_won))  { // going rigth p1 - D key
            dest_rigthward_p1(height,length);
            if((p1_speed)&&(!p1_won)){
                dest_rigthward_p1(height,length);
            }
        }
        else if ((e.keyCode == '38') && (!p2_won)) { // going up for p2
            dest_upward_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_upward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '40') && (!p2_won)) { // going down for p2
            dest_downward_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_downward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '37') && (!p2_won)) { // going left for p2
            dest_leftward_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_leftward_p2(height,length);
            }
        } 
        else if ((e.keyCode == '39') && (!p2_won)) { // going right for p2
            dest_rigthward_p2(height,length);
            if((p2_speed)&&(!p2_won)){
                dest_rigthward_p2(height,length);
            }
        }
        nbCoups++;
    }
}

function reset_level(height,length){
    p1_won = false;
    p2_won = false;
    p1_speed = false;
    p2_speed = false;

    fromtop1 = coords_begin[actual_board][0];
    fromleft1 = coords_begin[actual_board][1];
    fromtop2 = coords_begin2[actual_board][0];
    fromleft2 = coords_begin2[actual_board][1];

    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");
    let cat2 = document.getElementById('characterp2'+actual_board)
    cat2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    cat2.setAttribute('src',"../../../images/"+charap2+"down.png");
    
    for(let j= 0; j < levers[actual_board].length; j++)
    {
        let idLevers = j + (actual_board)*100
        if(levers[actual_board][j][2] == "off"){
            turn_on_lever(j,idLevers,height,length);
        }
    }

    let currentNumboard = actual_board+1

    for(let j= 0; j < pow_speed[actual_board].length; j++)
    {
        if(pow_speed[actual_board][j][2] == false){
            let idPow = "speed" + j + (actual_board)*100
            pow_speed[actual_board][j][2] = true
            create_element(currentNumboard, height, length, "items/powspeed.png", "pow"+idPow, pow_speed[actual_board][j][0], pow_speed[actual_board][j][1]);
        }
    }

    for(let j= 0; j < pow_switch[actual_board].length; j++)
    {
        if(pow_switch[actual_board][j][2] == false){
            
            let idPow = "switch" + j + (actual_board)*100
            pow_switch[actual_board][j][2] = true
            create_element(currentNumboard, height, length, "items/powswitch.png", "pow"+idPow, pow_switch[actual_board][j][0], pow_switch[actual_board][j][1]);
        }
    }
}

function dest_upward_p1(height,length){
    if((boards[actual_board][fromtop1-1][fromleft1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop1-1,fromleft1))
        &&(boards[actual_board][fromtop1-1][fromleft1]!=4)
        &&(!isSuperposition(fromtop1-1,fromleft1,fromtop2,fromleft2))){
        fromtop1--;
        playMove()
        check_lever_superposition(fromleft1, fromtop1,height,length);
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0 || boards[actual_board][fromtop1][fromleft1]==6)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}

function dest_upward_p2(height,length){
    if((boards[actual_board][fromtop2-1][fromleft2]!=2)
        &&(boards[actual_board][fromtop2-1][fromleft2]!=3)
        &&(!isAdditionnalBlockInTheWay(fromtop2-1,fromleft2))
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2-1,fromleft2))){
        fromtop2--;
        playMove()
        check_lever_superposition(fromleft2, fromtop2,height,length);
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0 || boards[actual_board][fromtop2][fromleft2]==6)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_downward_p1(height,length){
    if((boards[actual_board][fromtop1+1][fromleft1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop1+1,fromleft1))
        &&(boards[actual_board][fromtop1+1][fromleft1]!=4)
        &&(!isSuperposition(fromtop1+1,fromleft1,fromtop2,fromleft2))){
        fromtop1++;
        playMove()
        check_lever_superposition(fromleft1, fromtop1,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0 || boards[actual_board][fromtop1][fromleft1]==6)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_downward_p2(height,length){
    if((boards[actual_board][fromtop2+1][fromleft2]!=2)
        &&(boards[actual_board][fromtop2+1][fromleft2]!=3)
        &&(!isAdditionnalBlockInTheWay(fromtop2+1,fromleft2))
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2+1,fromleft2))){
        fromtop2++;
        playMove()
        check_lever_superposition(fromleft2, fromtop2,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0 || boards[actual_board][fromtop2][fromleft2]==6)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}


function dest_leftward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1-1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop1,fromleft1-1))
        &&(boards[actual_board][fromtop1][fromleft1-1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1-1,fromtop2,fromleft2))){
        fromleft1--;
        playMove()
        check_lever_superposition(fromleft1, fromtop1,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0 || boards[actual_board][fromtop1][fromleft1]==6)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_leftward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2-1]!=2)
        &&(boards[actual_board][fromtop2][fromleft2-1]!=3)
        &&(!isAdditionnalBlockInTheWay(fromtop2,fromleft2-1))
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2-1))){
        fromleft2--;
        playMove()
        check_lever_superposition(fromleft2, fromtop2,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0 || boards[actual_board][fromtop2][fromleft2]==6)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_rigthward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1+1]!=2)
        &&(!isAdditionnalBlockInTheWay(fromtop1,fromleft1+1))
        &&(boards[actual_board][fromtop1][fromleft1+1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1+1,fromtop2,fromleft2))){
        fromleft1++;
        playMove()
        check_lever_superposition(fromleft1, fromtop1,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0 || boards[actual_board][fromtop1][fromleft1]==6)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_rigthward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2+1]!=2)
        &&(boards[actual_board][fromtop2][fromleft2+1]!=3)
        &&(!isAdditionnalBlockInTheWay(fromtop2,fromleft2+1))
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2+1))){
        fromleft2++;
        playMove()
        check_lever_superposition(fromleft2, fromtop2,height,length);
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0 || boards[actual_board][fromtop2][fromleft2]==6)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}


function isSuperposition(ptop1,pleft1,ptop2,pleft2){
    if((ptop1==ptop2)&&(pleft1==pleft2)){
        return true;
    }
    return false;
    // no collision = just return false
}