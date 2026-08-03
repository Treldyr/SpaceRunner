function hideElementsByLevel(level) {
    for (i=0;i<document.getElementsByClassName("hgs").length;i++){
        let currentElement = document.getElementsByClassName("hgs")[i]
        if (currentElement.innerHTML > level){
            currentElement.style.display = "none";
        }
    }
}

function setPodium(player, avatarId, nameId, scoreId, dateId){
    if(!player) return;

    document.getElementById(avatarId).src =
        player.img ?
        "../../../images/" + player.img + "down.png"
        : "../../../images/p1down.png";

    document.getElementById(nameId).textContent = player.pseudo;

    document.getElementById(scoreId).textContent =
        pad(parseInt(player.bestTime / 6000)) + " : " +
        pad(Math.floor((player.bestTime / 100) % 60)) + " : " +
        pad(player.bestTime % 100);

    document.getElementById(dateId).textContent = player.date
}

function setScoreBoard(timesArray){
    // Display the sorted times in the table
    timesArray.forEach((data, index) => {
        let rank = index + 1  // Ranking based on the index (1 for first)
        if(rank > 3 && data.pseudo!="----"){
            const tr = document.createElement("tr");

            // Create the <td> elements and insert the data
            const tdRanking = document.createElement("td");
        
            tdRanking.textContent = index + 1;

            const tdPseudo = document.createElement("td");
            tdPseudo.textContent = data.pseudo;

            const tdScore = document.createElement("td");
            let nbTemps = data.bestTime;
            tdScore.textContent =  pad(parseInt(nbTemps / 6000)) + " : "+pad(Math.floor((nbTemps/100) % 60))+ " : "+pad((nbTemps) % 100);

            const tdDate = document.createElement("td");
            tdDate.textContent = data.date;

            const tdImg = document.createElement("td");
            const img = document.createElement("img");
            img.classList.add("avatar-img");
            img.src = data.img ? "../../../images/head/" + data.img + "head.png" : "../../../images/head/unknownhead.png";
            tdImg.appendChild(img);

            // Append the <td> elements to the <tr>
            tr.appendChild(tdRanking);
            tr.appendChild(tdPseudo);
            tr.appendChild(tdImg); 
            tr.appendChild(tdScore);
            tr.appendChild(tdDate);
            document.getElementById("bestTimes").appendChild(tr);
        }
    });
}

function setScoreBoardAndPodium(timesArray){
    // Sort the times array by bestTime in ascending order
    timesArray.sort((a, b) => a.bestTime - b.bestTime);

    // Creating the podium
    const first = timesArray[0];
    const second = timesArray[1];
    const third = timesArray[2];

    setPodium(third, "podiumAvatar3", "podiumName3", "podiumScore3", "podiumDate3");
    setPodium(first, "podiumAvatar1", "podiumName1", "podiumScore1", "podiumDate1");
    setPodium(second, "podiumAvatar2", "podiumName2", "podiumScore2", "podiumDate2");
    
    setScoreBoard(timesArray);
}