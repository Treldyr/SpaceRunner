function hideElementsByLevel(level) {
    for (i=0;i<document.getElementsByClassName("hgs").length;i++){
        let currentElement = document.getElementsByClassName("hgs")[i]
        if (currentElement.innerHTML > level){
            currentElement.style.display = "none";
        }
    }
}

function showMoreScores(){
    toggleHiddenScores("table-row");
    document.getElementById("LessButton").style.display = "flex";
    document.getElementById("PlusButton").style.display = "none";
}

function showLessScores(){
    toggleHiddenScores("none");
    document.getElementById("LessButton").style.display = "none";
    document.getElementById("PlusButton").style.display = "flex";
}

function toggleHiddenScores(displayValue) {
    const hiddenScores = document.querySelectorAll(".hiddenScore");

    hiddenScores.forEach(element => {
        element.style.display = displayValue;
    });
}