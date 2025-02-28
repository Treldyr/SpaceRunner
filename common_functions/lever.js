AllAdditionnalBlocks = []

function check_lever_superposition_p1(){
    for(let j= 0; j < levers[actual_board].length; j++)
    {
        if((levers[actual_board][j][0]==fromtop1)&&(levers[actual_board][j][1]==fromleft1)){
            update_lever(j,levers[actual_board][j][2])
            playLever()
        }
    }   
}

function check_lever_superposition_p2(){
    for(let j= 0; j < levers[actual_board].length; j++)
    {
        if((levers[actual_board][j][0]==fromtop2)&&(levers[actual_board][j][1]==fromleft2)){
            update_lever(j,levers[actual_board][j][2])
            playLever()
        }
    }   
}

function update_lever(j,actualState){
    idLevers = j + actual_board*10;
    if(actualState=="off"){
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_on.png";
        levers[actual_board][j][2] = "on"
        let numeroBoard = actual_board+1
        place_blocks_of_levers(numeroBoard,j)
    }
    if(actualState=="on"){
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_off.png";
        levers[actual_board][j][2] = "off"
        delete_blocks_of_levers(j)
    }
}

function delete_blocks_of_levers(j){
    for(let k= 0; k < levers[actual_board][j][3].length; k++){
        delete_from_additionnal_blocks(levers[actual_board][j][3][k][0] , levers[actual_board][j][3][k][1])
        console.log()
        document.getElementById("additionBlock"+actual_board+"_"+j+"_"+k).remove();

    }
}

function delete_from_additionnal_blocks(val1, val2) {
    let index = AllAdditionnalBlocks.findIndex(subTab => subTab[0] === val1 && subTab[1] === val2);
    if (index !== -1) {
        AllAdditionnalBlocks.splice(index, 1);
    }
}



function isAdditionnalBlockInTheWay(fleft,fright) {
    for(let k= 0; k < AllAdditionnalBlocks.length; k++){
        if((AllAdditionnalBlocks[k][0] == fleft) && (AllAdditionnalBlocks[k][1] == fright)){
            return true
        }
    }
    return false
}