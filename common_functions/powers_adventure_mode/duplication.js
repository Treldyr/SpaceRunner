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
    numboard_clone = actual_board+1
    document.getElementById('laby'+numboard_clone).appendChild(the_mirror);
}

function delete_mirror_clone(){
    hasClone = false
    fromtop_clone = 0;
    fromleft_clone = 0;
    document.getElementById('mclone'+actual_board).remove();
}

// -------------------------------------------------------//
//                                                        //
//                 MOVEMENTS MIRROR CLONE                 //
//                                                        //
// -------------------------------------------------------//

function dest_downward_mirror_clone(){
    if(isAlive){
        if((boards[actual_board][fromtop_clone+1][fromleft_clone]!=2)&&(!isAdditionnalBlockInTheWay(fromtop_clone+1,fromleft_clone))){
            fromtop_clone++;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"down.png");
    } else {
        fromtop_clone++;
    }
}

function dest_rigthward_mirror_clone(){
    if(isAlive){
        if((boards[actual_board][fromtop_clone][fromleft_clone+1]!=2)&&(!isAdditionnalBlockInTheWay(fromtop_clone,fromleft_clone+1))){
            fromleft_clone++;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"right.png");
    } else {
        fromleft_clone++;
    }
}

function dest_leftward_mirror_clone(){
    if(isAlive){
        if((boards[actual_board][fromtop_clone][fromleft_clone-1]!=2)&&(!isAdditionnalBlockInTheWay(fromtop_clone,fromleft_clone-1))){
            fromleft_clone--;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"left.png");
    } else {
        fromleft_clone--;
    }
}

function dest_upward_mirror_clone(){
    if(isAlive){
        if((boards[actual_board][fromtop_clone-1][fromleft_clone]!=2)&&(!isAdditionnalBlockInTheWay(fromtop_clone-1,fromleft_clone))){
            fromtop_clone--;
        }
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/"+chara+"up.png");
    } else {
        fromtop_clone--;
    }
}