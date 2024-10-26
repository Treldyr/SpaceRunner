// IDs for the promises
var powstopId;
var powReverseId;
var powInvisibleId;

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

// functions that run the powers
function doTeleportation(numberPower){
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower);

    fromtop1 = fromtop1+ getRandomIntMax6()-3;
    if(fromtop1<1){
        fromtop1 = 1
    }
    if(fromtop1>boards[actual_board].length){
        fromtop1 = boards[actual_board].length-2
    }

    fromleft1 = fromleft1+ getRandomIntMax6()-3;
    if(fromleft1<1){
        fromleft1 = 1
    }
    if(fromleft1>boards[actual_board][0].length){
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