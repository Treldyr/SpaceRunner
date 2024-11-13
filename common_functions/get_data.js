var chara = "p0";

function retrievePlayer() {
    var storedData = localStorage.getItem('charChosen');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        chara = charChosen.char;
    }
}

function retrievePlayers() {
    var storedData = localStorage.getItem('charChosen');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        chara = charChosen.char;
    }
    storedData = localStorage.getItem('charChosen2');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        charap2 = charChosen.char;
    }
}

function retrieveBattlePlayers() {
    var storedData = localStorage.getItem('charChosen');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        chara = charChosen.char;
    }
    storedData = localStorage.getItem('ghostChosen');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        charap2 = charChosen.ghost;
    }
}

function retrieveLevel() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        lvl = level.num;
    }
}


function retrieveGhostAchievements() {
    var storedData = localStorage.getItem('ghostData');
    if (storedData !== null) {
        var ghostData = JSON.parse(storedData);
        lvlGhost = ghostData.ghostUnlock;
    }
}

function retrievePlanet(number_planet,name_planet) {
    // get the data from the local store
    let nbCoups = " - ";
    let nbTemps;
    let stringTemps;
    let storedData = localStorage.getItem(name_planet);
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        nbCoups = terre.coups;
        nbTemps = terre.temps;
    }else{
        document.getElementById("p"+number_planet).innerHTML = "???";
    }
    // Display the data in the page
    if(nbTemps==null){
        stringTemps = " - : - ";
    }else {
        stringTemps = pad(parseInt(nbTemps / 60)) + " : "+pad(nbTemps % 60);
    }
    document.getElementById("c"+number_planet).innerHTML = nbCoups;
    document.getElementById("t"+number_planet).innerHTML = stringTemps;  
}