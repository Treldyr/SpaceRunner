var ghostId;
var nbTourGhost = 0;

var ghostTop1 = 0;
var ghostLeft1 = 0;
var ghostTop2 = 0;
var ghostLeft2 = 0;


function moveGhost() {
    ghostId = setInterval(() => {
        nbTourGhost++;
        if(nbTourGhost%2==0){
            moveFirstGhost();
        }else{
            moveSecondGhost()
        }
        checkGhost();
    }, 500);
}

function stopGhost() {
    clearInterval(ghostId);
}

function checkGhost(){
    if (((ghostLeft1 == fromleft1) && (ghostTop1 == fromtop1) &&(!p1_won)) 
    || ((ghostLeft1 == fromleft2) && (ghostTop1 == fromtop2) &&(!p2_won))
    || ((ghostLeft2 == fromleft1) && (ghostTop2 == fromtop1) &&(!p1_won))
    || ((ghostLeft2 == fromleft2) && (ghostTop2 == fromtop2) &&(!p2_won)) )
    {
        stopGhost()
        goPlanet(1)
    }
}

function moveFirstGhost(){
    let diffLeft;
    let diffTop;
    if (ghostLeft1 > fromleft1) {
        diffLeft = ghostLeft1 - fromleft1;
    } else {
        diffLeft = fromleft1 - ghostLeft1;
    }
    if (ghostTop1 > fromtop1) {
        diffTop = ghostTop1 - fromtop1;
    } else {
        diffTop = fromtop1 - ghostTop1;
    }
    if (diffLeft > diffTop) {
        moveGhostHorizontally1();
    } else {
        moveGhostVertically1();
    }
}


function moveSecondGhost(){
    let diffLeft;
    let diffTop;
    if (ghostLeft2 > fromleft2) {
        diffLeft = ghostLeft2 - fromleft2;
    } else {
        diffLeft = fromleft2 - ghostLeft2;
    }
    if (ghostTop2 > fromtop2) {
        diffTop = ghostTop2 - fromtop2;
    } else {
        diffTop = fromtop2 - ghostTop2;
    }
    if (diffLeft < diffTop) {
        moveGhostVertically2();
    } else {
        moveGhostHorizontally2();
    }
}


function moveGhostHorizontally1(){
    if(ghostLeft1 > fromleft1){
        ghostLeft1--; 
    }else{
        ghostLeft1++;
    }
    let ghost = document.getElementById('ghost'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(3*ghostTop1+5)+"vh;left : "+(2*ghostLeft1+5)+"vw;");
}

function moveGhostHorizontally2(){
    if(ghostLeft2 > fromleft2){
        ghostLeft2--; 
    }else{
        ghostLeft2++;
    }
    let ghost = document.getElementById('ghost2_'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(3*ghostTop2+5)+"vh;left : "+(2*ghostLeft2+5)+"vw;");
}


function moveGhostVertically1(){
    if(ghostTop1 > fromtop1){
        ghostTop1--; 
    }else{
        ghostTop1++;
    }
    let ghost = document.getElementById('ghost'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(3*ghostTop1+5)+"vh;left : "+(2*ghostLeft1+5)+"vw;");
}

function moveGhostVertically2(){
    if(ghostTop2 > fromtop2){
        ghostTop2--; 
    }else{
        ghostTop2++;
    }
    let ghost = document.getElementById('ghost2_'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(3*ghostTop2+5)+"vh;left : "+(2*ghostLeft2+5)+"vw;");
}