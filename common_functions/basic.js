function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function getRandomIntMax(max_number) {
    return Math.floor(Math.random()*max_number);
}

function isInDiagonal(x1, y1, x2, y2){
    return Math.abs(x2 - x1) === Math.abs(y2 - y1);
}

function checkIfLevelIsEnough(level_required,actual_level,destination) {
    if (level_required > actual_level){
        window.location.href=destination;
    }
}