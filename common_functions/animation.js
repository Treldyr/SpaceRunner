function setCharacterLeft(numberPage, character){
    // Création de l'élément image
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + character + "down.png");
    
    // Style pour afficher l'image en grand et la positionner sur le côté gauche
    the_image.setAttribute('style', `
        position: fixed;
        bottom: -8vh;
        left: -10vw;
        height: 90vh;
        width: 40vw;
        object-fit: cover; /* Pour s'adapter à l'espace de manière homogène */
    `);
    
    // Ajout de l'image dans l'élément de la page spécifiée
    document.getElementById('page' + numberPage).appendChild(the_image);
}


function setCharacterRight(numberPage, character){
    // Création de l'élément image
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + character + "down.png");
    
    // Style pour afficher l'image en grand et la positionner sur le côté gauche
    the_image.setAttribute('style', `
        position: fixed;
        bottom: -8vh;
        right: -10vw;
        height: 90vh;
        width: 40vw;
        object-fit: cover; /* Pour s'adapter à l'espace de manière homogène */
    `);
    
    // Ajout de l'image dans l'élément de la page spécifiée
    document.getElementById('page' + numberPage).appendChild(the_image);
}


function setCharacterWarning(){
    // Création de l'élément image
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../images/p16down.png");
    
    // Style pour afficher l'image en grand et la positionner sur le côté gauche
    the_image.setAttribute('style', `
        position: fixed;
        bottom: -8vh;
        right: -10vw;
        height: 90vh;
        width: 40vw;
        object-fit: cover; /* Pour s'adapter à l'espace de manière homogène */
    `);
    
    // Ajout de l'image dans l'élément de la page spécifiée
    document.getElementById('page1').appendChild(the_image);
}