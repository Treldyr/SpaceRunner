function hideElementsByLevel(level) {
    for (i=0;i<document.getElementsByClassName("hgs").length;i++){
        let currentElement = document.getElementsByClassName("hgs")[i]
        if (currentElement.innerHTML > level){
            currentElement.style.display = "none";
        }
    }
}