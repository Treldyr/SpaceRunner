function hideLockedCharacters(){
    if(lvl>1){
        unlockImagePlayer("p3")
    }
    if(lvl>2){
        unlockImagePlayer("p4")
    }
    if(lvl>3){
        unlockImagePlayer("p5")
    }
    if(lvl>4){
        unlockImagePlayer("p6")
    }
    if(lvl>5){
        unlockImagePlayer("p7")
    }
    if(lvl>6){
        unlockImagePlayer("p8")
    }
    if(lvl>7){
        unlockImagePlayer("p9")
    }
    if(lvl>8){
        unlockImagePlayer("p10")
    }
    if(lvl>9){
        unlockImagePlayer("p11")
    }
    if(lvl>10){
        unlockImagePlayer("p12")
    }
    if(lvl>11){
        unlockImagePlayer("p13")
    }
    if(lvl>12){
        unlockImagePlayer("p14")
    }
    if(lvl>13){
        unlockImagePlayer("p15")
    }
    if(lvl>14){
        unlockImagePlayer("p16")
    }
    if(lvl>15){
        unlockImagePlayer("p17")
    } else {
        document.getElementById("listChar5").style.display = "none";
    }
    if(lvl>16){
        unlockImagePlayer("p18")
    }
    if(lvl>17){
        unlockImagePlayer("p19")
    }
    if(lvl>18){
        unlockImagePlayer("p20")
    }
    let lvl2p = retrieveTeamLevel()
    let spChar = retrieveSpChar()
    if((lvl2p<7)&&(!spChar)){
        document.getElementById("listChar6").style.display = "none";
    }
    if(lvl2p>6){
        unlockImagePlayer("p22")
    }
    if(lvl2p>7){
        unlockImagePlayer("p21")
    }
    if(spChar){
        unlockImagePlayer("p23")
        unlockImagePlayer("p0")
    }
}

function hideLockedGhosts(){
    if(lvlGhost>1){
        unlockImageGhost("p2")
        unlockImageGhost("p3")
    }
    if(lvlGhost>2){
        unlockImageGhost("p4")
        unlockImageGhost("p5")
    }
    if(lvlGhost>3){
        unlockImageGhost("p6")
        unlockImageGhost("p7")
    }
}

function unlockImagePlayer(imageId) {
    var image = document.getElementById(imageId);
    image.classList.remove('locked');                            // Supprime la classe de verrouillage
    image.setAttribute('onclick', "selectImage('"+imageId+"')"); // réactive le clic
    image.src = "../../images/"+imageId+"down.png"               // Ajoute l'image du personnage
}

function unlockImageGhost(imageId) {
    var image = document.getElementById(imageId);
    image.classList.remove('locked');                            // Supprime la classe de verrouillage
    image.setAttribute('onclick', "selectImage('"+imageId+"')"); // réactive le clic
    image.src = "../../images/fantom"+imageId+".png"              // Ajoute l'image du fantome
}


// Fonction pour sélectionner une image
function selectImage(imageId) {
    playSoundButton()
    // Désélectionne toutes les images
    $('.img-thumbnail').removeClass('selected');
    // Sélectionne l'image cliquée
    $('#' + imageId).addClass('selected');
    // Stocke l'ID
    $('#selected-image').val(imageId);
    // stocke dans la balise p l'image
    char = imageId
}

function acceptPlayer(what_item,destination) {
    var charChosen = {
        char: char
    };
    var dataString = JSON.stringify(charChosen);
    localStorage.setItem(what_item, dataString);
    window.location.href = destination
}


function acceptGhost() {
    var charChosen = {
        ghost : char
    };
    var dataString = JSON.stringify(charChosen);
    localStorage.setItem('ghostChosen', dataString);
    window.location.href = 'carte.html'
}