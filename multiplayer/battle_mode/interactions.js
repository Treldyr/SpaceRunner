var CountDownSeconds = 60
var game_ended = false
var ghostId;
var nbTourGhost = 0;
var nbvictoryP1 = 0;
var nbvictoryP2 = 0;

// POWER VARS
var isReverse = false
var isStop = false
var isInvisible = false
var pow1_used = false
var pow2_used = false
var pow3_used = false
var pow4_used = false
var fromtopBomb = 0
var fromleftBomb = 0

document.onkeydown = checkKey;
var fromtop1 =0;
var fromleft1 = 0;
var fromtop2 =0;
var fromleft2 = 0;
var actual_board = 0;
var chara = "p0";
var charap2 = "p0";
var inpause = false;




retrieveBattlePlayers()

for (i=0;i<document.getElementsByClassName("page").length;i++){
    document.getElementsByClassName("page")[i].style.display = "none";
}
document.getElementById('page1').style.display = "block";

construct_board(1)
startCountDown(CountDownSeconds)


function checkKey(e) {
e = e || window.event;
if (e.keyCode == '27'){ // touche echap
    if(inpause){
        closePause() 
    }else{
        showPause()
    }
    }else {
        if (((e.keyCode == '32')||(e.keyCode == '13'))&&(game_ended)) { // Space key or Enter key
            rebegin();
        }
        if (e.keyCode == '38'){ // going up p1
            if(!isReverse){
                dest_upward_p1();
            }else{
                dest_downward_p1();
            }
        }
        else if (e.keyCode == '40'){ // going down p1
            if(!isReverse){
                dest_downward_p1();
            }else{
                dest_upward_p1();
            }
        }
        else if (e.keyCode == '37'){ // going left p1
            if(!isReverse){
                dest_leftward_p1();
            }else{
                dest_rigthward_p1();
            }
        }
        else if (e.keyCode == '39') { // going rigth p1
            if(!isReverse){
                dest_rigthward_p1();
            }else{
                dest_leftward_p1();
            }
        }
        else if ((e.keyCode == '90')&&(!isStop)) { // Z key for going up for p2
            dest_upward_p2();
        } 
        else if ((e.keyCode == '83')&&(!isStop)) { // S key for going down for p2
            dest_downward_p2();
        } 
        else if ((e.keyCode == '81')&&(!isStop)) { // Q key for going left for p2
            dest_leftward_p2();
        } 
        else if ((e.keyCode == '68')&&(!isStop)) { // D key for going right for p2
            dest_rigthward_p2();
        }
        else if (((e.keyCode ==  '87')||(e.keyCode ==  '69'))&&(!pow1_used)){ // W or E key for power 1
            launchPow1()
        }
        else if (((e.keyCode ==  '82')||(e.keyCode ==  '88'))&&(!pow2_used)){ // X or R key for power 2
            launchPow2()
        }
        else if ((e.keyCode == '77')&&(!pow3_used)){ // M key for power 3 
            launchPow3()
        }
        else if ((e.keyCode ==  '76')&&(!pow4_used)){ // L key for power 4 
            launchPow4()
        }
        if(!game_ended){
            if(countdownFinished){ // the countdown turn to 0
                finish_labyrinth(false);
            }
            if(boards[actual_board][fromtop1][fromleft1]==0) // the player touch the arrival
            {
                finish_labyrinth(true)
            }
            if((fromtop1==fromtop2)&&(fromleft1==fromleft2)){ // the player touch the ghost
                finish_labyrinth(false)
            }
            if((fromtop1==fromtopBomb)&&(fromleft1==fromleftBomb)){ // the player touch the bomb
                finish_labyrinth(false)
            }
        }
        
    }
}

// construction of the labyrinth

function construct_board(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
}

function construct_line(line,numline,numboard){
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"img"+line[j]+".png");
        the_image.setAttribute('style', "position: fixed;top : " + (5 * numline + 5) + "vh;left : " + (3.5 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

function create_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * coords_begin_1[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin_1[numboard - 1][1] + 5) + "vw;");
    the_image.setAttribute('id', "character" + actual_board);
    the_image.className = "img_of_laby";
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop1 = coords_begin_1[numboard - 1][0];
    fromleft1 = coords_begin_1[numboard - 1][1];


    let the_image2 = document.createElement('img');
    the_image2.setAttribute('src', "../../../images/fantom" + charap2 + ".png");
    the_image2.setAttribute('style', "position: fixed;top : " + (5 * coords_begin_2[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin_2[numboard - 1][1] + 5) + "vw;");
    the_image2.className = "img_of_laby";
    the_image2.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image2);
    fromtop2 = coords_begin_2[numboard - 1][0];
    fromleft2 = coords_begin_2[numboard - 1][1];
}

// movements of players

function dest_upward_p1(){
    if((boards[actual_board][fromtop1-1][fromleft1]!=3)&&(boards[actual_board][fromtop1-1][fromleft1]!=4)){
        fromtop1--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("up")
}

function dest_upward_p2(){
    if((boards[actual_board][fromtop2-1][fromleft2]!=2)&&(boards[actual_board][fromtop2-1][fromleft2]!=4)){
        fromtop2--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost()
}

function dest_downward_p1(){
    if((boards[actual_board][fromtop1+1][fromleft1]!=3)&&(boards[actual_board][fromtop1+1][fromleft1]!=4)){
        fromtop1++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("down")
}


function dest_downward_p2(){
    if((boards[actual_board][fromtop2+1][fromleft2]!=2)&&(boards[actual_board][fromtop2+1][fromleft2]!=4)){
        fromtop2++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost()
}


function dest_leftward_p1(){
    if((boards[actual_board][fromtop1][fromleft1-1]!=3)&&(boards[actual_board][fromtop1][fromleft1-1]!=4)){
        fromleft1--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("left")
}


function dest_leftward_p2(){
    if((boards[actual_board][fromtop2][fromleft2-1]!=2)&&(boards[actual_board][fromtop2][fromleft2-1]!=4)){
        fromleft2--;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost()
}

function dest_rigthward_p1(){
    if((boards[actual_board][fromtop1][fromleft1+1]!=3)&&(boards[actual_board][fromtop1][fromleft1+1]!=4)){
        fromleft1++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageCharacter("right")
}


function dest_rigthward_p2(){
    if((boards[actual_board][fromtop2][fromleft2+1]!=2)&&(boards[actual_board][fromtop2][fromleft2+1]!=4)){
        fromleft2++;
        playMove()
    }else{
        playWallHit() 
    }
    updateImageGhost()
}

// update the images of the players

function updateImageGhost(){
    if(!isInvisible){
        let chara2 = document.getElementById('ghost'+actual_board);
        chara2.setAttribute('style',"position: fixed;top : "+(5*fromtop2+5)+"vh;left : "+(3.5*fromleft2+5)+"vw;");
    }
}

function updateImageCharacter(direction){
    let chara1 = document.getElementById('character'+actual_board);
    chara1.setAttribute('src',"../../../images/"+chara+direction+".png");
    chara1.setAttribute('style',"position: fixed;top : "+(5*fromtop1+5)+"vh;left : "+(3.5*fromleft1+5)+"vw;");
}

// end labyrinth

function finish_labyrinth(dop1won){
    stopCountDown()
    game_ended = true
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "block";
    if(dop1won){
        nbvictoryP1++;
        document.getElementById('game_over_who_won').innerHTML = "Gagnant : Joueur 1 <img src='../../../images/"+chara +"down.png' width='40px' class='img-thumbnail'>";
    } else {
        nbvictoryP2++
        document.getElementById('game_over_who_won').innerHTML = "Gagnant : Joueur 2 <img src='../../../images/fantom"+charap2 +".png' width='40px' class='img-thumbnail'>" ;
    }
    document.getElementById('score_p1').innerHTML = "J1 : "+nbvictoryP1;
    document.getElementById('score_p2').innerHTML = "J2 : "+nbvictoryP2;
}

function rebegin() {
    document.getElementById('page2').style.display = "none";
    document.getElementById('page1').style.display = "block";
    document.getElementById('ghost'+actual_board).remove();
    document.getElementById('character'+actual_board).remove();
    create_character(1);
    startCountDown(CountDownSeconds)
    game_ended = false;
    fromleftBomb = 0;
    fromtopBomb = 0;
    reactivate_all_powers()
}