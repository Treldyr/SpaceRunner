// load keyboard infos
var keyboard_inputs = retrieveKeyboard();


function is_input_up(e){
    if((keyboard_inputs=='AZERTY') && (e.keyCode == '90')){
        return true
    }
    if ((keyboard_inputs=='QWERTY') && (e.keyCode == '87')){
        return true
    }
    if (e.keyCode == '38'){
        return true
    }
    return false    
}

function is_input_down(e){
    if(e.keyCode == '83'){
        return true
    }
    if (e.keyCode == '40'){
        return true
    }
    return false
}


function is_input_left(e){
    if((keyboard_inputs=='AZERTY') && (e.keyCode == '81')){
        return true
    }
    if ((keyboard_inputs=='QWERTY') && (e.keyCode == '65')){
        return true
    }
    if (e.keyCode == '37'){
        return true
    }
    return false
}


function is_input_right(e){
    if (e.keyCode == '68'){
        return true
    }
    if (e.keyCode == '39'){
        return true
    }
    return false 
}


function is_input_up_p2_multiplayer(e){
    if((keyboard_inputs=='AZERTY') && (e.keyCode == '90')){
        return true
    }
    if ((keyboard_inputs=='QWERTY') && (e.keyCode == '87')){
        return true
    }
    return false    
}


function is_input_down_p2_multiplayer(e){
    if(e.keyCode == '83'){
        return true
    }
    return false
}


function is_input_left_p2_multiplayer(e){
    if((keyboard_inputs=='AZERTY') && (e.keyCode == '81')){
        return true
    }
    if ((keyboard_inputs=='QWERTY') && (e.keyCode == '65')){
        return true
    }
    return false
}


function is_input_right_p2_multiplayer(e){
    if (e.keyCode == '68'){
        return true
    }
    return false 
}