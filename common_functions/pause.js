var inpause = false;

function showPause() {
    document.getElementById('pause').style.display = 'block';
    inpause = true;
}

function closePause() {
    document.getElementById('pause').style.display = 'none';
    inpause = false;
}