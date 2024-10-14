// --------------------------------------------------//
//                                                   //
//   CONSTRUCTION OF THE BOARD FOR THE TINY PLANETS  //
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

function construct_tiny_line(line, numline, numboard) {
    for (let j = 0; j < line.length; j++) {
        let the_image = document.createElement('img');
        the_image.setAttribute('src', "img" + line[j] + ".png");
        the_image.setAttribute('style', "position: fixed;top : " + (7 * numline + 5) + "vh;left : " + (5 * j + 5) + "vw;");
        the_image.className = "img_of_laby";
        document.getElementById('laby' + numboard).appendChild(the_image);
    }
}

function create_tiny_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (7 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (5 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

// --------------------------------------------------//
//                                                   //
//  CONSTRUCTION OF THE BOARD FOR THE NORMAL PLANETS //
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

function create_character(numboard) {
    let the_image = document.createElement('img');
    the_image.setAttribute('src', "../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * coords_begin[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin[numboard - 1][1] + 5) + "vw;");
    the_image.className = "img_of_laby";
    the_image.setAttribute('id', "character" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop = coords_begin[numboard - 1][0];
    fromleft = coords_begin[numboard - 1][1];
}

// --------------------------------------------------//
//                                                   //
//  CONSTRUCTION OF THE GAZ BOARD FOR NORMAL PLANETS //
//                                                   //
// --------------------------------------------------//

function place_gaz(numboard){
    for(let j= 0; j < gaz[numboard-1].length; j++)
    {
        let idGaz = j + (numboard-1)*4
        let the_image = document.createElement('img');
        the_image.setAttribute('src',"../images/gaz_bottle2.png");
        the_image.setAttribute('style',"position: fixed;top : "+(5*gaz[numboard-1][j][0]+5) + "vh;left : " +(3.5*gaz[numboard-1][j][1]+5)+ "vw;");
        the_image.className = "img_of_laby";
        the_image.setAttribute('id',"gaz"+idGaz);
        document.getElementById('laby'+numboard).appendChild(the_image);
    }
    found_b1 = false;
    found_b2 = false;
    found_b0 = false;
}


function construct_board_with_gaz(numboard){
    actual_board = numboard-1;
    for(let i= 0; i < boards[numboard-1].length; i++)
    {
        construct_line(boards[numboard-1][i],i,numboard);
    }
    create_character(numboard);
    place_gaz(numboard);
}