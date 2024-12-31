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

function setKeyboard(keyboard_type) {
    var keyboard = {
        type: keyboard_type
    };
    var dataString = JSON.stringify(keyboard);
    localStorage.setItem('keyboard', dataString);
}

function setSoundLevel(sound_level) {
    var sound = {
        level: sound_level
    };
    var dataString = JSON.stringify(sound);
    localStorage.setItem('soundLevel', dataString);
}

function setMusicLevel(music_level) {
    var music = {
        level: music_level
    };
    var dataString = JSON.stringify(music);
    localStorage.setItem('musicLevel', dataString);
}