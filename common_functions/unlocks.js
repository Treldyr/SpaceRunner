function UnlockSecondChar() {
    var storedData = localStorage.getItem('playerData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.playerUnlock < 2){
            var playerData = {
                playerUnlock: 2
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('playerData', dataString);
        }
    } else {
        var playerData = {
            playerUnlock: 2
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('playerData', dataString);
    }   
}


function UnlockPlanet2() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 2){
            var level = {
                num: 2
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 2
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockPlanet3() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 3){
            var level = {
                num: 3
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 3
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockPlanet4() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 4){
            var level = {
                num: 4
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 4
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockPlanet5() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 5){
            var level = {
                num: 5
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 5
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockThirdChar() {
    var storedData = localStorage.getItem('playerData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.playerUnlock < 3){
            var playerData = {
                playerUnlock: 3
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('playerData', dataString);
        }
    } else {
        var playerData = {
            playerUnlock: 2
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('playerData', dataString);
    }   
}