var p1_speed = false;
var p2_speed = false;

function check_get_powspeed(){
    for(let j= 0; j < pow_speed[actual_board].length; j++)
    {
        if(pow_speed[actual_board][j][2]){
            let idPow = "speed" + j + (actual_board)*100
            if((pow_speed[actual_board][j][0]==fromtop1)&&(pow_speed[actual_board][j][1]==fromleft1)){
                document.getElementById('pow'+idPow).remove();
                pow_speed[actual_board][j][2] = false;
                p1_speed = true
            }
            else if((pow_speed[actual_board][j][0]==fromtop2)&&(pow_speed[actual_board][j][1]==fromleft2)){
                document.getElementById('pow'+idPow).remove();
                pow_speed[actual_board][j][2] = false;
                p2_speed = true
            }
        }
    }
}