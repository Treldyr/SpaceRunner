function unlockImagePlanet(planetId) {
    let planet = document.createElement('a');
    planet.setAttribute('onclick', "goPlanetFromMap("+planetId+")"); // créé le clic

    let planet_image = document.createElement('img');
    planet_image.setAttribute('src',"../../images/planets/planet"+planetId+".png");
    planet_image.setAttribute('id',"imgplanet"+planetId);

    planet.appendChild(planet_image);
    document.getElementById("planet"+planetId).appendChild(planet);
}

function createCursor(){
    let cursor = document.createElement('img');
    cursor.setAttribute('src',"../../../images/specific/click_cursor.png");
    cursor.setAttribute('id',"cursor_planet");
    document.getElementById('click_cursor').appendChild(cursor);

    
    let cursor_text = document.createElement('a');
    cursor_text.innerHTML = "click here"
    cursor_text.style.color = "white";
    cursor_text.style.fontSize = "20px";
    document.getElementById('click_cursor').appendChild(cursor_text);
}