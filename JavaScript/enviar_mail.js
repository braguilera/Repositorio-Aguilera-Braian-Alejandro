document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.querySelector('.form__cta');
    
    submitButton.disabled = true;
    animateDots(submitButton);
    submitButton.style.backgroundColor = '#9050DD';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs.send("braaguileraa", "template_tpcebzi", templateParams)
        .then(function(response) {
            clearInterval(dotInterval);
            submitButton.value = 'Mensaje enviado';
            submitButton.style.transition = 'background-color 0.5s ease';
            submitButton.style.backgroundColor = 'green';

            document.getElementById('contactForm').reset();

            setTimeout(() => {
                submitButton.value = 'Enviar';
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '#ae89db';
            }, 3000);
        },
        function(error) {
            clearInterval(dotInterval);
            submitButton.value = 'Error al enviar';
            submitButton.style.backgroundColor = 'red'; 

            setTimeout(() => {
                submitButton.value = 'Enviar';
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '#ae89db';
            }, 3000);
        });

});

let dotInterval;
function animateDots(button) {
    let dots = '';
    dotInterval = setInterval(() => {
        if (dots.length < 3) {
            dots += '.';
        } else {
            dots = '';
        }
        button.value = 'Enviando mensaje' + dots;
    }, 500);
}
