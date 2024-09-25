const btnTheme = document.querySelector('#theme-btn')

btnTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    btnTheme.classList.toggle('active')
});