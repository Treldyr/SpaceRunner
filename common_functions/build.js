
// --------------------------------------------------//
//                                                   //
//          THE FUNCTION THAT CHANGE THE PAGE        //
//                                                   //
// --------------------------------------------------//

function goNext(number){
    let number2 = number+1;
    document.getElementById('page'+number).style.display = "none";
    document.getElementById('page'+number2).style.display = "block";
}

// --------------------------------------------------//
//                                                   //
//          THE FUNCTION THAT CONSTRUCT LINES        //
//                                                   //
// --------------------------------------------------//

function construct_line(line, numline, numboard, case_height, case_width, isInDarkness){
    // if line = tiny : case_height = 7, case_width = 5
    // if line = normal : case_height = 5, case_width = 3.5
    // if line = big : case_height = 3, case_width = 2
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');

        if(isInDarkness){
            the_image.setAttribute('src',"img4.png");
            the_image.setAttribute('id', actual_board+"_"+numline+"_"+j);
        }else{
            the_image.setAttribute('src',"img"+line[j]+".png");
        }

        the_image.setAttribute('style', "position: fixed;top : " + (case_height * numline + 5) + "vh;left : " + (case_width * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

// --------------------------------------------------//
//                                                   //
//        THE FUNCTION THAT CREATE ELEMENTS          //
//                                                   //
// --------------------------------------------------//

function create_element(numboard, elem_height, elem_width, img_name, elem_id, pos_left, pos_top) {
    // if element = tiny : elem_height = 7, elem_width = 5
    // if element = normal : elem_height = 5, elem_width = 3.5
    // if element = big : elem_height = 3, elem_width = 2

    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + img_name);
    the_image.setAttribute('style', "position: fixed;top : " + (elem_height * pos_left + 5) + "vh;left : " + (elem_width * pos_top + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', elem_id);
    document.getElementById('laby' + numboard).appendChild(the_image);
}

function create_boss(numboard,number_boss){
    bossTop = coords_begin_boss[numboard - 1][0];
    bossLeft = coords_begin_boss[numboard - 1][1];
    create_element(numboard, 5, 3.5, "p"+number_boss+"left.png", "boss" + actual_board, coords_begin_boss[numboard-1][0], coords_begin_boss[numboard-1][1])
}

function create_big_coal_hat(numboard){
    id_board = numboard-1
    create_element(numboard, 3, 2, "specific/coal_hat_down.png", "hat" + id_board, coords_begin[numboard - 1][0], coords_begin[numboard - 1][1])
}

function create_papy(numboard){
    bossTop = coords_begin_boss[numboard - 1][0];
    bossLeft = coords_begin_boss[numboard - 1][1];
    create_element(numboard, 3, 2, "p18down.png", "papy" + actual_board, coords_begin_boss[numboard-1][0], coords_begin_boss[numboard-1][1])
}


// --------------------------------------------------//
//                                                   //
//      THE FUNCTION THAT CONSTRUCT CHARACTERS       //
//                                                   //
// --------------------------------------------------//

function create_character(numboard, chara_height, chara_width) {
    // if character = tiny : chara_height = 7, chara_width = 5
    // if character = normal : chara_height = 5, chara_width = 3.5
    // if character = big : chara_height = 3, chara_width = 2

    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
    create_element(numboard, chara_height, chara_width, chara + "down.png", "character" + actual_board, fromtop, fromleft);
}

function create_2_character(numboard, chara_height, chara_width) {
    // if characters = tiny : chara_height = 7, chara_width = 5
    // if characters = normal : chara_height = 5, chara_width = 3.5
    // if characters = big : chara_height = 3, chara_width = 2

    fromtop1 = coords_begin[numboard - 1][0];
    fromleft1 = coords_begin[numboard - 1][1];
    create_element(numboard, chara_height, chara_width, chara + "down.png", "character" + actual_board, fromtop1, fromleft1);
    
    fromtop2 = coords_begin2[numboard - 1][0];
    fromleft2 = coords_begin2[numboard - 1][1];
    create_element(numboard, chara_height, chara_width, charap2 + "down.png", "characterp2" + actual_board, fromtop2, fromleft2);
}

// --------------------------------------------------//
//                                                   //
//       CONSTRUCTION OF THE BOARD FOR GHOSTS        //
//                                                   //
// --------------------------------------------------//

function create_ghosts_and_characters(numboard) {
    create_2_character(numboard,3,2)
    create_ghosts(numboard)
}

function create_ghost(numboard, ghost_height, ghost_width){
    // if ghost = tiny : ghost_height = 7, ghost_width = 5
    // if ghost = normal : ghost_height = 5, ghost_width = 3.5
    // if ghost = big : ghost_height = 3, ghost_width = 2

    ghostTop = coords_begin_ghost[numboard - 1][0];
    ghostLeft = coords_begin_ghost[numboard - 1][1];
    create_element(numboard, ghost_height, ghost_width, "fantomp0.png", "ghost" + actual_board, ghostTop, ghostLeft);
}


function create_ghosts(numboard){
    ghostTop1 = coords_begin_ghost_1[numboard - 1][0];
    ghostLeft1 = coords_begin_ghost_1[numboard - 1][1];
    create_element(numboard, 3, 2, "fantomp0.png", "ghost2_" + actual_board, ghostTop1, ghostLeft1);

    ghostTop2 = coords_begin_ghost_2[numboard - 1][0];
    ghostLeft2 = coords_begin_ghost_2[numboard - 1][1];
    create_element(numboard, 3, 2, "fantomp0.png", "ghost" + actual_board, ghostTop2, ghostLeft2); 
}

// --------------------------------------------------//
//                                                   //
//       CONSTRUCTION OF AIR, GAZ, BOMB, LEVERS      //
//                                                   //
// --------------------------------------------------//

function place_item(numboard,imageItem,item_height,item_width){
    // if item = tiny : item_height = 7, item_width = 5
    // if item = normal : item_height = 5, item_width = 3.5
    // if item = big : item_height = 3, item_width = 2

    for(let j= 0; j < item[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*4
        create_element(numboard, item_height, item_width, "specific/"+imageItem+".png", "item"+idGaz, item[numboard-1][j][0], item[numboard-1][j][1]); 
    }
    found_b1 = false;
    found_b2 = false;
    found_b0 = false;
}


function place_air(numboard,sizetop,sizeleft){
    for(let j= 0; j < gaz[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*10
        create_element(numboard, sizetop, sizeleft, "specific/gaz_bottle.png", "air"+idGaz, gaz[numboard-1][j][0], gaz[numboard-1][j][1]); 
    }
    found_b1 = false;
    found_b2 = false;
    found_b0 = false;
    found_b4 = false;
    found_b3 = false;
}

function place_levers(numboard, lever_height, lever_width){
    // if lever = tiny : lever_height = 7, lever_width = 5
    // if lever = normal : lever_height = 5, lever_width = 3.5
    // if lever = big : lever_height = 3, lever_width = 2

    for(let j= 0; j < levers[numboard-1].length; j++)
    {
        let idLever = j + (numboard-1)*100
        create_element(numboard, lever_height, lever_width, "specific/lever_"+levers[numboard-1][j][2]+".png", "lever"+idLever, levers[numboard-1][j][0], levers[numboard-1][j][1]); 

        if(levers[numboard-1][j][2] == "on"){
            place_blocks_of_levers(numboard,j,3,lever_height,lever_width)
        } else {
            place_blocks_of_levers(numboard,j,4,lever_height,lever_width)
        }
    }
}

function place_blocks_of_levers(numboard,j,column, case_height, case_width){ // column is 3 for on levers, and 4  for off levers
    // if case = tiny : case_height = 7, case_width = 5
    // if case = normal : case_height = 5, case_width = 3.5
    // if case = big : case_height = 3, case_width = 2
    for(let k= 0; k < levers[numboard-1][j][column].length; k++){
        AllAdditionnalBlocks.push([levers[numboard-1][j][column][k][0] , levers[numboard-1][j][column][k][1]])

        let theblock = document.createElement('img');
        theblock.setAttribute('src',"img2.png");
        theblock.setAttribute('style',"position: fixed;top : "+(case_height*levers[numboard-1][j][column][k][0]+5) + "vh;left : " +(case_width*levers[numboard-1][j][column][k][1]+5)+ "vw;");
        theblock.className = "img_of_laby";
        nbboard = numboard-1
        theblock.setAttribute('id',"additionBlock"+nbboard+"_"+j+"_"+k);
        document.getElementById('laby'+numboard).appendChild(theblock);
    }
}

function place_pow(name_pow, numboard, pow_height, pow_width){
    // if pow = tiny : pow_height = 7, pow_width = 5
    // if pow = normal : pow_height = 5, pow_width = 3.5
    // if pow = big : pow_height = 3, pow_width = 2
    let pow_board;
    switch(name_pow){
        case "alive":
            pow_board = pow_alive
        break;
        case "death":
            pow_board = pow_death
        break;
        case "duplication":
            pow_board = pow_duplication
        break;
        case "shuriken":
            pow_board = pow_shuriken
        break;
        default:
            console.log('error pow name')
    }
    for(let j= 0; j < pow_board[numboard-1].length; j++)
    {
        let idPow = name_pow + j + (numboard-1)*100
        create_element(numboard, pow_height, pow_width, "items/pow"+name_pow+".png", "pow"+idPow, pow_board[numboard-1][j][0], pow_board[numboard-1][j][1]);
    }
}

// --------------------------------------------------//
//                                                   //
//        CONSTRUCTION OF THE NORMAL BOARD           //
//                                                   //
// --------------------------------------------------//

function construct_board(numboard, case_height, case_width){
    // if board = tiny : case_height = 7, case_width = 5
    // if board = normal : case_height = 5, case_width = 3.5
    // if board = big : case_height = 3, case_width = 2
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard,case_height,case_width,false);
    }
    create_character(numboard,case_height,case_width);
}

function construct_board_with_parameters(numboard, case_height, case_width, isGhost, imageItem, isLevers, number_boss, isAir){
    construct_board(numboard,case_height,case_width);
    if(isGhost){
        create_ghost(numboard,case_height,case_width);
    }
    if(imageItem!=null){
        place_item(numboard,imageItem,case_height,case_width);
    }
    if(isLevers){
        place_levers(numboard,case_height,case_width)
    }
    if((number_boss!=null)&&(number_boss!=0)){
        create_boss(numboard,number_boss);
    }
    if(isAir){
        place_air(numboard,case_height,case_width)
    }
}

// --------------------------------------------------//
//                                                   //
//          CONSTRUCTION OF SPECIAL BOARDS           //
//                                                   //
// --------------------------------------------------//

function construct_board_with_2_ghosts(numboard){ 
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard,3,2,false);
    }
    create_ghosts_and_characters(numboard)
}


function construct_board_with_papy(numboard, case_height, case_width){
    for (const timeoutId of timeouts) {
        clearTimeout(timeoutId);
    }
    timeouts.clear();
    isCatMoved = false
    AllAdditionnalBlocks = []
    construct_board(numboard,case_height,case_width);
    create_papy(numboard)
    place_levers(numboard,case_height,case_width)
}

function construct_board_2_players(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard,5,3.5,false);
    }
    create_2_character(numboard,5,3.5);
}

function construct_board_2p_with_gaz(numboard,imageItem){
    construct_board_2_players(numboard)
    place_item(numboard,imageItem,5,3.5);
}

function construct_board_2p_with_levers(numboard){
    construct_board_2_players(numboard);
    place_levers(numboard,5,3.5)
}

function construct_board_in_darkness(numboard, case_height, case_width){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard,case_height,case_width,true);
    }
    create_character(numboard,case_height,case_width);
    set_light_all_around(numboard,fromtop,fromleft)
}

function construct_board_with_pows(numboard, case_height, case_width){
    // if board = tiny : case_height = 7, case_width = 5
    // if board = normal : case_height = 5, case_width = 3.5
    // if board = big : case_height = 3, case_width = 2
    construct_board(numboard, case_height, case_width);
    place_pow("alive", numboard, case_height, case_width)
    place_pow("death", numboard, case_height, case_width)
    place_pow("duplication", numboard, case_height, case_width)
    place_pow("shuriken", numboard, case_height, case_width)
    place_levers(numboard,case_height,case_width)
}