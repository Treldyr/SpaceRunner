var backgroundMusic = null;
var backgroundMusicName;
var ZorathMusic = null;

function retrieveMusicLevel() {
    var storedData = localStorage.getItem('musicLevel');
    if (storedData !== null) {
        var sound = JSON.parse(storedData);
        return sound.level;
    } else {
        return 0.2 //  Initial volume (20%)
    }
}

function initializeMusic(musicName) {
    if (!backgroundMusic) {
        backgroundMusicName = musicName
        backgroundMusic = new Audio('../../../music/'+backgroundMusicName+'.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = retrieveMusicLevel();
        backgroundMusic.currentTime = parseFloat(localStorage.getItem(backgroundMusicName)) || 0; // Get the timecode
        backgroundMusic.play();
    }
}

function reInitMusic(musicName) {
    if (!backgroundMusic) {
        backgroundMusicName = musicName
        backgroundMusic = new Audio('../../../music/'+backgroundMusicName+'.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = retrieveMusicLevel();
        backgroundMusic.currentTime = 0; // The difference is we begin since the beginning
        backgroundMusic.play();
    }
}

function launchZorathTheme() {
    if (ZorathMusic) {
        ZorathMusic.pause();
        ZorathMusic = null;
    }
    ZorathMusic = new Audio('../../../music/afternoon.mp3');
    ZorathMusic.loop = true;
    ZorathMusic.volume = retrieveMusicLevel();
    ZorathMusic.currentTime = 0;
    ZorathMusic.play();
}

function TestMusic() {
    if (ZorathMusic) {
        ZorathMusic.pause();
        ZorathMusic = null;
    }
    ZorathMusic = new Audio('../../music/italy.mp3');
    ZorathMusic.loop = true;
    ZorathMusic.volume = retrieveMusicLevel();
    ZorathMusic.currentTime = 0;
    ZorathMusic.play();
}

// Save the state before leaving the page
window.addEventListener('beforeunload', function () {
    if (backgroundMusic) {
        localStorage.setItem(backgroundMusicName, backgroundMusic.currentTime); // Save the time code
    }
});