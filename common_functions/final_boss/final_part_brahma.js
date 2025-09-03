var lastHitEyesId;

var lastEyesTopId;
var lastEyesLeftId;

var lastEyeCoordList = Array.from({ length: 200 }, () => [0, 0]);


function startLastAttacksBrahma() {
    let brahmaPhase = 0;
    lastHitEyesId = setInterval(() => {
        if(!game_ended){
            brahmaPhase = brahmaLoop%5;
            switch(brahmaPhase){
                case 0:
                    finalHitwithEyesFromTop(100,150)
                break;
                case 1:
                    finalHitwithEyesFromLeft(100,150)
                break;
                case 2:
                    finalHitwithEyesFromTop(100,150)
                break;
                case 3:
                    finalHitwithEyesFromLeft(100,150)
                break;
                case 4:
                    spawnBrahma()
                break;
                default:
                    console.log('error phase number')
            }
            brahmaLoop++;
        }
    }, 10000);
}


function stopLastAttacksBrahma(){
    if (lastHitEyesId) {
        clearInterval(lastHitEyesId);
        lastHitEyesId = null;
    }
    if (lastEyesTopId) {
        clearInterval(lastEyesTopId);
        lastEyesTopId = null;
    }
    if (lastEyesLeftId) {
        clearInterval(lastEyesLeftId);
        lastEyesLeftId = null;
    }
    for (k=0;k<lastEyeCoordList.length;k++){
        lastEyeCoordList[k][0] = 0
        lastEyeCoordList[k][1] = 0
        stopBrahmaEye("eye" + k)
    }
}


// --------------------------------------------------//
//                                                   //
//                FUNCTIONS LAUNCH                   //
//                                                   //
// --------------------------------------------------//


function lastLaunchEyeFromTop(idEye,eye_left,eyeSpeed,eyeCounter){
    let eye_top = 0;
    let nbLoopEye = 0;
    let launchId = setInterval(() => {
        if(!inpause){
            nbLoopEye++;
            eye_top++;
            lastEyeCoordList[eyeCounter] = [eye_top,eye_left]
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (3*eye_top+5) + "vh;left : " + (2*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==35){
            stopBrahmaEye(idEye)
            clearInterval(launchId)
        }
    }, eyeSpeed);
}

function lastLaunchEyeFromLeft(idEye,eye_top,eyeSpeed,eyeCounter){
    let eye_left = 0;
    let nbLoopEye = 0;
    let launchId = setInterval(() => {
        if(!inpause){
            nbLoopEye++;
            eye_left++;
            lastEyeCoordList[eyeCounter] = [eye_top,eye_left]
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (3*eye_top+5) + "vh;left : " + (2*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==45){
            stopBrahmaEye(idEye)
            clearInterval(launchId)
        }
    }, eyeSpeed);
}


// --------------------------------------------------//
//                                                   //
//                FUNCTIONS ATTACK                   //
//                                                   //
// --------------------------------------------------//

function finalHitwithEyesFromTop(attackSpeed,eyeSpeed){
    let eyeCounter = 0;
    let nbLoopAttack = 0;
    lastEyesTopId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(42)+1
            // 1 => Leftest case
            // 42 => Rightest case
            let idEye = "eye" + eyeCounter;
            create_Brahma_eye(actual_board+1,0,spawnFromWhere,idEye);
            lastLaunchEyeFromTop(idEye,spawnFromWhere,eyeSpeed,eyeCounter)
            nbLoopAttack++;
            eyeCounter++;
        }
        if(nbLoopAttack==100){
            clearInterval(lastEyesTopId)
        }
    }, attackSpeed);
}


function finalHitwithEyesFromLeft(attackSpeed,eyeSpeed){
    let eyeCounter = 100;
    let nbLoopAttack = 0;
    lastEyesLeftId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(30)+1
            // 1 => Topest case
            // 30 => Bottomest case
            let idEye = "eye" + eyeCounter;
            create_Brahma_eye(actual_board+1,spawnFromWhere,0,idEye);
            lastLaunchEyeFromLeft(idEye,spawnFromWhere,eyeSpeed,eyeCounter)
            nbLoopAttack++;
            eyeCounter++;
        }
        if(nbLoopAttack==100){
            clearInterval(lastEyesLeftId)
        }
    }, attackSpeed);
}