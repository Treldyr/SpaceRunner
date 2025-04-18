function check_get_powswitch(height,length){
    for(let j= 0; j < pow_switch[actual_board].length; j++)
    {
        if(pow_switch[actual_board][j][2]){
            let idPow = "switch" + j + (actual_board)*100
            if((pow_switch[actual_board][j][0]==fromtop1)&&(pow_switch[actual_board][j][1]==fromleft1)){
                document.getElementById('pow'+idPow).remove();
                pow_switch[actual_board][j][2] = false;
                switch_players(height,length);
            }
            else if((pow_switch[actual_board][j][0]==fromtop2)&&(pow_switch[actual_board][j][1]==fromleft2)){
                document.getElementById('pow'+idPow).remove();
                pow_switch[actual_board][j][2] = false;
                switch_players(height,length);
            }
        }
    }
}

function switch_players(height,length){
    let temptop = fromtop2
    let templeft = fromleft2
    fromtop2 = fromtop1
    fromleft2 = fromleft1
    fromtop1 = temptop
    fromleft1 = templeft
    document.getElementById('character'+actual_board).setAttribute('style',"position: fixed;top : "+(height*fromtop1+5)+"vh;left : "+(length*fromleft1+5)+"vw;");
    document.getElementById('characterp2'+actual_board).setAttribute('style',"position: fixed;top : "+(height*fromtop2+5)+"vh;left : "+(length*fromleft2+5)+"vw;");
    
    
}