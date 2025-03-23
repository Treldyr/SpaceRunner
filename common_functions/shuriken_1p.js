// --------------------------------------------------//
//                                                   //
//    USE OF THE SHURIKEN FOR THE 1 PLAYER LEVEL     //
//                                                   //
// --------------------------------------------------//

function launchShurikenFromPlayer(directionLaunched){
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
                    console.log('error direction')
            }
            updateImageShuriken()
            if((fromtopShuriken<=0)||(fromleftShuriken<=0)||(fromtopShuriken>boards[actual_board].length-1)||(fromleftShuriken>boards[actual_board][0].length-1)){
                clearInterval(powshurikenId);
                delete_shuriken()
            }
        }
    }, 100); // run the function after 0.1 second (100 milliseconds)
}

function updateImageShuriken(){
    let shuri = document.getElementById('shuriken'+actual_board);
    shuri.setAttribute('style',"position: fixed;top : "+(3*fromtopShuriken+5)+"vh;left : "+(2*fromleftShuriken+5)+"vw;");
}

function create_shuriken(fromtopShuriken,fromleftShuriken) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/shuriken.png");
    the_image.setAttribute('style', "position: fixed;top : " + (3 * fromtopShuriken + 5) + "vh;left : " + (2 * fromleftShuriken + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "shuriken"+actual_board);
    numboard_shuri = actual_board+1
    document.getElementById('laby'+numboard_shuri).appendChild(the_image);
}

function delete_shuriken() {
    let shuri = document.getElementById('shuriken'+actual_board);
    if(shuri!==null){
        shuri.remove()
    } 
    fromtopShuriken = 0
    fromleftShuriken = 0
}