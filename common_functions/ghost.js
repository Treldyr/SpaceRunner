function moveGhost(planet_id) {
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
            moveGhostHorizontally(planet_id);
        } else {
            moveGhostVertically(planet_id);
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
            returnToPresentation()
        }
    }

    function moveGhostHorizontally(planet_id){
        if(ghostLeft > fromleft){
            ghostLeft--; 
        }else{
            ghostLeft++;
        }
        let ghost = document.getElementById('ghost'+actual_board);
        switch(planet_id){
            case 6:
                ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
            break;
            case 7:
                ghost.setAttribute('style', "position: fixed;top : " + (3*ghostTop+5) + "vh;left : " + (2*ghostLeft+5) + "vw;");
            break;
            default:
                console.log('erreur id planet')
        }
        
    }


    function moveGhostVertically(planet_id){
        if(ghostTop > fromtop){
            ghostTop--; 
        }else{
            ghostTop++;
        }
        let ghost = document.getElementById('ghost'+actual_board);
        switch(planet_id){
            case 6:
                ghost.setAttribute('style',"position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
            break;
            case 7:
                ghost.setAttribute('style', "position: fixed;top : " + (3*ghostTop+5) + "vh;left : " + (2 *ghostLeft+5) + "vw;");
            break;
            default:
                console.log('erreur id planet')
        }
    }