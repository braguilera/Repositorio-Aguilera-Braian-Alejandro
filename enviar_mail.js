// Inicializar EmailJS
(function(){
    emailjs.init("AqTKzzJKBtNdXcRo1");  // Reemplaza con tu user_id de EmailJS
})();

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recolectar datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;  // Asunto
    const message = document.getElementById('message').value;

    // Enviar el formulario con EmailJS
    emailjs.send("braaguileraa", "template_tpcebzi", {
        from_name: name,
        from_email: email,
        subject: subject,  // Agregar el asunto
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showPopup();  // Mostrar popup de éxito
    }, function(error) {
        console.log('FAILED...', error);
    });
});

// Función para mostrar el popup de éxito
function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Ocultar el popup después de 3 segundos
    setTimeout(function() {
        popup.classList.remove('show');
    }, 3000);
}
