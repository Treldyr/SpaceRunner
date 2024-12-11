function resetAventure() {
    var playerData = {
        playerUnlock: 1
    };
    var dataString = JSON.stringify(playerData);
    localStorage.setItem('playerData', dataString);

    var level = {
        num: 1
    };
    var dataString = JSON.stringify(level);
    localStorage.setItem('level', dataString);

    window.location.href='selectchar.html';
}


function setHighScorePlanet(planet_name) {
    var storedData = localStorage.getItem(planet_name);
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        let newcoups;
        let newtemps;
        if( terre.coups > nbCoups ){
            newcoups = nbCoups;
        } else {
            newcoups = terre.coups;
        }
        if(terre.temps > totalSeconds){
            newtemps = totalSeconds;
        }else{
            newtemps = terre.temps;
        }
        var terre = {
            coups: newcoups,
            temps: newtemps
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem(planet_name, dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem(planet_name, dataString);
    }   
}


function saveLanguage(language_name) {
    var lang = language_name
    var dataString = JSON.stringify(lang);
    localStorage.setItem('language', dataString);
}