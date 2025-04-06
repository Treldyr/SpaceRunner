// --------------------------------------------------//
//                                                   //
//          FUNCTIONS FROM INTRO AND DIALOG          //
//                                                   //
// --------------------------------------------------//


function updateStylesheet(previousStyle,nextStyle) {
    const oldLink = document.querySelector("link[href='../../../css/planets/"+previousStyle+".css']");
    if (oldLink) {
        oldLink.parentNode.removeChild(oldLink);
    }
    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = "../../../css/planets/"+nextStyle+".css";
    document.head.appendChild(newLink);
}

function updateBackground(imagePath) {
    document.querySelectorAll('.background-image').forEach(element => {
        element.style.background = `url('${imagePath}') no-repeat center center fixed`;
        element.style.backgroundSize = "cover";
    });
}

function die_from_ghost(){
    stopGhost();
    reset_ghost_and_player();
    moveGhost(6)
}

function reset_ghost_and_player(){
    reset_player()
    ghostTop = coords_begin_ghost[actual_board][0];
    ghostLeft = coords_begin_ghost[actual_board][1];
    
    let ghost = document.getElementById('ghost'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
}

function reset_player(){
    fromtop = coords_begin[actual_board][0];
    fromleft = coords_begin[actual_board][1];
    
    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(5*fromtop+5)+"vh;left : "+(3.5*fromleft+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");
}

// --------------------------------------------------//
//                                                   //
//           GENERAL FUNCTIONS FOR BOSS              //
//                                                   //
// --------------------------------------------------//


function respawnFromBrahma(){
    reset_player();
    restartMiniBosses1()
    delete_shuriken(6)
    stopBrahmaArm()
    brahma_life = 10
    for(let j= 1; j < 11; j++)
    {
        document.getElementById('heart'+j).style.display = "block";
    }
}

function loseAHeart(){
    document.getElementById('heart'+brahma_life).style.display = "none";
    brahma_life--;
}

// ---------------------------------------------------//
//                                                    //
//                FUNCTIONS MINI-BOSS 1               //
//                                                    //
// ---------------------------------------------------//

// mini-boss 1 variables
var Boss1Id;
var boss1Top = 0;
var boss1Left = 0;
var powshurikenBoss1Id;
var shurikenBoss1Available = true
var fromtopShurikenBoss1 = 0
var fromleftShurikenBoss1 = 0

var Boss2Id;
var boss2Top = 0;
var boss2Left = 0;

function startMiniBosses1() {
    initializeMiniBosses1()
    moveMiniBoss1()
    moveMiniBoss2()
}


// --------------------------------------------------//
//                                                   //
//             FUNCTIONS STOPS ATTACKS               //
//                                                   //
// --------------------------------------------------//


function stopBrahma() {
    clearInterval(brahmaId);
}

// --------------------------------------------------//
//                                                   //
//             FUNCTIONS ATTACKS BRAHMA              //
//                                                   //
// --------------------------------------------------//

// boss variables
var brahma_life = 10;
var brahmaId;
var brahmaLoop = 0;
var brahmaTop = 0;
var brahmaLeft = 0;

// attacks id
var attackHitWithArmId;

function startAttacksBrahma() {
    let brahmaPhase = 0;
    brahmaId = setInterval(() => {
        if(!game_ended){
            brahmaLoop++;
            brahmaPhase = brahmaLoop%5;
            switch(brahmaPhase){
                case 0:
                    hitwithArms(250) // TODO change this to something a heart is losable
                break;
                case 1:
                    hitwithArms(250)
                break;
                case 2:
                    hitwithArms(250)
                break;
                case 3:
                    hitwithArms(250)
                break;
                case 4:
                    hitwithArms(250)
                break;
                default:
                    console.log('error phase number')
            }
        }
    }, 10000); // all 10 secs
} // TODO add phases