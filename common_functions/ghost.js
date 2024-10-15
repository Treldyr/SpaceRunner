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
            moveGhostHorizontally();
        } else {
            moveGhostVertically();
        }

        checkGhost(ghostLeft,fromleft,ghostTop,fromtop,planet_id);
    }, 500);
}

    function stopGhost() {
        clearInterval(ghostId);
    }

    function checkGhost(ghostLeft,fromleft,ghostTop,fromtop,planet_id){
        if ((ghostLeft == fromleft) && (ghostTop == fromtop)){
            stopGhost()
            switch(planet_id){
                case 6:
                    window.location.href='../planet6/main_fantom.html';
                break;
                case 7:
                    window.location.href='../planet7/main_rouge.html';
                break;
                default:
                    console.log('erreur id planet')
            }
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