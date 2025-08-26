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

function launchEye(idEye,eye_left,eyeSpeed){
    let eye_top = 0
    let nbLoopEye = 0;
    let launchEyeId = setInterval(() => {
        if(!inpause){
            nbLoopEye++;
            eye_top++;
            document.getElementById(idEye).setAttribute('style', "position: fixed;top : " + (3*eye_top+5) + "vh;left : " + (2*eye_left+5) + "vw;");
            if((eye_top==fromtop)&&(eye_left==fromleft)){
                respawnFromBrahma()
            }
        }
        if(nbLoopEye==50){
            stopBrahmaEye(idEye)
            clearInterval(launchEyeId)
        }
    }, eyeSpeed);
}

function hitwithEyes(attackSpeed,eyeSpeed){
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
            launchEye(idEye,spawnFromWhere,eyeSpeed)
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


