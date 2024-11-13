function hideLockedCharacters(){
    if(lvl<2){
        lockImage("p3")
    }
    if(lvl<3){
        lockImage("p4")
    }
    if(lvl<4){
        lockImage("p5")
    }
    if(lvl<5){
        lockImage("p6")
    }
    if(lvl<6){
        lockImage("p7")
    }
    if(lvl<7){
        lockImage("p8")
    }
    if(lvl<8){
        lockImage("p9")
    }
    if(lvl<9){
        lockImage("p10")
    }
    if(lvl<10){
        lockImage("p11")
    }
    if(lvl<11){
        lockImage("p12")
    }
    if(lvl<12){
        lockImage("p13")
    }
    if(lvl<13){
        lockImage("p14")
    }
    if(lvl<14){
        lockImage("p15")
    }
    if(lvl<15){
        lockImage("p16")
    }
}

function hideLockedGhosts(){
    if(lvlGhost<2){
        lockImage("p2")
        lockImage("p3")
    }
    if(lvlGhost<3){
        lockImage("p4")
        lockImage("p5")
    }
    if(lvlGhost<4){
        lockImage("p6")
        lockImage("p7")
    }
}


function lockImage(imageId) {
    var image = document.getElementById(imageId);
    image.classList.add('locked');                  // Ajoute la classe de verrouillage
    image.onclick = null;                           // Désactive le clic
    image.src = "../../images/locked.png";          // Ajoute l'image de cadenas
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