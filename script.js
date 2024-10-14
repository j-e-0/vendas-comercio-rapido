document.querySelector("#form-contact").addEventListener("submit", function(event) {
    //event.preventDefault();
  
    //let nome = document.querySelector('input[name="nome"]').value;
    //let mensagem = document.querySelector('textarea[name="mensagem"]').value;
    
    //let url = `https://wa.me/SEUNUMERODEWHATSAPP?text=Olá, meu nome é ${nome}. ${mensagem}`;
    
    //window.open(url, "_blank");
});

document.getElementById('email').addEventListener('click', function() {
    const emailText = this.innerText;

    navigator.clipboard.writeText(emailText).then(() => {
        alert('E-mail copiado: ' + emailText);
    }).catch(err => {
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