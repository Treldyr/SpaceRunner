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
            playerUnlock: 3
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('playerData', dataString);
    }   
}

function UnlockPlanet6() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 6){
            var level = {
                num: 6
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 6
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockPlanet7() {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < 7){
            var level = {
                num: 7
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: 7
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockFourthChar() {
    var storedData = localStorage.getItem('playerData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.playerUnlock < 4){
            var playerData = {
                playerUnlock: 4
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('playerData', dataString);
        }
    } else {
        var playerData = {
            playerUnlock: 4
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('playerData', dataString);
    }   
}


function UnlockFourthGhost() {
    var storedData = localStorage.getItem('ghostData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.ghostUnlock < 4){
            var playerData = {
                ghostUnlock: 4
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('ghostData', dataString);
        }
    } else {
        var playerData = {
            ghostUnlock: 4
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('ghostData', dataString);
    }   
}


function UnlockThirdGhost() {
    var storedData = localStorage.getItem('ghostData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.ghostUnlock < 3){
            var playerData = {
                ghostUnlock: 3
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('ghostData', dataString);
        }
    } else {
        var playerData = {
            ghostUnlock: 3
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('ghostData', dataString);
    }   
}


function UnlockSecondGhost() {
    var storedData = localStorage.getItem('ghostData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.ghostUnlock < 2){
            var playerData = {
                ghostUnlock: 2
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('ghostData', dataString);
        }
    } else {
        var playerData = {
            ghostUnlock: 2
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('ghostData', dataString);
    }   
}