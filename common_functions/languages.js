function retrieveLanguage() {
    var storedData = localStorage.getItem('language');
    if (storedData !== null) {
        return(JSON.parse(storedData))
    }
    return "fr"
}

function updateLanguageSettings(lang){
    // Set the attribute "lang" of the Html beacon
    document.documentElement.lang = lang;

    // Update all elements having the attribute "data-lang-key"
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = languageData[lang][key];
    });
}

// Initialization of the default language (french)
updateLanguageSettings(retrieveLanguage());