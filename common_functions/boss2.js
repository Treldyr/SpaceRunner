function moveBoss(number_boss) {
    boss2Id = setInterval(() => {
        if((!isStop)&&(!game_ended)&&(!inpause)){
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
            checkAlignment(bossLeft,fromleft,bossTop,fromtop);
            checkShuriken()
        }
    }, 250);
}


function stopBoss() {
    clearInterval(boss2Id);
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
//          SHURIKEN MANAGMENT FOR THE BOSS 2        //
//                                                   //
// --------------------------------------------------//


function launchShurikenFromBoss2(directionLaunched){
    shurikenAvailable = false
    fromtopShuriken = fromtop
    fromleftShuriken = fromleft
    create_shuriken(fromtopShuriken,fromleftShuriken)

    powshurikenId = setInterval(() => {
        if(!inpause){
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
                default:
                    console.log('erreur direction')
            }
            updateImageShuriken()
            checkShuriken()
            if((fromtopShuriken<=0)||(fromleftShuriken<=0)||(fromtopShuriken>boards[actual_board].length-1)||(fromleftShuriken>boards[actual_board][0].length-1)){
                clearInterval(powshurikenId);
                create_shuriken_poweritem()
                delete_shuriken()
            }
        }
    }, 100); // run the function after 0.1 second (100 milliseconds)
}

function create_shuriken_poweritem(){
    powerItemTop = getRandomIntMax(14)+1
    powerItemLeft = getRandomIntMax(24)
    if(boards[actual_board][powerItemTop][powerItemLeft]==2){
        powerItemLeft++;
    }
    let powitem = document.createElement('img');
    powitem.setAttribute('src', "../../../images/items/powshuriken.png");
    powitem.setAttribute('style', "position: fixed;top : "+(5*powerItemTop+5)+"vh;left : "+(3.5*powerItemLeft+5)+"vw;");
    powitem.className = "img_of_laby";
    powitem.setAttribute('id', "shuriPowItem");
    document.getElementById('laby1').appendChild(powitem);
}


function getTheShurikenPowerItem(){
    shurikenAvailable = true
    powerItemLeft = 0
    powerItemTop = 0
    document.getElementById('shuriPowItem').remove();
    playSuccess()
}

function checkCharacterGettingPowerItem(){
    if((fromleft==powerItemLeft)&&(fromtop==powerItemTop)){
        getTheShurikenPowerItem()
    }
}