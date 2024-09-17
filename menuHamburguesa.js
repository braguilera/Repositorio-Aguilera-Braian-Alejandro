// Obtener los elementos del DOM
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuContainer = document.getElementById('menu-container');

// Agregar evento al ícono de hamburguesa para abrir/cerrar el menú
hamburgerIcon.addEventListener('click', function() {
    menuContainer.classList.toggle('show-menu');
});

// Opción: cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!menuContainer.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        menuContainer.classList.remove('show-menu');
    }
});
