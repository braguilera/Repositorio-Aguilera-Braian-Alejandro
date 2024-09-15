document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Variables para los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Parámetros de EmailJS
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Enviar el email usando EmailJS
    emailjs.send("braaguileraa", "template_tpcebzi", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showPopup();
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            showPopup('Hubo un error al enviar el mensaje');
        });

});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Ocultar el popup después de 3 segundos
    setTimeout(function() {
        popup.classList.remove('show');
    }, 3000);
}