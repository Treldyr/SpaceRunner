// IDs for the promise
var powshurikenId;


function launchShuriken(numberPower){
    directionLaunched = lastmMoveByFantom
    fromtopShuriken = fromtop2
    fromleftShuriken = fromleft2
    create_shuriken(fromtopShuriken,fromleftShuriken)
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)

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
            default:
                console.log('erreur direction')
        }
        updateImageShuriken()
        if(!game_ended){
            checkShuriken()
        }
        if((fromtopShuriken<=0)||(fromleftShuriken<=0)||(fromtopShuriken>boards[actual_board].length-1)||(fromleftShuriken>boards[actual_board][0].length-1)){
            clearInterval(powshurikenId);
            delete_shuriken()
        }
    }, 100); // run the function after 0.4 second (2000 milliseconds)
}

function updateImageShuriken(){
    let shuri = document.getElementById('shuriken0');
    shuri.setAttribute('style',"position: fixed;top : "+(5*fromtopShuriken+5)+"vh;left : "+(3.5*fromleftShuriken+5)+"vw;");
}

function create_shuriken(fromtopShuriken,fromleftShuriken) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/shuriken.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * fromtopShuriken + 5) + "vh;left : " + (3.5 * fromleftShuriken + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "shuriken" + actual_board);
    document.getElementById('laby1').appendChild(the_image);
}

function delete_shuriken() {
    let shuri = document.getElementById('shuriken0');
    if(shuri!==null){
        shuri.remove()
    } 
}