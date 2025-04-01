function updateStylesheet(previousStyle,nextStyle) {
    const oldLink = document.querySelector("link[href='../../../css/planets/"+previousStyle+".css']");
    if (oldLink) {
        oldLink.parentNode.removeChild(oldLink);
    }
    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = "../../../css/planets/"+nextStyle+".css";
    document.head.appendChild(newLink);
}

function updateBackground(imagePath) {
    document.querySelectorAll('.background-image').forEach(element => {
        element.style.background = `url('${imagePath}') no-repeat center center fixed`;
        element.style.backgroundSize = "cover";
    });
}

function die_from_ghost(){
    stopGhost();
    reset_ghost_and_player();
    moveGhost(6)
}

function reset_ghost_and_player(){
    reset_player()
    ghostTop = coords_begin_ghost[actual_board][0];
    ghostLeft = coords_begin_ghost[actual_board][1];
    
    let ghost = document.getElementById('ghost'+actual_board);
    ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
}

function reset_player(){
    fromtop = coords_begin[actual_board][0];
    fromleft = coords_begin[actual_board][1];
    
    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(5*fromtop+5)+"vh;left : "+(3.5*fromleft+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");
}