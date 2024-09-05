document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario, si es necesario.

    // Mostrar popup de éxito
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);

    // Limpiar los campos del formulario
    document.getElementById('contactForm').reset();
});
