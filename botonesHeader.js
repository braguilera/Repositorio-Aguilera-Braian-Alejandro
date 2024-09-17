// Variable para almacenar los temporizadores de cierre
let languageTimeout, themeTimeout;

// Cambiar de idioma
function switchLanguage() {
    const currentLanguage = document.getElementById('current-language');
    const otherLanguage = document.getElementById('other-language');
    const languageBtn = document.getElementById('language-btn');

    if (currentLanguage.innerText === 'Español') {
        currentLanguage.innerText = 'Inglés';
        otherLanguage.innerText = 'Español';
        languageBtn.innerText = 'Inglés';
    } else {
        currentLanguage.innerText = 'Español';
        otherLanguage.innerText = 'Inglés';
        languageBtn.innerText = 'Español';
    }
}

// Cambiar entre modo oscuro y claro
function switchTheme() {
    const currentTheme = document.getElementById('current-theme');
    const otherTheme = document.getElementById('other-theme');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    if (currentTheme.innerText === 'Modo Claro') {
        currentTheme.innerText = 'Modo Oscuro';
        otherTheme.innerText = 'Modo Claro';
        themeBtn.innerText = 'Modo Oscuro';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        currentTheme.innerText = 'Modo Claro';
        otherTheme.innerText = 'Modo Oscuro';
        themeBtn.innerText = 'Modo Claro';
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Mostrar opciones cuando se hace clic en el botón de idioma
document.getElementById('language-btn').addEventListener('click', function() {
    document.querySelector('.language-switch').classList.toggle('show-options');
});

// Mostrar opciones cuando se hace clic en el botón de modo oscuro/claro
document.getElementById('theme-btn').addEventListener('click', function() {
    document.querySelector('.theme-switch').classList.toggle('show-options');
});

// Cerrar opciones después de cierto tiempo de dejar el mouse fuera del botón de idioma
document.querySelector('.language-switch').addEventListener('mouseleave', function() {
    clearTimeout(languageTimeout);
    languageTimeout = setTimeout(() => {
        document.querySelector('.language-switch').classList.remove('show-options');
    }, 2000);  // 2 segundos
});

// Cancelar el temporizador si el mouse vuelve a entrar en el área de idioma
document.querySelector('.language-switch').addEventListener('mouseenter', function() {
    clearTimeout(languageTimeout);
});

// Cerrar opciones después de cierto tiempo de dejar el mouse fuera del botón de tema
document.querySelector('.theme-switch').addEventListener('mouseleave', function() {
    clearTimeout(themeTimeout);
    themeTimeout = setTimeout(() => {
        document.querySelector('.theme-switch').classList.remove('show-options');
    }, 2000);  // 2 segundos
});

// Cancelar el temporizador si el mouse vuelve a entrar en el área de tema
document.querySelector('.theme-switch').addEventListener('mouseenter', function() {
    clearTimeout(themeTimeout);
});
