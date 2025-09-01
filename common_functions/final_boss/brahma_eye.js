var hitEyesId

function create_Brahma_eye(numboard,pos_top,pos_left, idEye) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/specific/brahma_eye.png");
    the_image.setAttribute('style', "position: fixed;top : " + (3*pos_top+5) + "vh;left : " + (2*pos_left+5) + "vw;");
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

function launchEyeFromTop(idEye,eye_left,eyeSpeed,eyeCounter,areEyesfromtop){
    let eye_top
    if(areEyesfromtop){
        eye_top = 0
    } else {
        eye_top = 30
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
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (3*eye_top+5) + "vh;left : " + (2*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==35){
            stopBrahmaEye(idEye)
            clearInterval(launchEyeId)
        }
    }, eyeSpeed);
}


function launchEyeFromLeft(idEye,eye_top,eyeSpeed,eyeCounter,areEyesfromleft){
    let eye_left
    if(areEyesfromleft){
        eye_left = 0
    } else {
        eye_left = 42
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
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (3*eye_top+5) + "vh;left : " + (2*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==45){
            stopBrahmaEye(idEye)
            clearInterval(launchEyeId)
        }
    }, eyeSpeed);
}

function hitwithEyesFromTop(attackSpeed,eyeSpeed,areEyesfromtop){
    let eyeCounter = 0;
    let nbLoopAttack = 0;
    hitEyesId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(42)+1
            // 1 => Leftest case
            // 42 => Rightest case
            eyeCounter++;
            let idEye = "eye" + eyeCounter;
            create_Brahma_eye(actual_board+1,0,spawnFromWhere,idEye);
            launchEyeFromTop(idEye,spawnFromWhere,eyeSpeed,eyeCounter,areEyesfromtop)
            nbLoopAttack++;
        }
        if(nbLoopAttack==50){
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


function hitwithEyesFromLeft(attackSpeed,eyeSpeed,areEyesfromleft){
    let eyeCounter = 0;
    let nbLoopAttack = 0;
    hitEyesId = setInterval(() => {
        if(!inpause){
            let spawnFromWhere = getRandomIntMax(30)+1
            // 1 => Topest case
            // 30 => Bottomest case
            eyeCounter++;
            let idEye = "eye" + eyeCounter;
            create_Brahma_eye(actual_board+1,spawnFromWhere,0,idEye);
            launchEyeFromLeft(idEye,spawnFromWhere,eyeSpeed,eyeCounter,areEyesfromleft)
            nbLoopAttack++;
        }
        if(nbLoopAttack==50){
            clearInterval(hitEyesId)
        }
    }, attackSpeed);
}

