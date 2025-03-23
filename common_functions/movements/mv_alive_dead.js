// -------------------------------------------------------//
//                                                        //
//  LINEAR MOVEMENTS BUT WITH POSSIBILITY TO BE A GHOST   //
//                                                        //
// -------------------------------------------------------//

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
    if(hasClone){
        dest_upward_mirror_clone();
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
    if(hasClone){
        dest_rigthward_mirror_clone();
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
    if(hasClone){
        dest_downward_mirror_clone();
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
        }
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

// -------------------------------------------------------//
//                                                        //
//                   FUNCTIONS GET POWS                   //
//                                                        //
// -------------------------------------------------------//

function get_powdeath(){
    isAlive = false
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/fantomp0.png");
    if(hasClone){
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/fantomp0.png");
    }
}

function get_powshuriken(){
    shurikenAvailable = true;
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
            console.log('error direction')
    }
    if(hasClone){
        switch(directionLaunched){
            case "u":
                document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
            break;
            case "d":
                document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
            break;
            case "l":
                document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
            break;
            case "r":
                document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
            break;
            default:
                console.log('error direction')
        }
    }
}

function get_powduplication(){
    hasClone = true;
    fromtop_clone = fromtop;
    fromleft_clone = fromleft;
    create_mirror_clone();
}

// -------------------------------------------------------//
//                                                        //
//                 FUNCTIONS MIRROR CLONE                 //
//                                                        //
// -------------------------------------------------------//

function create_mirror_clone(){
    let the_mirror = document.createElement('img');
    if(isAlive){
        switch(directionLaunched){
            case "u":
                the_mirror.setAttribute('src',"../../../images/"+chara+"up.png");
            break;
            case "d":
                the_mirror.setAttribute('src',"../../../images/"+chara+"down.png");
            break;
            case "l":
                the_mirror.setAttribute('src',"../../../images/"+chara+"left.png");
            break;
            case "r":
                the_mirror.setAttribute('src',"../../../images/"+chara+"right.png");
            break;
            default:
                console.log('error direction')
        }
    }else{
        the_mirror.setAttribute('src',"../../../images/fantomp0.png");
    }
    
    the_mirror.setAttribute('style', "position: fixed;top : " + (3 * fromtop_clone + 5) + "vh;left : " + (2 * fromleft_clone + 5) + "vw;");
    the_mirror.className = "img_of_laby";
    the_mirror.setAttribute('id', "mclone"+actual_board);
    numboard_shuri = actual_board+1
    document.getElementById('laby'+numboard_shuri).appendChild(the_mirror);
}

// -------------------------------------------------------//
//                                                        //
//                 MOVEMENTS MIRROR CLONE                 //
//                                                        //
// -------------------------------------------------------//

function dest_downward_mirror_clone(){
    if(isAlive){
        if(boards[actual_board][fromtop_clone+1][fromleft_clone]!=2){
            fromtop_clone++;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    } else {
        fromtop_clone++;
    }
}

function dest_rigthward_mirror_clone(){
    if(isAlive){
        if(boards[actual_board][fromtop_clone][fromleft_clone+1]!=2){
            fromleft_clone++;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    } else {
        fromleft_clone++;
    }
}

function dest_leftward_mirror_clone(){
    if(isAlive){
        if(boards[actual_board][fromtop_clone][fromleft_clone-1]!=2){
            fromleft_clone--;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    } else {
        fromleft_clone--;
    }
}

function dest_upward_mirror_clone(){
    if(isAlive){
        if(boards[actual_board][fromtop_clone-1][fromleft_clone]!=2){
            fromtop_clone--;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    } else {
        fromtop_clone--;
    }
}