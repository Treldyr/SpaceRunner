
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

function construct_tiny_line(line, numline, numboard) {
    for (let j = 0; j < line.length; j++) {
        let the_image = document.createElement('img');
        the_image.setAttribute('src', "img" + line[j] + ".png");
        the_image.setAttribute('style', "position: fixed;top : " + (7 * numline + 5) + "vh;left : " + (5 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby' + numboard).appendChild(the_image);
    }
}

function construct_line(line,numline,numboard){
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"img"+line[j]+".png");
        the_image.setAttribute('style', "position: fixed;top : " + (5 * numline + 5) + "vh;left : " + (3.5 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

function construct_big_line(line,numline,numboard){
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"img"+line[j]+".png");
        the_image.setAttribute('style', "position: fixed;top : " + (3 * numline + 5) + "vh;left : " + (2 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

function construct_big_line_in_darkness(line,numline,numboard){
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"img4.png");
        the_image.setAttribute('id', actual_board+"_"+numline+"_"+j);
        the_image.setAttribute('style', "position: fixed;top : " + (3 * numline + 5) + "vh;left : " + (2 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

function construct_medium_line_in_darkness(line,numline,numboard){
    for(let j= 0; j < line.length; j++)
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"img4.png");
        the_image.setAttribute('id', actual_board+"_"+numline+"_"+j);
        the_image.setAttribute('style', "position: fixed;top : " + (5 * numline + 5) + "vh;left : " + (3.5 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
}

// --------------------------------------------------//
//                                                   //
//      THE FUNCTION THAT CONSTRUCT CHARACTERS       //
//                                                   //
// --------------------------------------------------//

function create_tiny_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (7 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (5 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

function create_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

function create_big_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (3 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

// --------------------------------------------------//
//                                                   //
//       CONSTRUCTION OF THE BOARD FOR GHOSTS        //
//                                                   //
// --------------------------------------------------//

function create_ghosts_and_characters(numboard) {
    {
        let the_image = document.createElement('img');
        the_image.setAttribute('src', "../../../images/" + chara + "down.png");
        the_image.setAttribute('style', "position: fixed;top : " + (3 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin[numboard - 1][1] + 5) + "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id', "character" + actual_board);
        document.getElementById('laby' + numboard).appendChild(the_image);
        fromtop1 = coords_begin[numboard - 1][0];
        fromleft1 = coords_begin[numboard - 1][1];


        let the_image2 = document.createElement('img');
        the_image2.setAttribute('src', "../../../images/" + charap2 + "down.png");
        the_image2.setAttribute('style', "position: fixed;top : " + (3 * coords_begin2[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin2[numboard - 1][1] + 5) + "vw;");
        the_image2.className = "img_of_laby";
        the_image2.setAttribute('id', "characterp2" + actual_board);
        document.getElementById('laby' + numboard).appendChild(the_image2);
        fromtop2 = coords_begin2[numboard - 1][0];
        fromleft2 = coords_begin2[numboard - 1][1];


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
}


function create_ghost(numboard){
    ghostTop = coords_begin_ghost[numboard - 1][0];
    ghostLeft = coords_begin_ghost[numboard - 1][1];
    let ghost = document.createElement('img');
    ghost.setAttribute('src', "../../../images/fantomp0.png");
    ghost.setAttribute('style', "position: fixed;top : "+(5*ghostTop+5)+"vh;left : "+(3.5*ghostLeft+5)+"vw;");
    ghost.className = "img_of_laby";
    ghost.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost);
}


function create_ghosts(numboard){
    var ghost = document.createElement('img');
    ghost.setAttribute('src', "../../../images/fantomp0.png");
    ghost.setAttribute('style', "position: fixed;top : " + (3 * coords_begin_ghost_1[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin_ghost_1[numboard - 1][1] + 5) + "vw;");
    ghost.className = "img_of_laby";
    ghost.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost);
    ghostTop1 = coords_begin_ghost_1[numboard - 1][0];
    ghostLeft1 = coords_begin_ghost_1[numboard - 1][1];


    var ghost2 = document.createElement('img');
    ghost2.setAttribute('src', "../../../images/fantomp0.png");
    ghost2.setAttribute('style', "position: fixed;top : " + (3 * coords_begin_ghost_2[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin_ghost_2[numboard - 1][1] + 5) + "vw;");
    ghost2.className = "img_of_laby";
    ghost2.setAttribute('id', "ghost2_" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost2);
    ghostTop2 = coords_begin_ghost_2[numboard - 1][0];
    ghostLeft2 = coords_begin_ghost_2[numboard - 1][1];
}


function create_big_ghost(numboard){
    var ghost = document.createElement('img');
    ghost.setAttribute('src', "../../../images/fantomp0.png");
    ghost.setAttribute('style', "position: fixed;top : " + (3 * coords_begin_ghost[numboard - 1][0] + 5) + "vh;left : " + (2 * coords_begin_ghost[numboard - 1][1] + 5) + "vw;");
    ghost.className = "img_of_laby";
    ghost.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(ghost);
    ghostTop = coords_begin_ghost[numboard - 1][0];
    ghostLeft = coords_begin_ghost[numboard - 1][1];
}

// --------------------------------------------------//
//                                                   //
//      CONSTRUCTION OF THE AIR AND GAZ AND BOMB     //
//                                                   //
// --------------------------------------------------//

function place_item(numboard,object){
    for(let j= 0; j < gaz[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*4
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../../../images/specific/"+object+".png");
        the_image.setAttribute('style',"position: fixed;top : "+(5*gaz[numboard-1][j][0]+5) + "vh;left : " +(3.5*gaz[numboard-1][j][1]+5)+ "vw;");
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

// --------------------------------------------------//
//                                                   //
//          CONSTRUCTION OF THE TINY BOARD           //
//                                                   //
// --------------------------------------------------//

function construct_tiny_board(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_tiny_line(boards[numboard-1][i],i,numboard);
    }
    create_tiny_character(numboard);
}

// --------------------------------------------------//
//                                                   //
//        CONSTRUCTION OF THE NORMAL BOARD           //
//                                                   //
// --------------------------------------------------//

function construct_board(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
}


function construct_board_with_gaz(numboard,object){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    place_item(numboard,object);
}


function construct_board_with_ghost(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    create_ghost(numboard);
}


function construct_board_with_2_ghosts(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_big_line(boards[numboard-1][i],i,numboard);
    }
    create_ghosts_and_characters(numboard)
}


// --------------------------------------------------//
//                                                   //
//    CONSTRUCTION OF THE MEDIUM BOARD WITH BOS      //
//                                                   //
// --------------------------------------------------//

function construct_board_with_boss_and_bombs(numboard,number_boss){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    create_boss(numboard,number_boss);
    place_bombs(numboard)
}


function construct_board_with_boss(numboard,number_boss){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    create_boss(numboard,number_boss);
}

function construct_board_with_boss_and_time(numboard,number_boss){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    create_boss(numboard,number_boss);
    create_ghost(numboard);
    place_air(numboard,5,3.5)
}

// --------------------------------------------------//
//                                                   //
//         CONSTRUCTION OF THE LARGE BOARD           //
//                                                   //
// --------------------------------------------------//

function construct_large_board(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_big_line(boards[numboard-1][i],i,numboard);
    }
    create_big_character(numboard);
}

function construct_large_board_with_ghost(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_big_line(boards[numboard-1][i],i,numboard);
    }
    create_big_character(numboard);
    create_big_ghost(numboard)
}

function construct_large_board_with_gaz(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_big_line(boards[numboard-1][i],i,numboard);
    }
    create_big_character(numboard);
    place_air(numboard,3,2);
}

function construct_large_board_in_darkness(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_big_line_in_darkness(boards[numboard-1][i],i,numboard);
    }
    create_big_character(numboard);
    set_light_all_around(numboard,fromtop,fromleft)
}

function construct_medium_board_in_darkness(numboard,number_boss){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_medium_line_in_darkness(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    create_boss(numboard,number_boss);
    hide_boss3()
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