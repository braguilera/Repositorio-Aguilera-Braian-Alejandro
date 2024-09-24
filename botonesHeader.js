// Obtener los elementos del DOM
const themeBtn = document.getElementById('theme-btn');
const languageBtn = document.getElementById('language-btn');
const themeOptions = document.getElementById('theme-options');
const languageOptions = document.getElementById('language-options');
const currentTheme = document.getElementById('current-theme');
const currentLanguage = document.getElementById('current-language');
const otherTheme = document.getElementById('other-theme');
const otherLanguage = document.getElementById('other-language');

// Evento al hacer clic en el botón de idioma para mostrar las opciones
languageBtn.addEventListener('click', function() {
    languageOptions.classList.toggle('show-options');
});

// Evento al hacer clic en el botón de tema para mostrar las opciones
themeBtn.addEventListener('click', function() {
    themeOptions.classList.toggle('show-options');
});

// Cambiar el tema (modo oscuro / claro)
function switchTheme() {
    let theme = localStorage.getItem('theme');
    
    if (theme === 'dark') {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        currentTheme.textContent = 'Modo Claro';
        otherTheme.textContent = 'Modo Oscuro';
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        currentTheme.textContent = 'Modo Oscuro';
        otherTheme.textContent = 'Modo Claro';
    }
}

// Cambiar el idioma
function switchLanguage() {
    let language = localStorage.getItem('language');
    
    if (language === 'es') {
        localStorage.setItem('language', 'en');
        currentLanguage.textContent = 'English';
        otherLanguage.textContent = 'Español';
        languageBtn.textContent = 'English';
    } else {
        localStorage.setItem('language', 'es');
        currentLanguage.textContent = 'Español';
        otherLanguage.textContent = 'English';
        languageBtn.textContent = 'Español';
    }
}

// Aplicar el tema y el idioma guardados al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem('theme');
    let language = localStorage.getItem('language');
    
    // Aplicar el modo oscuro si está seleccionado
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        currentTheme.textContent = 'Modo Oscuro';
        otherTheme.textContent = 'Modo Claro';
    } else {
        currentTheme.textContent = 'Modo Claro';
        otherTheme.textContent = 'Modo Oscuro';
    }

    // Aplicar el idioma guardado
    if (language === 'en') {
        currentLanguage.textContent = 'English';
        otherLanguage.textContent = 'Español';
        languageBtn.textContent = 'English';
    } else {
        currentLanguage.textContent = 'Español';
        otherLanguage.textContent = 'English';
        languageBtn.textContent = 'Español';
    }
});

// Asociar eventos de clic a las opciones
otherTheme.addEventListener('click', switchTheme);
otherLanguage.addEventListener('click', switchLanguage);
