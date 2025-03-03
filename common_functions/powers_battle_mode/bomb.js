
function doBomb(numberPower){
    turnTruePowUsed(numberPower)
    disablePowerItem("pouv"+numberPower)
    placeBomb()
}

function placeBomb() {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/specific/bomb.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * fromtop2 + 5) + "vh;left : " + (3.5 * fromleft2 + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "bomb" + actual_board);
    document.getElementById('laby1').appendChild(the_image);
    fromtopBomb = fromtop2
    fromleftBomb = fromleft2
}

function delete_bomb() {
    let bomb = document.getElementById('bomb0');
    if(bomb!==null){
        bomb.remove()
    } 
}