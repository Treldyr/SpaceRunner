function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function getRandomIntMax6() {
    return Math.floor(Math.random()*7);
}

function getRandomIntMax2() {
    return Math.floor(Math.random()*3);
}

function isInDiagonal(x1, y1, x2, y2){
    return Math.abs(x2 - x1) === Math.abs(y2 - y1);
  }