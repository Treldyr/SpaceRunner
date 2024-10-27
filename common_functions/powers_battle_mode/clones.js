// IDs for the promise
var powClonesId;

function doClones(numberPower) {
    let nbMoves = 8;
    let fromtopClone1 = fromtop1
    let fromtopClone2 = fromtop1
    let fromtopClone3 = fromtop1
    let fromtopClone4 = fromtop1
    let fromleftClone1 = fromleft1
    let fromleftClone2 = fromleft1
    let fromleftClone3 = fromleft1
    let fromleftClone4 = fromleft1
    create_clone(1,1,fromtopClone1,fromleftClone1)
    create_clone(1,2,fromtopClone2,fromleftClone2)
    create_clone(1,3,fromtopClone3,fromleftClone3)
    create_clone(1,4,fromtopClone4,fromleftClone4)
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)
    powClonesId = setInterval(() => {
        fromtopClone1 = fromtopClone1+getRandomIntMax2() - 1
        fromtopClone2 = fromtopClone2+getRandomIntMax2() - 1
        fromtopClone3 = fromtopClone3+getRandomIntMax2() - 1
        fromtopClone4 = fromtopClone4+getRandomIntMax2() - 1
        fromleftClone1 = fromleftClone1+getRandomIntMax2() - 1
        fromleftClone2 = fromleftClone2+getRandomIntMax2() - 1
        fromleftClone3 = fromleftClone3+getRandomIntMax2() - 1
        fromleftClone4 = fromleftClone4+getRandomIntMax2() - 1
        nbMoves--;
        updateImageClone(1,"up",fromtopClone1,fromleftClone1)
        updateImageClone(2,"right",fromtopClone2,fromleftClone2)
        updateImageClone(3,"left",fromtopClone3,fromleftClone3)
        updateImageClone(4,"down",fromtopClone4,fromleftClone4)
        if(nbMoves<0){
            delete_clone(1)
            delete_clone(2)
            delete_clone(3)
            delete_clone(4)
            clearInterval(powClonesId);
        }
    }, 300); // run the function after 0.3 seconds (300 milliseconds)
    updateImageGhost()
    updateImageCharacter("down")
}


function create_clone(numboard,nbClone,fromtopClone,fromleftClone) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * fromtopClone + 5) + "vh;left : " + (3.5 * fromleftClone + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board+"_"+nbClone);
    document.getElementById('laby' + numboard).appendChild(the_image);
}

function delete_clone(nbClone) {
    let chara1 = document.getElementById('character'+actual_board+"_"+nbClone);
    chara1.remove()
}

function updateImageClone(nbClone,direction,fromtopClone,fromleftClone){
    let chara1 = document.getElementById('character'+actual_board+"_"+nbClone);
    chara1.setAttribute('src',"../../../images/"+chara+direction+".png");
    chara1.setAttribute('style',"position: fixed;top : "+(5*fromtopClone+5)+"vh;left : "+(3.5*fromleftClone+5)+"vw;");
}