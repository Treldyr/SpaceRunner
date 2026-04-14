function createInputMap() {
    // Empêche doublon
    if (document.getElementById("overlayPseudo")) return;

    // Overlay
    const overlay = document.createElement("div");
    overlay.id = "overlayPseudo";

    // Box centrale
    const box = document.createElement("div");
    box.className = "popup-box";

    // Form
    const form = document.createElement("form");

    form.onsubmit = (event) => {
        event.preventDefault();

        if (input.value.trim() !== "") {
            pseudo = input.value;
            document.getElementById("playerPseudo").value = pseudo;
            localStorage.setItem("pseudo", pseudo);
            overlay.remove();
        }
    };

    // Input
    const input = document.createElement("input");
    input.type = "text";
    input.className = "playerName";
    input.value = pseudo;
    input.placeholder = "Pseudo";
    input.required = true;

    // Bouton valider (style existant)
    const validate = document.createElement("button");
    validate.textContent = "Valider";
    validate.type = "submit";
    validate.setAttribute("data-lang-key", "validate");

    // Bouton annuler
    const cancel = document.createElement("button");
    cancel.textContent = "Retour";
    cancel.type = "button";
    cancel.setAttribute("data-lang-key", "back");

    cancel.onclick = () => {
        overlay.remove();
    };

    // Titre
    const title = document.createElement("h1");
    title.textContent = "Choisissez votre pseudo";
    title.setAttribute("data-lang-key", "choosePseudo");
    title.style.color = "white"

    // Br Espace
    const space = document.createElement("br");


    // Assemblage
    form.appendChild(title);
    form.appendChild(space);
    form.appendChild(input);
    form.appendChild(validate);
    form.appendChild(cancel);

    box.appendChild(form);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    updateLanguageSettings(retrieveLanguage());
}