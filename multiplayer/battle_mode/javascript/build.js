// construction of the labyrinth

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
    the_image.setAttribute('src', "../../../images/" + chara + "down.png");
    the_image.setAttribute('style', "position: fixed;top : " + (5 * coords_begin_1[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin_1[numboard - 1][1] + 5) + "vw;");
    the_image.setAttribute('id', "character" + actual_board);
    the_image.className = "img_of_laby";
    document.getElementById('laby' + numboard).appendChild(the_image);
    fromtop1 = coords_begin_1[numboard - 1][0];
    fromleft1 = coords_begin_1[numboard - 1][1];


    let the_image2 = document.createElement('img');
    the_image2.setAttribute('src', "../../../images/fantom" + charap2 + ".png");
    the_image2.setAttribute('style', "position: fixed;top : " + (5 * coords_begin_2[numboard - 1][0] + 5) + "vh;left : " + (3.5 * coords_begin_2[numboard - 1][1] + 5) + "vw;");
    the_image2.className = "img_of_laby";
    the_image2.setAttribute('id', "ghost" + actual_board);
    document.getElementById('laby' + numboard).appendChild(the_image2);
    fromtop2 = coords_begin_2[numboard - 1][0];
    fromleft2 = coords_begin_2[numboard - 1][1];
}