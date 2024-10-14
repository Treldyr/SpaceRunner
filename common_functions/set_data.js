function setHighScorePlanet1() {
    var storedData = localStorage.getItem('terre');
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
        localStorage.setItem('terre', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('terre', dataString);
    }   
}

function setHighScorePlanet2() {
    var storedData = localStorage.getItem('tatooine');
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
        localStorage.setItem('tatooine', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('tatooine', dataString);
    }   
}


function setHighScorePlanet3() {
    var storedData = localStorage.getItem('hoth');
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
        localStorage.setItem('hoth', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('hoth', dataString);
    }   
}


function setHighScorePlanet4() {
    var storedData = localStorage.getItem('kamino');
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
        localStorage.setItem('kamino', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('kamino', dataString);
    }   
}

function setHighScorePlanet5() {
    var storedData = localStorage.getItem('felucia');
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
        localStorage.setItem('felucia', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('felucia', dataString);
    }   
}


function setHighScorePlanet6() {
    var storedData = localStorage.getItem('fantomia');
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
        localStorage.setItem('fantomia', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('fantomia', dataString);
    }   
}

function setHighScorePlanet7() {
    var storedData = localStorage.getItem('sabliereR');
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
        localStorage.setItem('sabliereR', dataString);
    } else {
        var terre = {
            coups: nbCoups,
            temps: totalSeconds
        };
        var dataString = JSON.stringify(terre);
        localStorage.setItem('sabliereR', dataString);
    }   
}