
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