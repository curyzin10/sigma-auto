// Função para abrir o modal
function openModal(title, message) {
    const modal = document.getElementById('message-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    if (modal && modalTitle && modalMessage) {
        modalTitle.innerText = title;
        modalMessage.innerText = message;
        modal.style.display = 'block'; // Exibe o modal
    } else {
        console.error('Erro: Elementos do modal não encontrados.');
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.style.display = 'none'; // Fecha o modal
    }
}

// Função para submeter o formulário (genérica)
function submitForm(event, actionUrl, operationTitle) {
    event.preventDefault(); // Evita o reload da página

    const form = event.target;  // Pega o formulário que disparou o evento
    const formData = new FormData(form);

    fetch(actionUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Exibe a mensagem e o título no modal após o envio do formulário
        openModal(operationTitle, data);
        form.reset(); // Limpa o formulário após o envio
    })
    .catch(error => {
        console.error('Erro:', error);
        openModal('Erro', 'Ocorreu um erro ao processar sua solicitação.');
    });
}

// Adiciona o evento de envio para todos os formulários
document.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os formulários e adiciona o evento de submit
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Define a operação com base no título do formulário ou outro critério
            const operationTitle = form.querySelector('h2') ? form.querySelector('h2').innerText : 'Operação';
            submitForm(event, form.action, operationTitle);
        });
    });
});
