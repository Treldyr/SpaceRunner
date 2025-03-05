function spawn_papy(){
    if(!isCatMoved){
        isCatMoved = true
        movePapy("d")
    }
}

function movePapy(direction){
    let papy = document.getElementById('papy'+actual_board);
    switch(direction){
        case "u":
            bossTop--;
            papy.setAttribute('src',"../../../images/p20up.png");
        break;
        case "d":
            bossTop++;
            papy.setAttribute('src',"../../../images/p20down.png");
        break;
        case "l":
            bossLeft--;
            papy.setAttribute('src',"../../../images/p20left.png");
        break;
        case "r":
            bossLeft++;
            papy.setAttribute('src',"../../../images/p20right.png");
        break;
        default:
            console.log('erreur direction')
    }
    papy.setAttribute('style',"position: fixed;top : "+(3*bossTop+5)+"vh;left : "+(2*bossLeft+5)+"vw;");
    checkPapy(bossLeft,fromleft,bossTop,fromtop)
}

const timeouts = new Set();

function delayMovePapy(direction) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            resolve(direction);
            timeouts.delete(timeoutId);
        }, 1000); // he is one second late 
        timeouts.add(timeoutId);
    }).then(movePapy);
}


function checkPapy(bossLeft,fromleft,bossTop,fromtop){
    if ((bossLeft == fromleft) && (bossTop == fromtop)){
        reset_level()
    }
}

function reset_level(){
    fromtop = coords_begin[actual_board][0];
    fromleft = coords_begin[actual_board][1];
    bossTop = coords_begin_boss[actual_board][0];
    bossLeft = coords_begin_boss[actual_board][1];

    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(3*fromtop+5)+"vh;left : "+(2*fromleft+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");
    let papy = document.getElementById('papy'+actual_board);
    papy.setAttribute('style',"position: fixed;top : "+(3*bossTop+5)+"vh;left : "+(2*bossLeft+5)+"vw;");

    isCatMoved = false

    for (const timeoutId of timeouts) {
        clearTimeout(timeoutId);
    }
    timeouts.clear();

    playLava()
    
    for(let j= 0; j < levers[actual_board].length; j++)
    {
        let idLevers = j + (actual_board)*100
        document.getElementById('character'+actual_board)
        if(levers[actual_board][j][2] == "off"){
            turn_on_lever(j,idLevers,3,2);
        }
    }
}