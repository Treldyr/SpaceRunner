function get_powdeath(){
    isAlive = false
    document.getElementById('character'+actual_board).setAttribute('src',"../../../images/fantomp0.png");
    if(hasClone){
        document.getElementById('mclone'+actual_board).setAttribute('src',"../../../images/fantomp0.png");
    }
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