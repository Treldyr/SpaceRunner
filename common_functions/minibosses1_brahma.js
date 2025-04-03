// --------------------------------------------------//
//                                                   //
//             COMMUN FUNCTION BOSSES                //
//                                                   //
// --------------------------------------------------//

function moveBossHorizontally(number_boss, bossTop, bossLeft){
    let theboss = document.getElementById('boss'+number_boss);
    if(bossLeft > fromleft){
        if(number_boss==6){
            boss1Left--; 
        } else {
            boss2Left--; 
        }
        theboss.setAttribute('src',"../../../images/p"+number_boss+"left.png");
    }else{
        if(number_boss==6){
            boss1Left++; 
        } else {
            boss2Left++;
        }
        theboss.setAttribute('src',"../../../images/p"+number_boss+"right.png");
    }
    theboss.setAttribute('style', "position: fixed;top : " + (3*bossTop+5) + "vh;left : " + (2*bossLeft+5) + "vw;");
}


function moveBossVertically(number_boss, bossTop, bossLeft){
    let theboss = document.getElementById('boss'+number_boss);
    if(bossTop > fromtop){
        if(number_boss==6){
            boss1Top--; 
        } else {
            boss2Top--;
        }
        theboss.setAttribute('src',"../../../images/p"+number_boss+"up.png");
    }else{
        if(number_boss==6){
            boss1Top++; 
        } else {
            boss2Top++;
        }
        theboss.setAttribute('src',"../../../images/p"+number_boss+"down.png");
    }
    theboss.setAttribute('style', "position: fixed;top : " + (3*bossTop+5) + "vh;left : " + (2*bossLeft+5) + "vw;");
}

function updateImageShuriken(idshuriken, fromtopShuriken, fromleftShuriken){
    let shuri = document.getElementById('shuriken'+idshuriken);
    shuri.setAttribute('style',"position: fixed;top : "+(3*fromtopShuriken+5)+"vh;left : "+(2*fromleftShuriken+5)+"vw;");
}

function create_shuriken(fromtopShuriken,fromleftShuriken,idshuriken) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/shuriken.png");
    the_image.setAttribute('style', "position: fixed;top : " + (3 * fromtopShuriken + 5) + "vh;left : " + (2 * fromleftShuriken + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "shuriken"+idshuriken);
    document.getElementById('laby19').appendChild(the_image);
}

function delete_shuriken(idshuriken) {
    let shuri = document.getElementById('shuriken'+idshuriken);
    if(shuri!==null){
        shuri.remove()
    } 
    if (idshuriken==6){
        fromtopShurikenBoss1 = 0
        fromleftShurikenBoss1 = 0
    }
}

function checkShuriken(idshuriken){
    if(!game_ended){
        if(idshuriken==6){
            if((fromtop==fromtopShurikenBoss1)&&(fromleft==fromleftShurikenBoss1)){
                respawnFromBrahma()
            }
        }
    }   
}

function initializeMiniBosses1() {
    boss1Top = coords_begin_boss[0][0];
    boss1Left = coords_begin_boss[0][1];
    create_element(actual_board+1, 3, 2, "p6down.png", "boss6", coords_begin_boss[0][0], coords_begin_boss[0][1])

    boss2Top = coords_begin_boss[1][0];
    boss2Left = coords_begin_boss[1][1];
    create_element(actual_board+1, 3, 2, "p9down.png", "boss9", coords_begin_boss[1][0], coords_begin_boss[1][1])
}


function restartMiniBosses1() {
    boss1Top = coords_begin_boss[0][0];
    boss1Left = coords_begin_boss[0][1];
    document.getElementById('boss6').setAttribute('style',"position: fixed;top : "+(3*boss1Top+5)+"vh;left : "+(2*boss1Left+5)+"vw;");

    boss2Top = coords_begin_boss[1][0];
    boss2Left = coords_begin_boss[1][1];
    document.getElementById('boss9').setAttribute('style',"position: fixed;top : "+(3*boss2Top+5)+"vh;left : "+(2*boss2Left+5)+"vw;");
}

// --------------------------------------------------//
//                                                   //
//                  FUNCTIONS BOSS1                  //
//                                                   //
// --------------------------------------------------//

function launchShurikenFromBoss1(directionLaunched){
    shurikenBoss1Available = false
    fromtopShurikenBoss1 = boss1Top
    fromleftShurikenBoss1 = boss1Left
    create_shuriken(fromtopShurikenBoss1,fromleftShurikenBoss1,6)

    powshurikenBoss1Id = setInterval(() => {
        switch(directionLaunched){
            case "u":
                fromtopShurikenBoss1--;
            break;
            case "d":
                fromtopShurikenBoss1++;
            break;
            case "l":
                fromleftShurikenBoss1--;
            break;
            case "r":
                fromleftShurikenBoss1++;
            break;
            case "ul":
                fromtopShurikenBoss1--;
                fromleftShurikenBoss1--;
            break;
            case "dl":
                fromtopShurikenBoss1++;
                fromleftShurikenBoss1--;
            break;
            case "ur":
                fromtopShurikenBoss1--;
                fromleftShurikenBoss1++;
            break;
            case "dr":
                fromtopShurikenBoss1++;
                fromleftShurikenBoss1++;
            break;
            default:
                console.log('erreur direction')
        }
        updateImageShuriken(6,fromtopShurikenBoss1,fromleftShurikenBoss1)
        checkShuriken(6)
        if((fromtopShurikenBoss1<=0)||(fromleftShurikenBoss1<=0)||(fromtopShurikenBoss1>boards[actual_board].length-1)||(fromleftShurikenBoss1>boards[actual_board][0].length-1)){
            clearInterval(powshurikenBoss1Id);
            shurikenBoss1Available = true
            delete_shuriken(6)
        }
    }, 100); // run the function after 0.1 second (100 milliseconds)
}

function moveMiniBoss1() {
    Boss1Id = setInterval(() => {
        if(!game_ended){
            if(shurikenBoss1Available){
                if(isInDiagonal(boss1Left,boss1Top,fromleft,fromtop)){
                    if(boss1Left < fromleft){
                        if(boss1Top < fromtop){
                            launchShurikenFromBoss1("dr")
                        } else {
                            launchShurikenFromBoss1("ur")
                        }
                    } else { // if (bossLeft > fromleft)
                        if(boss1Top < fromtop){
                            launchShurikenFromBoss1("dl")
                        } else {
                            launchShurikenFromBoss1("ul")
                        }
                    }
                }
                if(boss1Left == fromleft){
                    if(boss1Top < fromtop){
                        launchShurikenFromBoss1("d")
                    } else {
                        launchShurikenFromBoss1("u")
                    }
                }
                if(boss1Top == fromtop){
                    if(boss1Left < fromleft){
                        launchShurikenFromBoss1("r")
                    } else {
                        launchShurikenFromBoss1("l")
                    }
                }
            }
            
            let diffLeft;
            let diffTop;
            if (boss1Left > fromleft) {
                diffLeft = boss1Left - fromleft;
            } else {
                diffLeft = fromleft - boss1Left;
            }
            if (boss1Top > fromtop) {
                diffTop = boss1Top - fromtop;
            } else {
                diffTop = fromtop - boss1Top;
            }
    
            if (diffLeft > diffTop) {
                moveBossHorizontally(6, boss1Top, boss1Left);
            } else {
                moveBossVertically(6, boss1Top, boss1Left);
            }
        }
    }, 500);
}

function stopBoss1() {
    clearInterval(Boss1Id);
}

// --------------------------------------------------//
//                                                   //
//                  FUNCTIONS BOSS2                  //
//                                                   //
// --------------------------------------------------//