//Funcionalidad para modo claro y oscuro
const btnTheme = document.querySelector('#theme-btn');

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btnTheme.classList.add('active');
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
});

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnTheme.classList.toggle('active');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

//Funcionalidad para cambiar idioma
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

const es = document.querySelector('#boton_es');
const en = document.querySelector('#boton_en');

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.language;
        changeLanguage(selectedLanguage);
    });
});

function changeLanguage(language) {
    fetch(`./JavaScript/${language}.json`)
        .then(res => res.json())
        .then(data => {
            textsToChange.forEach((el) => {
                const section = el.dataset.section;
                const value = el.dataset.value;
                el.innerHTML = data[section][value];
            });
        });

    if (language === 'es') {
        es.classList.add("language__active");
        en.classList.remove("language__active");
    } else {
        es.classList.remove("language__active");
        en.classList.add("language__active");
    }

    localStorage.setItem('language', language);
}
