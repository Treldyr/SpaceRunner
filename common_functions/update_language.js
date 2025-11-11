function saveLanguage(language_name) {
    var lang = language_name
    var dataString = JSON.stringify(lang);
    localStorage.setItem('language', dataString);
}

function setLanguage(lang) {
    updateLanguageSettings(lang)
    saveLanguage(lang)
    updateLanguageIcon(lang)
}

function toggleLanguageModal() {
    const modal = document.getElementById("languageModal");
    modal.classList.toggle("active");
}

function updateLanguageIcon(lang) {
    const languageIcon = document.getElementById("language-icon");
    languageIcon.src = `images/flags/${lang}.png`;
}

updateLanguageIcon(retrieveLanguage())