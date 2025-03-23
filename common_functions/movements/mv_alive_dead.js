// -------------------------------------------------------//
//                                                        //
//  LINEAR MOVEMENTS BUT WITH POSSIBILITY TO BE A GHOST   //
//                                                        //
// -------------------------------------------------------//

// TODO CLONES

function dest_downward(){
    if(isAlive){
        if(boards[actual_board][fromtop+1][fromleft]!=2){
            fromtop++;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    } else {
        fromtop++;
    }
    directionLaunched = "d"
}


function dest_leftward(){
    if(isAlive){
        if(boards[actual_board][fromtop][fromleft-1]!=2){
            fromleft--;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    } else {
        fromleft--;
    }
    directionLaunched = "l"
}


function dest_upward(){
    if(isAlive){
        if(boards[actual_board][fromtop-1][fromleft]!=2){
            fromtop--;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    } else {
        fromtop--;
    }
    directionLaunched = "u"
}


function dest_rigthward(){
    if(isAlive){
        if(boards[actual_board][fromtop][fromleft+1]!=2){
            fromleft++;
            playMove();
        }else{
            playWallHit()
        }
        document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    } else {
        fromleft++;
    }
    directionLaunched = "r"
}

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
        }
    }
}

function get_power_item(){
    // check for "alive" power items
    for(let j= 0; j < pow_alive[actual_board].length; j++)
    {
        let idPow = "alive" + j + (actual_board)*100
        if((pow_alive[actual_board][j][2])&&(pow_alive[actual_board][j][0]==fromtop)&&(pow_alive[actual_board][j][1]==fromleft)){
            document.getElementById('pow'+idPow).remove();
            pow_alive[actual_board][j][2] = false;
            get_powalive();
        }
    }

    // check for "death" power items
    for(let j= 0; j < pow_death[actual_board].length; j++)
    {
        let idPow = "death" + j + (actual_board)*100
        if((pow_death[actual_board][j][2])&&(pow_death[actual_board][j][0]==fromtop)&&(pow_death[actual_board][j][1]==fromleft)){
            document.getElementById('pow'+idPow).remove();
            pow_death[actual_board][j][2] = false;
            get_powdeath();
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
        let idPow = "shuriken" + j + (actual_board)*100
        if((pow_shuriken[actual_board][j][2])&&(pow_shuriken[actual_board][j][0]==fromtop)&&(pow_shuriken[actual_board][j][1]==fromleft)){
            document.getElementById('pow'+idPow).remove();
            pow_shuriken[actual_board][j][2] = false;
            get_powshuriken();
        }
    }
}

function get_powdeath(){
    isAlive = false
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/fantomp0.png");
    console.log("get death")
}

function get_powalive(){
    isAlive = true
    switch(directionLaunched){
        case "u":
            document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
        break;
        case "d":
            document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
        break;
        case "l":
            document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
        break;
        case "r":
            document.getElementById('character'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
        break;
        default:
            console.log('erreur direction')
    }
    console.log("get alive")
}

function get_powduplication(){
    console.log("get duplication")
}

function get_powshuriken(){
    console.log("get shuriken")
    shurikenAvailable = true;
}
