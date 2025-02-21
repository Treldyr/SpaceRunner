var nbTourBoss3 = 0;

function moveBoss(number_boss) {
    boss3Id = setInterval(() => {
        if((!isStop)&&(!game_ended)&&(!inpause)){
            nbTourBoss3++
            let diffLeft;
            let diffTop;

            if(nbTourBoss3%100==0){
                doBoss3Teleportation();
            } else {
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
            checkAlignment(bossLeft,fromleft,bossTop,fromtop);
            checkShuriken()
        }
    }, 300);
}

function doBoss3Teleportation(){
    bossTop = getRandomIntMax(14)+1
    bossLeft = getRandomIntMax(23)+1
    hide_boss3()
}


function stopBoss() {
    clearInterval(boss3Id);
}

function moveBossHorizontally(number_boss){
    if(bossLeft > fromleft){
        bossLeft--;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss'+actual_board);
            ghost.setAttribute('src',"../../../images/p"+number_boss+"left.png");
            ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
        }
    }else{
        bossLeft++;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss'+actual_board);
            ghost.setAttribute('src',"../../../images/p"+number_boss+"right.png");
            ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
        }
    }
}


function moveBossVertically(number_boss){
    if(bossTop > fromtop){
        bossTop--;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss'+actual_board);
            ghost.setAttribute('src',"../../../images/p"+number_boss+"up.png");
            ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
        }
    }else{
        bossTop++;
        if(areCoordinatesClose()){
            let ghost = document.getElementById('boss'+actual_board);
            ghost.setAttribute('src',"../../../images/p"+number_boss+"down.png");
            ghost.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
        }
    }
    
}

function show_boss3(){
    let boss = document.getElementById('boss'+actual_board);
    boss.setAttribute('style', "position: fixed;top : " + (5*bossTop+5) + "vh;left : " + (3.5*bossLeft+5) + "vw;");
}

function hide_boss3(){
    let boss = document.getElementById('boss'+actual_board);
    boss.style.display = "none";
}


// --------------------------------------------------//
//                                                   //
//          SHURIKEN MANAGMENT FOR THE BOSS 3        //
//                                                   //
// --------------------------------------------------//


function launchShurikenFromBoss3(directionLaunched){
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
    powerItemLeft = getRandomIntMax(23)+1
    if(boards[actual_board][powerItemTop][powerItemLeft]==3){
        powerItemLeft++;
    }
}

function show_power_item(){
    let powItem = document.getElementById('shuriPowItem')
    if((powItem==null)&&(powerItemLeft!=0)&&(powerItemTop!=0)){
        let powitem = document.createElement('img');
        powitem.setAttribute('src', "../../../images/items/powshuriken.png");
        powitem.setAttribute('style', "position: fixed;top : "+(5*powerItemTop+5)+"vh;left : "+(3.5*powerItemLeft+5)+"vw;");
        powitem.className = "img_of_laby";
        powitem.setAttribute('id', "shuriPowItem");
        document.getElementById('laby1').appendChild(powitem);
    }
}

function hide_power_item(){
    let powItem = document.getElementById('shuriPowItem')
    if(powItem!=null){
        powItem.remove();
    }
}


function getTheShurikenPowerItem(){
    shurikenAvailable = true
    powerItemLeft = 0
    powerItemTop = 0
    playSuccess()
    hide_power_item()
}

function checkCharacterGettingPowerItem(){
    if((fromleft==powerItemLeft)&&(fromtop==powerItemTop)){
        getTheShurikenPowerItem()
    }
}

function isShurikenClose() {
    const manhattanDistance = Math.abs(powerItemLeft - fromleft) + Math.abs(powerItemTop - fromtop);
    if (fromleft === powerItemLeft || fromtop === powerItemTop) {
        return manhattanDistance <= 2;
    } else {
        return manhattanDistance <= 3;
    }
}