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