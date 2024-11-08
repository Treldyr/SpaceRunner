function moveBoss(number_boss) {
    boss1Id = setInterval(() => {
        // vérification si le shuriken est disponible et les personnages alignés
        if((!isStop)&&(!game_ended)){
            if(shurikenAvailable){
                if(isInDiagonal(boss1Left,boss1Top,fromleft,fromtop)){
                    if(boss1Left < fromleft){
                        if(boss1Top < fromtop){
                            launchShurikenFromBoss1("dr")
                        } else {
                            launchShurikenFromBoss1("ur")
                        }
                    } else { // if (boss1Left > fromleft)
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
    clearInterval(boss1Id);
}

function moveBossHorizontally(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(boss1Left > fromleft){
        boss1Left--; 
        ghost.setAttribute('src',"../../../images/p"+number_boss+"left.png");
    }else{
        boss1Left++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"right.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*boss1Top+5) + "vh;left : " + (3.5*boss1Left+5) + "vw;");
}


function moveBossVertically(number_boss){
    let ghost = document.getElementById('boss'+actual_board);
    if(boss1Top > fromtop){
        boss1Top--;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"up.png");
    }else{
        boss1Top++;
        ghost.setAttribute('src',"../../../images/p"+number_boss+"down.png");
    }
    ghost.setAttribute('style', "position: fixed;top : " + (5*boss1Top+5) + "vh;left : " + (3.5*boss1Left+5) + "vw;");
}