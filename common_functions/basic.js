function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function getRandomIntMax6() {
    return Math.floor(Math.random()*6);
}