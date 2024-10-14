function retrievePlayer() {
    var storedData = localStorage.getItem('charChosen');
    if (storedData !== null) {
        var charChosen = JSON.parse(storedData);
        chara = charChosen.char;
    }
}

function retrieveLevel() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        lvl = level.num;
    }
}

function retrieveAchievements() {
    var storedData = localStorage.getItem('playerData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        nbPlayerUnlocked = playerData.playerUnlock;
    }
}

function retrievePlanet1() {
    var storedData = localStorage.getItem('terre');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups1 = terre.coups;
        temps1 = terre.temps;
    }else{
        document.getElementById("p1").innerHTML = "???";
    }
}

function retrievePlanet2() {
    var storedData = localStorage.getItem('tatooine');
    if (storedData !== null) {
        var tatoo = JSON.parse(storedData);
        coups2 = tatoo.coups;
        temps2 = tatoo.temps;
    }else{
        document.getElementById("p2").innerHTML = "???";
    }
}

function retrievePlanet3() {
    var storedData = localStorage.getItem('hoth');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups3 = terre.coups;
        temps3 = terre.temps;
    }else{
        document.getElementById("p3").innerHTML = "???";
    }
}

function retrievePlanet4() {
    var storedData = localStorage.getItem('kamino');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups4 = terre.coups;
        temps4 = terre.temps;
    }else{
        document.getElementById("p4").innerHTML = "???";
    }
}

function retrievePlanet5() {
    var storedData = localStorage.getItem('felucia');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups5 = terre.coups;
        temps5 = terre.temps;
    }else{
        document.getElementById("p5").innerHTML = "???";
    }
}

function retrievePlanet6() {
    var storedData = localStorage.getItem('fantomia');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups6 = terre.coups;
        temps6 = terre.temps;
    }else{
        document.getElementById("p6").innerHTML = "???";
    }
}

function retrievePlanet7() {
    var storedData = localStorage.getItem('sabliereR');
    if (storedData !== null) {
        var terre = JSON.parse(storedData);
        coups7 = terre.coups;
        temps7 = terre.temps;
    }else{
        document.getElementById("p7").innerHTML = "???";
    }
}