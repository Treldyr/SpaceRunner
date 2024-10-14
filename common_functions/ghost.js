function moveGhost() {
    ghostId = setInterval(() => {
        let diffLeft;
        let diffTop;
        if (ghostLeft > fromleft) {
            diffLeft = ghostLeft - fromleft;
        } else {
            diffLeft = fromleft - ghostLeft;
        }
        if (ghostTop > fromtop) {
            diffTop = ghostTop - fromtop;
        } else {
            diffTop = fromtop - ghostTop;
        }


        if (diffLeft > diffTop) {
            moveGhostHorizontally();
        } else {
            moveGhostVertically();
        }

        checkGhost(ghostLeft,fromleft,ghostTop,fromtop);
    }, 500);
}

    function stopGhost() {
        clearInterval(ghostId);
    }

    function checkGhost(ghostLeft,fromleft,ghostTop,fromtop){
        if ((ghostLeft == fromleft) && (ghostTop == fromtop)){
            stopGhost()
            rebegin()
        }
    }

    function moveGhostHorizontally(){
        if(ghostLeft > fromleft){
            ghostLeft--; 
        }else{
            ghostLeft++;
        }
        let ghost = document.getElementById('ghost'+actual_board);
        ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
    }


    function moveGhostVertically(){
        if(ghostTop > fromtop){
            ghostTop--; 
        }else{
            ghostTop++;
        }
        let ghost = document.getElementById('ghost'+actual_board);
        ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
    }