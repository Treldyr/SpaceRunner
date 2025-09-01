// --------------------------------------------------//
//                                                   //
//             COMMUN FUNCTION BOSSES                //
//                                                   //
// --------------------------------------------------//


function initializeMiniBosses2() {
    bossDarkTop = coords_begin_boss[2][0];
    bossDarkLeft = coords_begin_boss[2][1];
    create_element(actual_board+1, 3, 2, "p16down.png", "boss16", coords_begin_boss[2][0], coords_begin_boss[2][1])
}


function restartMiniBosses2() {
    bossDarkTop = coords_begin_boss[2][0];
    bossDarkLeft = coords_begin_boss[2][1];
    document.getElementById('boss16').setAttribute('style',"position: fixed;top : "+(3*coords_begin_boss[2][0]+5)+"vh;left : "+(2*coords_begin_boss[2][1]+5)+"vw;");
}

// --------------------------------------------------//
//                                                   //
//                FUNCTIONS BOSS DARK                //
//                                                   //
// --------------------------------------------------//

function moveBossDark(number_boss) {
    bossDarkId = setInterval(() => {
        if((!inpause)){
            nbTourBossDark++
            let diffLeft;
            let diffTop;

            if(nbTourBossDark%100==0){
                doBossDarkTeleportation();
            } else {
                if (bossDarkLeft > fromleft) {
                    diffLeft = bossDarkLeft - fromleft;
                } else {
                    diffLeft = fromleft - bossDarkLeft;
                }
                if (bossDarkTop > fromtop) {
                    diffTop = bossDarkTop - fromtop;
                } else {
                    diffTop = fromtop - bossDarkTop;
                }
        
                if (diffLeft > diffTop) {
                    moveBossDarkHorizontally(number_boss);
                } else {
                    moveBossDarkVertically(number_boss);
                }
                // TODO if same place
            }
        }
    }, 300);
}

function doBossDarkTeleportation(){
    bossDarkTop = getRandomIntMax(14)+1
    bossDarkLeft = getRandomIntMax(23)+1
    hide_boss_dark()
}


function stopBossDark() {
    clearInterval(bossDarkId);
}

function moveBossDarkHorizontally(number_boss){
    if(bossDarkLeft > fromleft){
        bossDarkLeft--;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss16');
            ghost.setAttribute('src',"../../../images/p"+number_boss+"left.png");
            ghost.setAttribute('style', "position: fixed;top : " + (3*bossDarkTop+5) + "vh;left : " + (2*bossDarkLeft+5) + "vw;");
        }
    }else{
        bossDarkLeft++;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss16');
            ghost.setAttribute('src',"../../../images/p"+number_boss+"right.png");
            ghost.setAttribute('style', "position: fixed;top : " + (3*bossDarkTop+5) + "vh;left : " + (2*bossDarkLeft+5) + "vw;");
        }
    }
}


function moveBossDarkVertically(number_boss){
    if(bossDarkTop > fromtop){
        bossDarkTop--;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss16');
            ghost.setAttribute('src',"../../../images/p"+number_boss+"up.png");
            ghost.setAttribute('style', "position: fixed;top : " + (3*bossDarkTop+5) + "vh;left : " + (2*bossDarkLeft+5) + "vw;");
        }
    }else{
        bossDarkTop++;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss16');
            ghost.setAttribute('src',"../../../images/p"+number_boss+"down.png");
            ghost.setAttribute('style', "position: fixed;top : " + (3*bossDarkTop+5) + "vh;left : " + (2*bossDarkLeft+5) + "vw;");
        }
    }
    
}

function show_boss_dark(){
    let boss = document.getElementById('boss16');
    boss.setAttribute('style', "position: fixed;top : " + (3*bossDarkTop+5) + "vh;left : " + (2*bossDarkLeft+5) + "vw;");
}

function hide_boss_dark(){
    let boss = document.getElementById('boss16');
    boss.style.display = "none";
}

function areCoordinatesClose() {
    const manhattanDistance = Math.abs(bossDarkLeft - fromleft) + Math.abs(bossDarkTop - fromtop);
    if (fromleft === bossDarkLeft || fromtop === bossDarkTop) {
        return manhattanDistance <= 3;
    } else {
        return manhattanDistance <= 4;
    }
}


// --------------------------------------------------//
//                                                   //
//                FUNCTIONS BOSS PAPY                //
//                                                   //
// --------------------------------------------------//

//TODO