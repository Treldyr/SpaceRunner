
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
//      THE FUNCTION THAT CONSTRUCT CHARACTERS       //
//                                                   //
// --------------------------------------------------//

function create_character(numboard, chara_height, chara_width) {
    // if character = tiny : chara_height = 7, chara_width = 5
    // if character = normal : chara_height = 5, chara_width = 3.5
    // if character = big : chara_height = 3, chara_width = 2
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (chara_height * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (chara_width * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

function create_2_character(numboard, chara_height, chara_width) {
    // if characters = tiny : chara_height = 7, chara_width = 5
    // if characters = normal : chara_height = 5, chara_width = 3.5
    // if characters = big : chara_height = 3, chara_width = 2

    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (chara_height * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (chara_width * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop1 = coords_begin[numboard - 1][0];
    fromleft1 = coords_begin[numboard - 1][1];

    let the_image2 = document.createElement('img');
    the_image2.setAttribute('src', "../../../images/" + charap2 + "down.png");
    the_image2.setAttribute('style', "position: fixed;top : " + (chara_height * coords_begin2[numboard - 1][0] + 5) + "vh;left : " + (chara_width * coords_begin2[numboard - 1][1] + 5) + "vw;");
    the_image2.className = "img_of_laby";
    the_image2.setAttribute('id', "characterp2" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image2);
    fromtop2 = coords_begin2[numboard - 1][0];
    fromleft2 = coords_begin2[numboard - 1][1];
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
    let ghost = document.createElement('img');
    ghost.setAttribute('src', "../../../images/fantomp0.png");
    ghost.setAttribute('style', "position: fixed;top : "+(ghost_height * ghostTop + 5)+"vh;left : "+(ghost_width * ghostLeft + 5)+"vw;");
    ghost.className = "img_of_laby";
    ghost.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost);
}


function create_ghosts(numboard){
    let ghost = document.createElement('img');
    ghost.setAttribute('src', "../../../images/fantomp0.png");
    ghost.setAttribute('style', "position: fixed;top : " + (3 * coords_begin_ghost_1[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin_ghost_1[numboard - 1][1] + 5) + "vw;");
    ghost.className = "img_of_laby";
    ghost.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost);
    ghostTop1 = coords_begin_ghost_1[numboard - 1][0];
    ghostLeft1 = coords_begin_ghost_1[numboard - 1][1];


    let ghost2 = document.createElement('img');
    ghost2.setAttribute('src', "../../../images/fantomp0.png");
    ghost2.setAttribute('style', "position: fixed;top : " + (3 * coords_begin_ghost_2[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin_ghost_2[numboard - 1][1] + 5) + "vw;");
    ghost2.className = "img_of_laby";
    ghost2.setAttribute('id', "ghost2_" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost2);
    ghostTop2 = coords_begin_ghost_2[numboard - 1][0];
    ghostLeft2 = coords_begin_ghost_2[numboard - 1][1];
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

    for(let j= 0; j < gaz[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*4
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../../../images/specific/"+imageItem+".png");
        the_image.setAttribute('style',"position: fixed;top : "+(item_height*gaz[numboard-1][j][0]+5) + "vh;left : " +(item_width*gaz[numboard-1][j][1]+5)+ "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id',"gaz"+idGaz);
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
    found_b1 = false;
    found_b2 = false;
    found_b0 = false;
}


function place_bombs(numboard){
    for(let j= 0; j < bomb[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*4
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../../../images/bomb.png");
        the_image.setAttribute('style',"position: fixed;top : "+(5*bomb[numboard-1][j][0]+5) + "vh;left : " +(3.5*bomb[numboard-1][j][1]+5)+ "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id',"bomb"+idGaz);
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
    found_b1 = false;
    found_b2 = false;
    found_b0 = false;
}


function place_air(numboard,sizetop,sizeleft){
    for(let j= 0; j < gaz[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*10
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../../../images/specific/gaz_bottle.png");
        the_image.setAttribute('style',"position: fixed;top : "+(sizetop*gaz[numboard-1][j][0]+5) + "vh;left : " +(sizeleft*gaz[numboard-1][j][1]+5)+ "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id',"air"+idGaz);
        document.getElementById('laby'+numboard).appendChild(the_image);
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
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../../../images/specific/lever_"+levers[numboard-1][j][2]+".png");
        the_image.setAttribute('style',"position: fixed;top : "+(lever_height * levers[numboard-1][j][0] + 5) + "vh;left : " +(lever_width * levers[numboard-1][j][1] + 5)+ "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id',"lever"+idLever);
        document.getElementById('laby'+numboard).appendChild(the_image);

        if(levers[numboard-1][j][2] == "on"){
            place_blocks_of_levers(numboard,j,3)
        } else {
            place_blocks_of_levers(numboard,j,4)
        }
    }
}

function place_blocks_of_levers(numboard,j,column){ // column is 3 for on levers, and 4  for off levers
    for(let k= 0; k < levers[numboard-1][j][column].length; k++){
        AllAdditionnalBlocks.push([levers[numboard-1][j][column][k][0] , levers[numboard-1][j][column][k][1]])

        let theblock = document.createElement('img');
        theblock.setAttribute('src',"img2.png");
        theblock.setAttribute('style',"position: fixed;top : "+(5*levers[numboard-1][j][column][k][0]+5) + "vh;left : " +(3.5*levers[numboard-1][j][column][k][1]+5)+ "vw;");
        theblock.className = "img_of_laby";
        nbboard = numboard-1
        theblock.setAttribute('id',"additionBlock"+nbboard+"_"+j+"_"+k);
        document.getElementById('laby'+numboard).appendChild(theblock);
    }
}

function create_big_coal_hat(numboard){
    id_board = numboard-1
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/specific/coal_hat_down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (3 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "hat" + id_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
}

// --------------------------------------------------//
//                                                   //
//        CONSTRUCTION OF THE NORMAL BOARD           //
//                                                   //
// --------------------------------------------------//

function construct_board(numboard, case_height, case_width){
    // if line = tiny : case_height = 7, case_width = 5
    // if line = normal : case_height = 5, case_width = 3.5
    // if line = big : case_height = 3, case_width = 2
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

function construct_board_2_players(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard,5,3.5,false);
    }
    create_2_character(numboard,5,3.5);
}

function construct_board_2p_with_gaz(numboard,object){
    construct_board_2_players(numboard)
    place_item(numboard,object,5,3.5);
}

function construct_board_2p_with_levers(numboard){
    construct_board_2_players(numboard);
    place_levers(numboard,5,3.5)
}

function construct_board_with_boss_and_bombs(numboard,number_boss){
    construct_board(numboard,5,3.5);
    create_boss(numboard,number_boss);
    place_bombs(numboard)
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

// --------------------------------------------------//
//                                                   //
//         CONSTRUCTION OF A BOSS CHARACTER          //
//                                                   //
// --------------------------------------------------//

function create_boss(numboard,number_boss){
    bossTop = coords_begin_boss[numboard - 1][0];
    bossLeft = coords_begin_boss[numboard - 1][1];
    let boss = document.createElement('img');
    boss.setAttribute('src', "../../../images/p"+number_boss+"left.png");
    boss.setAttribute('style', "position: fixed;top : "+(5*coords_begin_boss[numboard - 1][0]+5)+"vh;left : "+(3.5*coords_begin_boss[numboard - 1][1]+5)+"vw;");
    boss.className = "img_of_laby";
    boss.setAttribute('id', "boss" + actual_board);
    document.getElementById('laby' + numboard).appendChild(boss);
}