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

function launchShurikenMeleeMode(directionLaunched,isP1Launching,totalSec){
    fromtopShuriken = 0;
    fromleftShuriken = 0;
    speedShuriken = 300 - totalSec*2

    if(isP1Launching){
        fromtopShuriken = fromtop1
        fromleftShuriken = fromleft1
        shurikenAvailableP1 = false
    } else {
        shurikenAvailableP2 = false
        fromtopShuriken = fromtop2
        fromleftShuriken = fromleft2
    }
    create_shuriken(fromtopShuriken,fromleftShuriken)
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
            checkShurikenMeleeMode()
            if((fromtopShuriken<=0)||(fromleftShuriken<=0)||(fromtopShuriken>boards[actual_board].length-1)||(fromleftShuriken>boards[actual_board][0].length-1)){
                clearInterval(powshurikenId);
                create_shuriken_poweritem()
                delete_shuriken()
            }
        }
    }, speedShuriken);
}


function getTheShurikenPowerItem(isGetByP1){
    if(isGetByP1){
        shurikenAvailableP1 = true
    } else {
        shurikenAvailableP2 = true
    }
    powerItemLeft = 0
    powerItemTop = 0
    document.getElementById('shuriPowItem').remove();
    playSuccess()
}

function checkCharactersGettingPowerItem(){
    if((fromleft1==powerItemLeft)&&(fromtop1==powerItemTop)){
        getTheShurikenPowerItem(true)
    }
    else if((fromleft2==powerItemLeft)&&(fromtop2==powerItemTop)){
        getTheShurikenPowerItem(false)
    }
}

// this is part of the interactions because we check it when the character move ! 
function checkShurikenMeleeMode(){
    if(!game_ended){
        if((fromtop1==fromtopShuriken)&&(fromleft1==fromleftShuriken)){
            finish_labyrinth(false)
        }
        else if((fromtop2==fromtopShuriken)&&(fromleft2==fromleftShuriken)){
            finish_labyrinth(true)
        }
    }
}