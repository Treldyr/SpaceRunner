function create_Brahma_arm(numboard,img_src,pos_top,pos_left) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', img_src);
    the_image.setAttribute('style', "position: fixed;top : " + (pos_top) + "vh;left : " + (pos_left) + "vw;");
    the_image.className = "arm-of-brahma";
    the_image.setAttribute('id', "brahma_arm");
    document.getElementById('laby' + numboard).appendChild(the_image);
}

function hitwithArms(attackSpeed){
    let spawnFromWhere = getRandomIntMax(4)
    // For spawnFromWhere
    // 0 => topLeft
    // 1 => topRight
    // 2 => bottomLeft
    // 3 => bottomRight
    let blast_left;
    let blast_top;
    let pos_left;
    let pos_top;
    let img_src;
    switch(spawnFromWhere){
        case 0:
            img_src = "../../../images/specific/brahma_arm_left.png"
            pos_left = -83
            pos_top = 8
            blast_left = -1
            blast_top = 14
        break;
        case 1:
            img_src = "../../../images/specific/brahma_arm_right.png"
            pos_left = 93
            pos_top = 8
            blast_left = 45
            blast_top = 14
        break;
        case 2:
            img_src = "../../../images/specific/brahma_arm_left.png"
            pos_left = -83
            pos_top = 50
            blast_left = -1
            blast_top = 15
        break;
        case 3:
            img_src = "../../../images/specific/brahma_arm_right.png"
            pos_left = 93
            pos_top = 50
            blast_left = 45
            blast_top = 15
        break;
        default:
            console.log('error spawnFromWhere Random int')
    }
    create_Brahma_arm(actual_board+1,img_src,pos_top,pos_left)
    arm_element = document.getElementById('brahma_arm')
    let nbLoopAttack = 0;
    attackHitWithArmId = setInterval(() => {
        if(!game_ended){
            if(nbLoopAttack<19){
                nbLoopAttack++;
                switch(spawnFromWhere){
                    case 0:
                        pos_left = pos_left+4
                        blast_left = blast_left+2
                        if((fromleft<=blast_left)&&(fromtop<=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 1:
                        pos_left = pos_left-4
                        blast_left = blast_left-2
                        if((fromleft>=blast_left)&&(fromtop<=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 2:
                        pos_left = pos_left+4
                        blast_left = blast_left+2
                        if((fromleft<=blast_left)&&(fromtop>=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 3:
                        pos_left = pos_left-4
                        blast_left = blast_left-2
                        if((fromleft>=blast_left)&&(fromtop>=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    default:
                        console.log('error spawnFromWhere Random int')
                }
                arm_element.setAttribute('style', "position: fixed;top : " + (pos_top) + "vh;left : " + (pos_left) + "vw;");
            } else if(nbLoopAttack<38){
                nbLoopAttack++;
                switch(spawnFromWhere){
                    case 0:
                        pos_left = pos_left-4
                        blast_left = blast_left-2
                        if((fromleft<=blast_left)&&(fromtop<=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 1:
                        pos_left = pos_left+4
                        blast_left = blast_left+2
                        if((fromleft>=blast_left)&&(fromtop<=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 2:
                        pos_left = pos_left-4
                        blast_left = blast_left-2
                        if((fromleft<=blast_left)&&(fromtop>=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    case 3:
                        pos_left = pos_left+4
                        blast_left = blast_left+2
                        if((fromleft>=blast_left)&&(fromtop>=blast_top)){
                            respawnFromBrahma()
                        }
                    break;
                    default:
                        console.log('error spawnFromWhere Random int')
                }
                arm_element.setAttribute('style', "position: fixed;top : " + (pos_top) + "vh;left : " + (pos_left) + "vw;");
            }else {
                stopBrahmaArm()
            }
        }
    }, attackSpeed); // 5 secs / 19 tiles to go
}

function stopBrahmaArm() {
    let arm = document.getElementById('brahma_arm')
    if(arm!=null){
        clearInterval(attackHitWithArmId);
        arm.remove()
    }
}
