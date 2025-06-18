var fromtop1 =0;
var fromleft1 = 0;
var fromtop2 =0;
var fromleft2 = 0;


function set_new_positions(e,height,length){
    if(!inpause){
        if ( is_input_up_p2_multiplayer(e)&&(!p1_won)) { // going up p1 - Z key
            dest_upward_p1(height,length);
        }
        else if (is_input_down_p2_multiplayer(e)&&(!p1_won))  { // going down p1 - S key
            dest_downward_p1(height,length);
        }
        else if (is_input_left_p2_multiplayer(e)&&(!p1_won))  { // going left p1 - Q key
            dest_leftward_p1(height,length);
        }
        else if (is_input_right_p2_multiplayer(e)&&(!p1_won))  { // going rigth p1 - D key
            dest_rigthward_p1(height,length);
        }
        else if ((e.keyCode == '38') && (!p2_won)) { // going up for p2
            dest_upward_p2(height,length);
        } 
        else if ((e.keyCode == '40') && (!p2_won)) { // going down for p2
            dest_downward_p2(height,length);
        } 
        else if ((e.keyCode == '37') && (!p2_won)) { // going left for p2
            dest_leftward_p2(height,length);
        } 
        else if ((e.keyCode == '39') && (!p2_won)) { // going right for p2
            dest_rigthward_p2(height,length);
        }
        nbCoups++;
    }
}

function dest_upward_p1(height,length){
    if((boards[actual_board][fromtop1-1][fromleft1]!=2)
        &&(boards[actual_board][fromtop1-1][fromleft1]!=3)
        &&(boards[actual_board][fromtop1-1][fromleft1]!=4)
        &&(!isSuperposition(fromtop1-1,fromleft1,fromtop2,fromleft2))){
        fromtop1--;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}

function dest_upward_p2(height,length){
    if((boards[actual_board][fromtop2-1][fromleft2]!=2)
        &&(boards[actual_board][fromtop2-1][fromleft2]!=3)
        &&(boards[actual_board][fromtop2-1][fromleft2]!=4)
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2-1,fromleft2))){
        fromtop2--;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_downward_p1(height,length){
    if((boards[actual_board][fromtop1+1][fromleft1]!=2)
        &&(boards[actual_board][fromtop1+1][fromleft1]!=3)
        &&(boards[actual_board][fromtop1+1][fromleft1]!=4)
        &&(!isSuperposition(fromtop1+1,fromleft1,fromtop2,fromleft2))){
        fromtop1++;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_downward_p2(height,length){
    if((boards[actual_board][fromtop2+1][fromleft2]!=2)
        &&(boards[actual_board][fromtop2+1][fromleft2]!=3)
        &&(boards[actual_board][fromtop2+1][fromleft2]!=4)
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2+1,fromleft2))){
        fromtop2++;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}


function dest_leftward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1-1]!=2)
        &&(boards[actual_board][fromtop1][fromleft1-1]!=3)
        &&(boards[actual_board][fromtop1][fromleft1-1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1-1,fromtop2,fromleft2))){
        fromleft1--;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_leftward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2-1]!=2)
        &&(boards[actual_board][fromtop2][fromleft2-1]!=3)
        &&(boards[actual_board][fromtop2][fromleft2-1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2-1))){
        fromleft2--;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_rigthward_p1(height,length){
    if((boards[actual_board][fromtop1][fromleft1+1]!=2)
        &&(boards[actual_board][fromtop1][fromleft1+1]!=3)
        &&(boards[actual_board][fromtop1][fromleft1+1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1+1,fromtop2,fromleft2))){
        fromleft1++;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_rigthward_p2(height,length){
    if((boards[actual_board][fromtop2][fromleft2+1]!=2)
        &&(boards[actual_board][fromtop2][fromleft2+1]!=3)
        &&(boards[actual_board][fromtop2][fromleft2+1]!=4)
        &&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2+1))){
        fromleft2++;
        playWaterFootstep()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
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