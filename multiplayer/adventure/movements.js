var fromtop1 =0;
var fromleft1 = 0;
var fromtop2 =0;
var fromleft2 = 0;

function dest_upward_p1(){
    if((boards[actual_board][fromtop1-1][fromleft1]!=2)&&(!isSuperposition(fromtop1-1,fromleft1,fromtop2,fromleft2))){
        fromtop1--;
        playMove()
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop1+5)+"vh;left : "+(2*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}

function dest_upward_p2(){
    if((boards[actual_board][fromtop2-1][fromleft2]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2-1,fromleft2))){
        fromtop2--;
        playMove()
    }else{
        playWallHit() 
    }
    
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"up.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop2+5)+"vh;left : "+(2*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_downward_p1(){
    if((boards[actual_board][fromtop1+1][fromleft1]!=2)&&(!isSuperposition(fromtop1+1,fromleft1,fromtop2,fromleft2))){
        fromtop1++;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop1+5)+"vh;left : "+(2*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_downward_p2(){
    if((boards[actual_board][fromtop2+1][fromleft2]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2+1,fromleft2))){
        fromtop2++;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"down.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop2+5)+"vh;left : "+(2*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}


function dest_leftward_p1(){
    if((boards[actual_board][fromtop1][fromleft1-1]!=2)&&(!isSuperposition(fromtop1,fromleft1-1,fromtop2,fromleft2))){
        fromleft1--;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop1+5)+"vh;left : "+(2*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_leftward_p2(){
    if((boards[actual_board][fromtop2][fromleft2-1]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2-1))){
        fromleft2--;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"left.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop2+5)+"vh;left : "+(2*fromleft2+5)+"vw;");
    if(boards[actual_board][fromtop2][fromleft2]==0)
    {
        p2_won = true;
        chara2.style.display = "none";
        fromtop2=0;
    }
}

function dest_rigthward_p1(){
    if((boards[actual_board][fromtop1][fromleft1+1]!=2)&&(!isSuperposition(fromtop1,fromleft1+1,fromtop2,fromleft2))){
        fromleft1++;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('character'+actual_board);
    chara2.setAttribute('src',"../../../images/"+chara+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop1+5)+"vh;left : "+(2*fromleft1+5)+"vw;");
    if(boards[actual_board][fromtop1][fromleft1]==0)
    {
        p1_won = true;
        chara2.style.display = "none";
        fromtop1=0;
    }
}


function dest_rigthward_p2(){
    if((boards[actual_board][fromtop2][fromleft2+1]!=2)&&(!isSuperposition(fromtop1,fromleft1,fromtop2,fromleft2+1))){
        fromleft2++;
        playMove()
    }else{
        playWallHit() 
    }
    let chara2 = document.getElementById('characterp2'+actual_board);
    chara2.setAttribute('src',"../../../images/"+charap2+"right.png");
    chara2.setAttribute('style',"position: fixed;top : "+(3*fromtop2+5)+"vh;left : "+(2*fromleft2+5)+"vw;");
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
    // no collision = juste retourner false
}