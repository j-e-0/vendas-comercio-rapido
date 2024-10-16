document.getElementById('email').addEventListener('click', function() {
    const emailText = this.innerText;

    navigator.clipboard.writeText(emailText).then(() => {}).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});

document.getElementById('key').addEventListener('click', function() {
    const key = "MDAwMjAxMjY1MzAwMTRCUi5HT1YuQkNCLlBJWDAxMzF2ZW5kYXMuY29tZXJjaW9yYXBpZG9AZ21haWwuY29tNTIwNDAwMDA1MzAzOTg2NTgwMkJSNTkxNE1lcmNhZG8gUmFwaWRvNjAwOVNBTyBQQVVMTzYyMDcwNTAzKioqNjMwNEU1NDI=";

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