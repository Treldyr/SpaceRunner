var hitEyesId

function create_Brahma_eye(numboard,pos_top,pos_left, idEye) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/specific/brahma_eye.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5*pos_top+5) + "vh;left : " + (3.5*pos_left+5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', idEye);
    document.getElementById('laby' + numboard).appendChild(the_image);
}

function stopBrahmaEye(idEye) {
    let eye = document.getElementById(idEye)
    if(eye!=null){
        eye.remove()
    }
}

function launchEyeFromTop(idEye,eye_left,eyeSpeed,eyeCounter,areEyesfromtop,eyeCoordList){
    let eye_top
    if(areEyesfromtop){
        eye_top = 0
    } else {
        eye_top = 16
    }
    let nbLoopEye = 0;
    let launchEyeId = setInterval(() => {
        if(!inpause){
            nbLoopEye++;
            if(areEyesfromtop){
                eye_top++;
            } else {
                eye_top--;
            }
            eyeCoordList[eyeCounter] = [eye_top,eye_left]
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (5*eye_top+5) + "vh;left : " + (3.5*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==20){
            stopBrahmaEye(idEye)
            clearInterval(launchEyeId)
        }
    }, eyeSpeed);
}


function launchEyeFromLeft(idEye,eye_top,eyeSpeed,eyeCounter,areEyesfromleft,eyeCoordList){
    let eye_left
    if(areEyesfromleft){
        eye_left = 0
    } else {
        eye_left = 26
    }
    let nbLoopEye = 0;
    let launchEyeId = setInterval(() => {
        if(!inpause){
            nbLoopEye++;
            if(areEyesfromleft){
                eye_left++;
            } else {
                eye_left--; 
            }
            eyeCoordList[eyeCounter] = [eye_top,eye_left]
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (5*eye_top+5) + "vh;left : " + (3.5*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==30){
            stopBrahmaEye(idEye)
            clearInterval(launchEyeId)
        }
    }, eyeSpeed);
}

function hitwithEyesFromTop(attackSpeed,eyeSpeed,areEyesfromtop,isFirstHit){
    clearInterval(hitEyesId)
    let eyeCounter = 0;
    let nbLoopAttack = 0;
    let eyeCoordList = eyeCoordList2
    let fillingId = "sh"
    if(isFirstHit){
        eyeCoordList = eyeCoordList1
        fillingId = "fh"
    }
    hitEyesId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(26)+1
            // 1 => Leftest case
            // 26 => Rightest case
            eyeCounter++;
            let idEye = "eye" + eyeCounter + fillingId;
            create_Brahma_eye(actual_board+1,0,spawnFromWhere,idEye);
            launchEyeFromTop(idEye,spawnFromWhere,eyeSpeed,eyeCounter,areEyesfromtop,eyeCoordList)
            nbLoopAttack++;
        }
        if(nbLoopAttack==30){
            clearInterval(hitEyesId)
        }
    }, attackSpeed);
}

function stopEyesAttack(){
    if (hitEyesId) {
        clearInterval(hitEyesId);
        hitEyesId = null;
    }
}

// --------------------------------------------------//
//                                                   //
//        FUNCTIONS ATTACK FROM LEFT OR RIGHT        //
//                                                   //
// --------------------------------------------------//

// TODO this function is not used anymore ??
function hitwithEyesFromLeft(attackSpeed,eyeSpeed,areEyesfromleft,isFirstHit){
    clearInterval(hitEyesId)
    let eyeCounter = 0;
    let nbLoopAttack = 0;
    let eyeCoordList = eyeCoordList2
    let fillingId = "sh"
    if(isFirstHit){
        eyeCoordList = eyeCoordList1
        fillingId = "fh"
    }
    hitEyesId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(16)+1
            // 1 => Topest case
            // 16 => Bottomest case
            eyeCounter++;
            let idEye = "eye" + eyeCounter + fillingId;
            create_Brahma_eye(actual_board+1,spawnFromWhere,0,idEye);
            launchEyeFromLeft(idEye,spawnFromWhere,eyeSpeed,eyeCounter,areEyesfromleft,eyeCoordList)
            nbLoopAttack++;
        }
        if(nbLoopAttack==30){
            clearInterval(hitEyesId)
        }
    }, attackSpeed);
}

