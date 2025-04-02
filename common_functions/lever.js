AllAdditionnalBlocks = []

function check_lever_superposition(valueleft, valuetop, lever_height, lever_width){    
    // if case = tiny : case_height = 7, case_width = 5
    // if case = normal : case_height = 5, case_width = 3.5
    // if case = big : case_height = 3, case_width = 2
    for(let j= 0; j < levers[actual_board].length; j++)
    {
        if((levers[actual_board][j][0]==valuetop)&&(levers[actual_board][j][1]==valueleft)){
            update_lever(j, levers[actual_board][j][2], lever_height, lever_width)
            playLever()
        }
    }   
}


function update_lever(j,actualState, lever_height, lever_width){
    idLevers = j + actual_board*100;
    if(actualState=="off"){
        turn_on_lever(j,idLevers, lever_height, lever_width);
    }
    if(actualState=="on"){
        turn_off_lever(j,idLevers, lever_height, lever_width);
    }
}

function turn_on_lever(j,idLevers, lever_height, lever_width){
    if (levers[actual_board][j].length == 6){
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_on_"+levers[actual_board][j][5]+".png";
    } else {
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_on.png";
    }
    levers[actual_board][j][2] = "on"
    let numeroBoard = actual_board+1
    place_blocks_of_levers(numeroBoard,j,3, lever_height, lever_width)
    delete_blocks_of_levers(j,4)
}

function turn_off_lever(j,idLevers, lever_height, lever_width){
    if (levers[actual_board][j].length == 6){
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_off_"+levers[actual_board][j][5]+".png";
    } else {
        document.getElementById("lever"+idLevers).src = "../../../images/specific/lever_off.png";
    }
    levers[actual_board][j][2] = "off"
    delete_blocks_of_levers(j,3)
    let numeroBoard = actual_board+1
    place_blocks_of_levers(numeroBoard,j,4, lever_height, lever_width)
}

function delete_blocks_of_levers(j,column){ // column is 3 for off levers, and 4 for on levers
    for(let k= 0; k < levers[actual_board][j][column].length; k++){
        delete_from_additionnal_blocks(levers[actual_board][j][column][k][0] , levers[actual_board][j][column][k][1])
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