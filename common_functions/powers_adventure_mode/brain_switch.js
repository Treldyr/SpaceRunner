var powerItemLeft = 0;
var powerItemTop = 0;
var isBrain = false;
var brainId;
var isNextItemBrain = false

function check_get_powItem(){
    if((powerItemTop==fromtop1)&&(powerItemLeft==fromleft1)){
        getPowItem(true)
    }
    else if((powerItemTop==fromtop2)&&(powerItemLeft==fromleft2)){
        getPowItem(false)
    }
}

function getPowItem(isPlayerOne){
    document.getElementById('actualPowItem').remove();
    playSuccess()
    if(isNextItemBrain){
        activateBrain(isPlayerOne)
    } else {
        switch_players(5,3.5)
    }
}

function generatePowItem(){
    isNextItemBrain = !isNextItemBrain
    powerItemTop = getRandomIntMax(13)+1
    powerItemLeft = getRandomIntMax(22)+1
    if(boards[actual_board][powerItemTop][powerItemLeft]==2){
        powerItemLeft++;
    }
    let powitem = document.createElement('img');
    if(isNextItemBrain){
        powitem.setAttribute('src', "../../../images/items/powbrain.png");
    } else {
        powitem.setAttribute('src', "../../../images/items/powswitch.png");
    }
    powitem.setAttribute('style', "position: fixed;top : "+(5*powerItemTop+5)+"vh;left : "+(3.5*powerItemLeft+5)+"vw;");
    powitem.className = "img_of_laby";
    powitem.setAttribute('id', "actualPowItem");
    document.getElementById('laby1').appendChild(powitem);
}


function activateBrain(isPlayerOne){
    isBrain = true
    powerItemLeft = 0
    powerItemTop = 0
    if(isPlayerOne){
        playerOneImmo = true
    } else {
        playerTwoImmo = true
    }
    brainId = setInterval(() => {
        playerOneImmo = false
        playerTwoImmo = false
        isBrain = false
        generatePowItem()
        clearInterval(brainId);
    }, 3000); // run the function for 3 seconds
}


function switch_players(height,length){
    let temptop = fromtop2
    let templeft = fromleft2
    fromtop2 = fromtop1
    fromleft2 = fromleft1
    fromtop1 = temptop
    fromleft1 = templeft
    document.getElementById('character'+actual_board).setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    document.getElementById('characterp2'+actual_board).setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;"); 
    generatePowItem()
}