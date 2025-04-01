// -------------------------------------------------------//
//                                                        //
//  LINEAR MOVEMENTS BUT WITH POSSIBILITY TO BE A GHOST   //
//                                                        //
// -------------------------------------------------------//

function dest_downward(){
    if(isAlive){
        if((boards[actual_board][fromtop+1][fromleft]!=2)&&(!isAdditionnalBlockInTheWay(fromtop+1,fromleft))){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    } else {
        fromtop++;
    }
    if(hasClone){
        dest_upward_mirror_clone();
    }
    directionLaunched = "d"
}


function dest_leftward(){
    if(isAlive){
        if((boards[actual_board][fromtop][fromleft-1]!=2)&&(!isAdditionnalBlockInTheWay(fromtop,fromleft-1))){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    } else {
        fromleft--;
    }
    if(hasClone){
        dest_rigthward_mirror_clone();
    }
    directionLaunched = "l"
}


function dest_upward(){
    if(isAlive){
        if((boards[actual_board][fromtop-1][fromleft]!=2)&&(!isAdditionnalBlockInTheWay(fromtop-1,fromleft))){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    } else {
        fromtop--;
    }
    if(hasClone){
        dest_downward_mirror_clone();
    }
    directionLaunched = "u"
}


function dest_rigthward(){
    if(isAlive){
        if((boards[actual_board][fromtop][fromleft+1]!=2)&&(!isAdditionnalBlockInTheWay(fromtop,fromleft+1))){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    } else {
        fromleft++;
    }
    if(hasClone){
        dest_leftward_mirror_clone();
    }
    directionLaunched = "r"
}

// -------------------------------------------------------//
//                                                        //
//                FUNCTIONS TREATMENT EVENTS              //
//                                                        //
// -------------------------------------------------------//

function treatment_arrival_case(){
    get_power_item()
    if(isAlive){
        if(boards[actual_board][fromtop][fromleft]==0 || boards[actual_board][fromtop][fromleft]==4)
        {
            if(!game_ended){
                finish_labyrinth();
            }
        } else if(boards[actual_board][fromtop][fromleft]==3){
            reset_level();
        } else if((hasClone)&&(boards[actual_board][fromtop_clone][fromleft_clone]==3)){
            reset_level();
        }
    }
    if((fromtop<0)||(fromleft<0)||(fromleft_clone<0)||(fromtop_clone<0)){
        reset_level();
    }
    
}

function get_power_item(){
    // check for "alive" power items
    for(let j= 0; j < pow_alive[actual_board].length; j++)
    {
        if(pow_alive[actual_board][j][2]){
            if(((pow_alive[actual_board][j][0]==fromtop)&&(pow_alive[actual_board][j][1]==fromleft))
                ||((hasClone)&&(pow_alive[actual_board][j][0]==fromtop_clone)&&(pow_alive[actual_board][j][1]==fromleft_clone))){
            
                    let idPow = "alive" + j + (actual_board)*100
                    document.getElementById('pow'+idPow).remove();
                    pow_alive[actual_board][j][2] = false;
                    get_powalive();
            }
        }
    }

    // check for "death" power items
    for(let j= 0; j < pow_death[actual_board].length; j++)
    {
        if(pow_death[actual_board][j][2]){
            if(((pow_death[actual_board][j][0]==fromtop)&&(pow_death[actual_board][j][1]==fromleft))
                ||((hasClone)&&(pow_death[actual_board][j][0]==fromtop_clone)&&(pow_death[actual_board][j][1]==fromleft_clone))){
            
                    let idPow = "death" + j + (actual_board)*100
                    document.getElementById('pow'+idPow).remove();
                    pow_death[actual_board][j][2] = false;
                    get_powdeath();
            }
        }
    }

    // check for "duplication" power items
    for(let j= 0; j < pow_duplication[actual_board].length; j++)
    {
        let idPow = "duplication" + j + (actual_board)*100
        if((pow_duplication[actual_board][j][2])&&(pow_duplication[actual_board][j][0]==fromtop)&&(pow_duplication[actual_board][j][1]==fromleft)){
            document.getElementById('pow'+idPow).remove();
            pow_duplication[actual_board][j][2] = false;
            get_powduplication();
        }
    }

    // check for "shuriken" power items
    for(let j= 0; j < pow_shuriken[actual_board].length; j++)
    {
        if(pow_shuriken[actual_board][j][2]){
            if(((pow_shuriken[actual_board][j][0]==fromtop)&&(pow_shuriken[actual_board][j][1]==fromleft))
                ||((hasClone)&&(pow_shuriken[actual_board][j][0]==fromtop_clone)&&(pow_shuriken[actual_board][j][1]==fromleft_clone))){
            
                    let idPow = "shuriken" + j + (actual_board)*100
                    document.getElementById('pow'+idPow).remove();
            pow_shuriken[actual_board][j][2] = false;
            get_powshuriken();
            }
        }
    }
}

function reset_level(){
    playLava()

    isAlive = true
    if(hasClone){
        delete_mirror_clone();
    }
    shurikenAvailable = false
    if(fromtopShuriken!=0){ // if there is an instance of shuriken, we delete it
        clearInterval(powshurikenId);
        delete_shuriken();
    }
    fromtop = coords_begin[actual_board][0];
    fromleft = coords_begin[actual_board][1];

    let cat = document.getElementById('character'+actual_board)
    cat.setAttribute('style',"position: fixed;top : "+(3*fromtop+5)+"vh;left : "+(2*fromleft+5)+"vw;");
    cat.setAttribute('src',"../../../images/"+chara+"down.png");

    for(let j= 0; j < levers[actual_board].length; j++)
    {
        let idLevers = j + (actual_board)*100
        if(levers[actual_board][j][2] == "off"){
            turn_on_lever(j,idLevers,3,2);
        }
    }

    replace_all_pows();
}

function replace_all_pows(){
    replace_pow("alive",pow_alive)
    replace_pow("death",pow_death)
    replace_pow("duplication",pow_duplication)
    replace_pow("shuriken",pow_shuriken)
}

function replace_pow(powname, pow_board){
    for(let j= 0; j < pow_board[actual_board].length; j++)
        {
            if(!pow_board[actual_board][j][2]){
                let idPow = powname + j + (actual_board)*100
                create_element(actual_board+1, 3, 2, "items/pow"+powname+".png", "pow"+idPow, pow_board[actual_board][j][0], pow_board[actual_board][j][1]);
                pow_board[actual_board][j][2] = true;
            }
        }
}