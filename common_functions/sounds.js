function retrieveSoundLevel() {
    var storedData = localStorage.getItem('soundLevel');
    if (storedData !== null) {
        var sound = JSON.parse(storedData);
        return sound.level;
    } else {
        return 1.0
    }
}

let globalVolume = retrieveSoundLevel();




function testSound(given_volume) {
    var audio = new Audio('../../sons/mario_move.wav');
    audio.volume = given_volume;
    audio.play();
}

function playMove() {
    var audio = new Audio('../../../sons/mario_move.wav');
    audio.volume = globalVolume;
    audio.play();
}

function playEndLevel() {
    var audio = new Audio('../../../sons/mario_endplanet.wav');
    audio.volume = globalVolume;
    audio.play();
}

function playEndLaby() {
    var audio = new Audio('../../../sons/mario_endlaby.wav');
    audio.volume = globalVolume;
    audio.play();
}


function playWallHit() {
    var audio = new Audio('../../../sons/wallhit.wav');
    audio.volume = globalVolume;
    audio.play();
}

function playSuccess() {
    var audio = new Audio('../../../sons/mario_success.wav');
    audio.volume = globalVolume;
    audio.play();
}

function playSoundButton() {
    var audio = new Audio('../../sons/bright.wav');
    audio.volume = globalVolume;
    audio.play();
}