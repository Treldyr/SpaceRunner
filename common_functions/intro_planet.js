document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if ((e.keyCode == '32')||(e.keyCode == '13')) { // Space key or Enter key
        beginMaze();
    }
}