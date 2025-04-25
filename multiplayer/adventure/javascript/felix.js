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
            } else {
                moveBossDown()
            }
        }
        else if (is_input_down_p2_multiplayer(e))  { // going down p1 - S key
            if(!playerOneImmo){
                dest_downward_p1(height,length);
            } else {
                moveBossUp()
            }
        }
        else if (is_input_left_p2_multiplayer(e))  { // going left p1 - Q key
            if(!playerOneImmo){
                dest_leftward_p1(height,length);
            } else {
                moveBossRight()
            }
        }
        else if (is_input_right_p2_multiplayer(e))  { // going rigth p1 - D key
            if(!playerOneImmo){
                dest_rigthward_p1(height,length);
            } else {
                moveBossLeft()
            }
        }
        else if ((e.keyCode == '38')) { // going up for p2
            if(!playerTwoImmo){
                dest_upward_p2(height,length);
            } else {
                moveBossDown()
            }
        } 
        else if ((e.keyCode == '40')) { // going down for p2
            if(!playerTwoImmo){
                dest_downward_p2(height,length);
            } else {
                moveBossUp()
            }
        } 
        else if ((e.keyCode == '37')) { // going left for p2
            if(!playerTwoImmo){
                dest_leftward_p2(height,length);
            } else {
                moveBossRight()
            }
        } 
        else if ((e.keyCode == '39')) { // going right for p2
            if(!playerTwoImmo){
                dest_rigthward_p2(height,length);
            } else {
                moveBossLeft()
            }
        }
        nbCoups++;
        check_get_powItem();
        isFelixTouch()
    }
}

// --------------------------------------------------//
//                                                   //
//                  FELIX MOVEMENTS                  //
//                                                   //
// --------------------------------------------------//

var bossId;
var felixTop = coords_begin_felix[0]
var felixLeft = coords_begin_felix[1]

function start_felix(){
    create_element(actual_board+1, 5, 3.5, "p21left.png", "boss" + actual_board, felixTop, felixLeft)
    moveFelix(300)
}


function moveBossDown(){
    if((felixTop<=14)&&(!isStop)){
        felixTop++;
        let felix = document.getElementById('boss'+actual_board);
        felix.setAttribute('src',"../../../images/p21down.png");
        felix.setAttribute('style', "position: fixed;top : " + (5*felixTop+5) + "vh;left : " + (3.5*felixLeft+5) + "vw;");
    }
    checkIsBomb()
    isFelixTouch()
}

function moveBossUp(){
    if((felixTop>0)&&(!isStop)){
        felixTop--;
        let felix = document.getElementById('boss'+actual_board);
        felix.setAttribute('src',"../../../images/p21up.png");
        felix.setAttribute('style', "position: fixed;top : " + (5*felixTop+5) + "vh;left : " + (3.5*felixLeft+5) + "vw;");
    }
    checkIsBomb()
    isFelixTouch()
}

function moveBossLeft(){
    if((felixLeft>0)&&(!isStop)){
        felixLeft--;
        let felix = document.getElementById('boss'+actual_board);
        felix.setAttribute('src',"../../../images/p21left.png");
        felix.setAttribute('style', "position: fixed;top : " + (5*felixTop+5) + "vh;left : " + (3.5*felixLeft+5) + "vw;");
    }
    checkIsBomb()
    isFelixTouch()
}

function moveBossRight(){
    if((felixLeft<=24)&&(!isStop)){
        felixLeft++;
        let felix = document.getElementById('boss'+actual_board);
        felix.setAttribute('src',"../../../images/p21right.png");
        felix.setAttribute('style', "position: fixed;top : " + (5*felixTop+5) + "vh;left : " + (3.5*felixLeft+5) + "vw;");
    }
    checkIsBomb()
    isFelixTouch()
}

function checkIsBomb(){
    for(let j= 0; j < item[actual_board].length; j++)
    {
        if(item[actual_board][j][2]){
            if((item[actual_board][j][0]==felixTop)&&(item[actual_board][j][1]==felixLeft)){
                document.getElementById('item'+j).remove();
                item[actual_board][j][2] = false;
                loseFelixHeart();
                stopBoss()
                moveFelix(60+felix_life*60)
                freezeCharacter("boss0");
            }
        }
    }
}


function isFelixTouch(){
    if(((felixLeft==fromleft1)&&(felixTop==fromtop1)) || ((felixLeft==fromleft2)&&(felixTop==fromtop2))){
        // restart the page, so restart the level
        beginMaze()
    }
}

function moveFelixCloser() {
    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    const distTo1 = distance(felixTop, felixLeft, fromtop1, fromleft1);
    const distTo2 = distance(felixTop, felixLeft, fromtop2, fromleft2);
    
    const targetTop = distTo1 <= distTo2 ? fromtop1 : fromtop2;
    const targetLeft = distTo1 <= distTo2 ? fromleft1 : fromleft2;

    if (felixTop !== targetTop) {
        if (targetTop > felixTop) {
            moveBossDown();
        } else {
            moveBossUp();
        }
    } else if (felixLeft !== targetLeft) {
        if (targetLeft > felixLeft) {
            moveBossRight();
        } else {
            moveBossLeft();
        }
    }
}



function moveFelix(speedFelix) {
    bossId = setInterval(() => {
        if((!isBrain)&&(!game_ended)&&(!inpause)){
            moveFelixCloser()
        }
    }, speedFelix);
}


function stopBoss() {
    clearInterval(bossId);
}

function moveBossHorizontally(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(bossLeft > fromleft){
        bossLeft--; 
        ghost.setAttribute('src',"../../../images/p"+number_boss+"left.png");
    }else{
        bossLeft++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"right.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
}


function moveBossVertically(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(bossTop > fromtop){
        bossTop--;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"up.png");
    }else{
        bossTop++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"down.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
}




