
document.getElementById('copyBtn').addEventListener('click', function() {
    const email = 'braaguileraa@gmail.com';

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    const alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    setTimeout(function() {
        alertMessage.style.display = 'none';
    }, 3000);
});
