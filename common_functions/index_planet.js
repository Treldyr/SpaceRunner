var actualPage = 1
document.onkeydown = checkKey;
retrievePlayer()

function goNextPage(){
    let nextPage = actualPage+1
    document.getElementById('page'+actualPage).style.display = "none";
    document.getElementById('page'+nextPage).style.display = "block";
    actualPage = nextPage
}

for (i=0;i<document.getElementsByClassName("page").length;i++){
    document.getElementsByClassName("page")[i].style.display = "none";
}
document.getElementById('page1').style.display = "block";


function checkKey(e) {
    e = e || window.event;
    if ((e.keyCode == '32')||(e.keyCode == '13')) { // Space key or Enter key
        if(actualPage!=nbPage){
            goNextPage();
        } else {
            goNextAnimation();
        } 
    }
}