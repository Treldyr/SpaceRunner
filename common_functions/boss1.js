function moveBoss(number_boss) {
    bossId = setInterval(() => {
        // vérification si le shuriken est disponible et les personnages alignés
        if((!isStop)&&(!game_ended)){
            if(shurikenAvailable){
                if(isInDiagonal(bossLeft,bossTop,fromleft,fromtop)){
                    if(bossLeft < fromleft){
                        if(bossTop < fromtop){
                            launchShurikenFromBoss1("dr")
                        } else {
                            launchShurikenFromBoss1("ur")
                        }
                    } else { // if (bossLeft > fromleft)
                        if(bossTop < fromtop){
                            launchShurikenFromBoss1("dl")
                        } else {
                            launchShurikenFromBoss1("ul")
                        }
                    }
                }
                if(bossLeft == fromleft){
                    if(bossTop < fromtop){
                        launchShurikenFromBoss1("d")
                    } else {
                        launchShurikenFromBoss1("u")
                    }
                }
                if(bossTop == fromtop){
                    if(bossLeft < fromleft){
                        launchShurikenFromBoss1("r")
                    } else {
                        launchShurikenFromBoss1("l")
                    }
                }
            }
            
    
            let diffLeft;
            let diffTop;
            if (bossLeft > fromleft) {
                diffLeft = bossLeft - fromleft;
            } else {
                diffLeft = fromleft - bossLeft;
            }
            if (bossTop > fromtop) {
                diffTop = bossTop - fromtop;
            } else {
                diffTop = fromtop - bossTop;
            }
    
            if (diffLeft > diffTop) {
                moveBossHorizontally(number_boss);
            } else {
                moveBossVertically(number_boss);
            }
        }
        checkIsBomb()
        if(found_b0&&found_b2&&found_b1){
            finish_labyrinth()
        }
    }, 500);
}

function stopBoss() {
    clearInterval(bossId);
}

function moveBossHorizontally(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(bossLeft > fromleft){
        bossLeft--; 
        ghost.setAttribute('src',"../../../images/p"+number_boss+"left.png");
    }else{
        bossLeft++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"right.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
}


function moveBossVertically(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(bossTop > fromtop){
        bossTop--;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"up.png");
    }else{
        bossTop++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"down.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
}


// --------------------------------------------------//
//                                                   //
//        LAUNCH OF THE SHURIKEN FOR THE BOSS 1      //
//                                                   //
// --------------------------------------------------//


function launchShurikenFromBoss1(directionLaunched){
    shurikenAvailable = false
    fromtopShuriken = bossTop
    fromleftShuriken = bossLeft
    create_shuriken(fromtopShuriken,fromleftShuriken)

    powshurikenId = setInterval(() => {
        switch(directionLaunched){
            case "u":
                fromtopShuriken--;
            break;
            case "d":
                fromtopShuriken++;
            break;
            case "l":
                fromleftShuriken--;
            break;
            case "r":
                fromleftShuriken++;
            break;
            case "ul":
                fromtopShuriken--;
                fromleftShuriken--;
            break;
            case "dl":
                fromtopShuriken++;
                fromleftShuriken--;
            break;
            case "ur":
                fromtopShuriken--;
                fromleftShuriken++;
            break;
            case "dr":
                fromtopShuriken++;
                fromleftShuriken++;
            break;
            default:
                console.log('erreur direction')
        }
        updateImageShuriken()
        checkShuriken()
        if((fromtopShuriken<=0)||(fromleftShuriken<=0)||(fromtopShuriken>boards[actual_board].length-1)||(fromleftShuriken>boards[actual_board][0].length-1)){
            clearInterval(powshurikenId);
            shurikenAvailable = true
            delete_shuriken()
        }
    }, 100); // run the function after 0.1 second (100 milliseconds)
}