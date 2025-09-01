// --------------------------------------------------//
//                                                   //
//            COMMON SHURIKEN FUNCTIONS              //
//                                                   //
// --------------------------------------------------//

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
    clearInterval(powshurikenBoss1Id);
    let shuri = document.getElementById('shuriken'+idshuriken);
    if(shuri!==null){
        shuri.remove()
    } 
    if (idshuriken==6){
        fromtopShurikenBoss1 = 0
        fromleftShurikenBoss1 = 0
    }
}

function checkIsAlign(left1, top1, left2, top2){
    if((left1==left2)&&(top1==top2)){
        respawnFromBrahma()
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
        checkBrahmaShuriken(1)
        if((fromtopShurikenPlayer<=0)||(fromleftShurikenPlayer<=0)||(fromtopShurikenPlayer>boards[actual_board].length-1)||(fromleftShurikenPlayer>boards[actual_board][0].length-1)){
            shurikenPlayerAvailable = true
            delete_shuriken(6)
        }
    }, 100);// run the function after 0.1 second (100 milliseconds)
}; 