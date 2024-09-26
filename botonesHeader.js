//Funcionalidad para modo claro y oscuro

const btnTheme = document.querySelector('#theme-btn')

btnTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    btnTheme.classList.toggle('active')
});

//Funcionalidad para cambiar idioma

const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        fetch(`./${button.dataset.language}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) => {
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    el.innerHTML = data[section][value];
                })
            })
    })

})