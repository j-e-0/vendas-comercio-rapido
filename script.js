document.getElementById('email').addEventListener('click', function() {
    const emailText = this.innerText;

    navigator.clipboard.writeText(emailText).then(() => {}).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});

document.getElementById('key').addEventListener('click', function() {
    const key = "MDAwMjAxMDEwMjExMjY1MzAwMTRici5nb3YuYmNiLnBpeDAxMzF2ZW5kYXMuY29tZXJjaW9yYXBpZG9AZ21haWwuY29tNTIwNDAwMDA1MzAzOTg2NTgwMkJSNTkxMkpvaG5ueSBFd2VydDYwMDlTQU8gUEFVTE82MjI5MDUyNTFKQThSSEhGTkFQTVJQOFA5RUgwVDY2Uko2MzA0OTA5NA==";

    navigator.clipboard.writeText(atob(key)).then(() => {}).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});

function toggleNotes(button) {
    const productDiv = button.parentElement;
    
    const notesDiv = productDiv.querySelector('.notes');
    
    if (notesDiv.style.display === 'none' || notesDiv.style.display === '') {
        notesDiv.style.display = 'block';
        button.textContent = 'Ocultar Notas';
    } else {
        notesDiv.style.display = 'none';
        button.textContent = 'Ver Notas';
    }
}