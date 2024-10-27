// IDs for the promises
var powstopId;
var powReverseId;
var powInvisibleId;
var powClonesId;
var powshurikenId;
var powspeedId;
var powtransId;

// functions to disable and enable power items
function disablePowerItem(powerid){
    // Sélectionner l'élément par ID
   const powerItem = document.getElementById(powerid);
   // Changer la source de l'image
   const img = powerItem.querySelector("img");
   if (img) {
     img.src = "../../../images/locked.png";
   }
   // Changer la couleur du texte dans h6
   const h6 = powerItem.querySelector("h6");
   if (h6) {
     h6.style.color = "#000000";
   }
}

function enablePowerItem(powerid,image,color){
   // Sélectionner l'élément par ID
  const powerItem = document.getElementById(powerid);
  // Changer la source de l'image
  const img = powerItem.querySelector("img");
  if (img) {
    img.src = "../../../images/"+image+".png";
  }
  // Changer la couleur du texte dans h6
  const h6 = powerItem.querySelector("h6");
  if (h6) {
    h6.style.color = color;
  }
}

function turnTruePowUsed(numberPower){
    switch(numberPower){
        case 1:
            pow1_used = true
        break;
        case 2:
            pow2_used = true
        break;
        case 3:
            pow3_used = true
        break;
        case 4:
            pow4_used = true
        break;
        default:
            console.log('erreur id power')
    }
}

// functions that run the powers
function doTeleportation(numberPower){
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower);

    fromtop1 = fromtop1+ getRandomIntMax6()-3;
    if(fromtop1<1){
        fromtop1 = 1
    }
    if(fromtop1>=boards[actual_board].length-1){
        fromtop1 = boards[actual_board].length-2
    }

    fromleft1 = fromleft1+ getRandomIntMax6()-3;
    if(fromleft1<1){
        fromleft1 = 1
    }
    if(fromleft1>=boards[actual_board][0].length-1){
        fromleft1 = boards[actual_board][0].length-2
    }

    let chara1 = document.getElementById('character'+actual_board);
    chara1.setAttribute('style',"position: fixed;top : "+(5*fromtop1+5)+"vh;left : "+(3.5*fromleft1+5)+"vw;");
}

function startInvisible(numberPower){
    isInvisible = true
    document.getElementById("ghost0").style.display = "none";
    turnTruePowUsed(numberPower)
    powInvisibleId = setInterval(() => {
        isInvisible = false
        clearInterval(powInvisibleId);
    }, 2000); // run the function after two second (5000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}


function startReverse(numberPower){
    isReverse = true
    turnTruePowUsed(numberPower)
    powReverseId = setInterval(() => {
        isReverse = false
        clearInterval(powReverseId);
    }, 2000); // run the function after two second (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}


function startStop(numberPower) {
    isStop = true
    turnTruePowUsed(numberPower)
    document.getElementById("ghost0").style.opacity = 0.5;
    powstopId = setInterval(() => {
        isStop = false
        document.getElementById("ghost0").style.opacity = 1;
        clearInterval(powstopId);
    }, 2000); // run the function after two second (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}

function doSwitch(numberPower) {
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)
    let temp = fromtop1
    fromtop1 = fromtop2
    fromtop2 = temp
    temp = fromleft1;
    fromleft1 = fromleft2 
    fromleft2 = temp
    updateImageGhost()
    updateImageCharacter("down")
}

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

function doBomb(numberPower){
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)
    placeBomb()
}

function placeBomb() {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/bomb.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * fromtop2 + 5) + "vh;left : " + (3.5 * fromleft2 + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "bomb" + actual_board);
    document.getElementById('laby1').appendChild(the_image);
    fromtopBomb = fromtop2
    fromleftBomb = fromleft2
}

function delete_bomb() {
    let bomb = document.getElementById('bomb0');
    if(bomb!==null){
        bomb.remove()
    } 
}



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

function startSpeed(numberPower) {
    isFast = true
    turnTruePowUsed(numberPower)
    powspeedId = setInterval(() => {
        isFast = false
        clearInterval(powspeedId);
    }, 2000); // stop the function after two seconds (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}

function startTranscendance(numberPower) {
    isTrans = true
    turnTruePowUsed(numberPower)
    powtransId = setInterval(() => {
        isTrans = false
        clearInterval(powtransId);
    }, 2000); // stop the function after two seconds (2000 milliseconds)
    disablePowerItem("pouv"+numberPower)
}