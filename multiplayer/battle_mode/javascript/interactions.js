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
var isFast = false
var isTrans = false
var isBrained = false
var pow1_used = false
var pow2_used = false
var pow3_used = false
var pow4_used = false
var fromtopBomb = 0
var fromleftBomb = 0
var fromtopShuriken = 0
var fromleftShuriken = 0
var lastmMoveByFantom = "u"

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

            if(isBrained){
                if(!isReverse){
                    dest_upward_p2();
                    if(isFast){
                        dest_upward_p2();
                    }
                }else{
                    dest_downward_p2();
                    if(isFast){
                        dest_downward_p2();
                    }
                }
            } else {
                if(!isReverse){
                    dest_upward_p1();
                    if(isFast){
                        dest_upward_p1();
                    }
                }else{
                    dest_downward_p1();
                    if(isFast){
                        dest_downward_p1();
                    }
                }
            }  
        }
        else if (e.keyCode == '40'){ // going down p1

            if(isBrained){
                if(!isReverse){
                    dest_downward_p2();
                    if(isFast){
                        dest_downward_p2();
                    }
                }else{
                    dest_upward_p2();
                    if(isFast){
                        dest_upward_p2();
                    }
                }
            } else {
                if(!isReverse){
                    dest_downward_p1();
                    if(isFast){
                        dest_downward_p1();
                    }
                }else{
                    dest_upward_p1();
                    if(isFast){
                        dest_upward_p1();
                    }
                }
            }

        }
        else if (e.keyCode == '37'){ // going left p1

            if(isBrained){
                if(!isReverse){
                    dest_leftward_p2();
                    if(isFast){
                        dest_leftward_p2();
                    }
                }else{
                    dest_rigthward_p2();
                    if(isFast){
                        dest_rigthward_p2();
                    }
                }
            } else {
                if(!isReverse){
                    dest_leftward_p1();
                    if(isFast){
                        dest_leftward_p1();
                    }
                }else{
                    dest_rigthward_p1();
                    if(isFast){
                        dest_rigthward_p1();
                    }
                }
            }
        }
        else if (e.keyCode == '39') { // going rigth p1
            if(isBrained){
                if(!isReverse){
                    dest_rigthward_p2();
                    if(isFast){
                        dest_rigthward_p2();
                    }
                }else{
                    dest_leftward_p2();
                    if(isFast){
                        dest_leftward_p2();
                    }
                }
            } else {
                if(!isReverse){
                    dest_rigthward_p1();
                    if(isFast){
                        dest_rigthward_p1();
                    }
                }else{
                    dest_leftward_p1();
                    if(isFast){
                        dest_leftward_p1();
                    }
                }
        }
        }
        else if ((e.keyCode == '90')&&(!isStop)) { // Z key for going up for p2
            if(!isBrained){
                dest_upward_p2();
            } else {
                dest_upward_p1();
            }
        } 
        else if ((e.keyCode == '83')&&(!isStop)) { // S key for going down for p2
            if(!isBrained){
                dest_downward_p2();
            } else {
                dest_downward_p1();
            }
        } 
        else if ((e.keyCode == '81')&&(!isStop)) { // Q key for going left for p2
            if(!isBrained){
                dest_leftward_p2();
            } else {
                dest_leftward_p1();
            }
        } 
        else if ((e.keyCode == '68')&&(!isStop)) { // D key for going right for p2
            if(!isBrained){
                dest_rigthward_p2();
            } else {
                dest_rigthward_p1();
            }
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
            checkShuriken()  // the player touch the shuriken
        }
    }
}

// this is part of the interactions because we check it when the character move ! 
function checkShuriken(){
    if((fromtop1==fromtopShuriken)&&(fromleft1==fromleftShuriken)){
        finish_labyrinth(false)
    }
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
    fromleftShuriken = 0;
    fromtopShuriken = 0;
    reactivate_all_powers()
}