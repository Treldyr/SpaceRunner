// --------------------------------------------------//
//                                                   //
//            COMMON SHURIKEN FUNCTIONS              //
//                                                   //
// --------------------------------------------------//

function updateImageShuriken(idshuriken, fromtopShuriken, fromleftShuriken){
    let shuri = document.getElementById('shuriken'+idshuriken);
    shuri.setAttribute('style',"position: fixed;top : "+(5*fromtopShuriken+5)+"vh;left : "+(3.5*fromleftShuriken+5)+"vw;");
}

function create_shuriken(fromtopShuriken,fromleftShuriken,idshuriken) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/shuriken.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * fromtopShuriken + 5) + "vh;left : " + (3.5 * fromleftShuriken + 5) + "vw;");
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
        clearInterval(powshurikenBoss1Id);
        fromtopShurikenBoss1 = 0
        fromleftShurikenBoss1 = 0
    } else if (idshuriken==1){
        clearInterval(powshurikenPlayerId);
        fromtopShurikenPlayer = 1
        fromleftShurikenPlayer = 0
    }
}

function checkShuriken(idshuriken){
    if(!game_ended){
        if(idshuriken==6){
            checkIsAlign(fromleft, fromtop, fromleftShurikenBoss1, fromtopShurikenBoss1)
        }
    }   
}

// --------------------------------------------------//
//                                                   //
//  USE OF THE SHURIKEN FOR THE BRAHMA PLAYER LEVEL  //
//                                                   //
// --------------------------------------------------//


function launchShurikenFromPlayer(directionLaunched){
    shurikenPlayerAvailable = false
    fromtopShurikenPlayer = fromtop
    fromleftShurikenPlayer = fromleft
    create_shuriken(fromtopShurikenPlayer,fromleftShurikenPlayer,1)


    powshurikenPlayerId = setInterval(() => {
        switch(directionLaunched){
            case "u":
                fromtopShurikenPlayer--;
            break;
            case "d":
                fromtopShurikenPlayer++;
            break;
            case "l":
                fromleftShurikenPlayer--;
            break;
            case "r":
                fromleftShurikenPlayer++;
            break;
            default:
                console.log('error direction')
        }
        updateImageShuriken(1,fromtopShurikenPlayer,fromleftShurikenPlayer)
        checkBrahmaShuriken()
        checkBossesShurikenPlayer()
        if((fromtopShurikenPlayer<0)||(fromleftShurikenPlayer<0)||(fromtopShurikenPlayer>boards[actual_board].length-1)||(fromleftShurikenPlayer>boards[actual_board][0].length-1)){
            delete_shuriken(1)
        }
        
    }, 100);// run the function after 0.1 second (100 milliseconds)
}; 


function checkBossesShurikenPlayer(){
    if((fromtopShurikenPlayer==fromtopShurikenBoss1)&&(fromleftShurikenPlayer==fromleftShurikenBoss1)){
        delete_shuriken(1)
        delete_shuriken(6)
        // TODO do sound clank ?
    }
    if((fromtopShurikenPlayer==boss1Top)&&(fromleftShurikenPlayer==boss1Left)){
        delete_shuriken(1)
        stopBoss1()
        document.getElementById('boss6').remove()
    }
    if((fromtopShurikenPlayer==boss2Top)&&(fromleftShurikenPlayer==boss2Left)){
        delete_shuriken(1)
        stopBoss2()
        document.getElementById('boss9').remove()
    }
}


function place_pow_shuriken(){
    if(shurikenPlayerPowerItemAvailable){
        fromtopShurikenPOW = getRandomIntMax(14)+1
        fromleftShurikenPOW = getRandomIntMax(24)+1
        if(boards[actual_board][fromtopShurikenPOW][fromleftShurikenPOW]!=19){
            fromleftShurikenPOW = fromleftShurikenPOW+1;
        }
        create_element(19, 5, 3.5, "items/powshuriken.png", "shurikenPOW",fromtopShurikenPOW,fromleftShurikenPOW);
        shurikenPlayerPowerItemAvailable = false
    }
}

function take_pow_shuriken(){
    shurikenPlayerAvailable = true
    shurikenPlayerPowerItemAvailable = true
    document.getElementById("shurikenPOW").remove()
    fromtopShurikenPOW = 0
    fromleftShurikenPOW = 0
}