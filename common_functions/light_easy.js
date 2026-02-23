function set_light_case(numboard,numline,j){
    if((numline>=0)
        &&(j>=0)
        &&(numline<boards[numboard-1].length)
        &&(j<boards[numboard-1][0].length)){
            document.getElementById(numboard-1+"_"+numline+"_"+j).setAttribute('src',"img"+boards[numboard-1][numline][j]+".png");
    }
}

function show_light_case(numboard,numline,j){
    real_board = numboard+1
    set_light_case(real_board,numline,j)
}

// set all the light on for the cases around the given case, 2 block radius
function set_light_all_around(numboard,numline,j){
    set_light_case(numboard,numline-2,j)

    set_light_case(numboard,numline-1,j-1)
    set_light_case(numboard,numline-1,j)
    set_light_case(numboard,numline-1,j+1)

    set_light_case(numboard,numline,j-2)
    set_light_case(numboard,numline,j-1)
    set_light_case(numboard,numline,j)
    set_light_case(numboard,numline,j+1)
    set_light_case(numboard,numline,j+2)

    set_light_case(numboard,numline+1,j-1)
    set_light_case(numboard,numline+1,j)
    set_light_case(numboard,numline+1,j+1)

    set_light_case(numboard,numline+2,j)
}

function light_left(actual_board,fromtop,fromleft){
    show_light_case(actual_board,fromtop-2,fromleft)
    show_light_case(actual_board,fromtop-1,fromleft-1)
    show_light_case(actual_board,fromtop,fromleft-2)
    show_light_case(actual_board,fromtop+1,fromleft-1)
    show_light_case(actual_board,fromtop+2,fromleft)
}

function light_right(actual_board,fromtop,fromleft){
    show_light_case(actual_board,fromtop-2,fromleft)
    show_light_case(actual_board,fromtop-1,fromleft+1)
    show_light_case(actual_board,fromtop,fromleft+2)
    show_light_case(actual_board,fromtop+1,fromleft+1)
    show_light_case(actual_board,fromtop+2,fromleft)
}

function light_up(actual_board,fromtop,fromleft){
    show_light_case(actual_board,fromtop,fromleft-2)
    show_light_case(actual_board,fromtop-1,fromleft-1)
    show_light_case(actual_board,fromtop-2,fromleft)
    show_light_case(actual_board,fromtop-1,fromleft+1)
    show_light_case(actual_board,fromtop,fromleft+2)
}

function light_down(actual_board,fromtop,fromleft){
    show_light_case(actual_board,fromtop,fromleft-2)
    show_light_case(actual_board,fromtop+1,fromleft-1)
    show_light_case(actual_board,fromtop+2,fromleft)
    show_light_case(actual_board,fromtop+1,fromleft+1)
    show_light_case(actual_board,fromtop,fromleft+2)
}