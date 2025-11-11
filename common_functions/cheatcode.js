function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Conserve in 32 bits signed
    }
    return Math.abs(hash).toString(16);
}

function handleCheatCode(event) {
    event.preventDefault();
    const input = document.getElementById('cheatCode').value;
    const hash = simpleHash(input);

    switch(hash){
    case "1a201865":
        UnlockPlanet(19)
        alert(languageData[document.documentElement.lang]["unlockAll1PLevels"]);
    break;
    case "4d703885":
        UnlockPlanet2pMode(8)
        alert(languageData[document.documentElement.lang]["unlockAll2PLevels"]);
    break;
    case "704e86c":
        UnlockGhost(4)
        alert(languageData[document.documentElement.lang]["unlockAllGhosts"]);
    break;
    case "5a5b64d":
        localStorage.clear();
        alert(languageData[document.documentElement.lang]["adventureInit"]);
    break;
    case "762bb533":
        UnlockSpecialCharacter()
        alert(languageData[document.documentElement.lang]["getfancy"]);
    break;
    default:
        alert(languageData[document.documentElement.lang]["errorcode"] +" : "+input);
    }
} 