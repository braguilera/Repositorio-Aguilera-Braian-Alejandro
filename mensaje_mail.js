
document.getElementById('copyBtn').addEventListener('click', function() {
    const email = 'braaguileraa@gmail.com';

    // Crear un campo de texto temporal
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');

    // Remover el campo de texto temporal
    document.body.removeChild(tempInput);

    // Mostrar alerta de éxito
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        alertMessage.style.display = 'none';
    }, 3000);
});
