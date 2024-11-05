function UnlockPlanet(planet_number) {
    var storedData = localStorage.getItem('level');
    if (storedData !== null) {
        var level = JSON.parse(storedData);
        if( level.num < planet_number){
            var level = {
                num: planet_number
            };
            var dataString = JSON.stringify(level);
            localStorage.setItem('level', dataString);
        }
    } else {
        var level = {
            num: planet_number
        };
        var dataString = JSON.stringify(level);
        localStorage.setItem('level', dataString);
    }   
}


function UnlockCharacter(character_number) {
    var storedData = localStorage.getItem('playerData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.playerUnlock < character_number){
            var playerData = {
                playerUnlock: character_number
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('playerData', dataString);
        }
    } else {
        var playerData = {
            playerUnlock: character_number
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('playerData', dataString);
    }   
}


function UnlockGhost(ghost_number) {
    var storedData = localStorage.getItem('ghostData');
    if (storedData !== null) {
        var playerData = JSON.parse(storedData);
        if( playerData.ghostUnlock < ghost_number){
            var playerData = {
                ghostUnlock: ghost_number
            };
            var dataString = JSON.stringify(playerData);
            localStorage.setItem('ghostData', dataString);
        }
    } else {
        var playerData = {
            ghostUnlock: ghost_number
        };
        var dataString = JSON.stringify(playerData);
        localStorage.setItem('ghostData', dataString);
    }   
}