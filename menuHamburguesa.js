// Obtener los elementos del DOM
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuContainer = document.getElementById('menu-container');

// Evento al hacer clic en el ícono del menú hamburguesa
hamburgerIcon.addEventListener('click', function() {
    menuContainer.classList.toggle('show-menu');
});
