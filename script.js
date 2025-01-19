document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const botaoEnviar = document.getElementById("botao-enviar");

    // Função para validar os campos
    function validarFormulario() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const nomePreenchido = nome.value.trim() !== "";
        const emailValido = emailRegex.test(email.value.trim()) || email.value.trim() === "";
        const mensagemPreenchida = mensagem.value.trim() !== "";

        // Atualiza a borda do campo com base na validade (apenas para campos preenchidos)
        if (nome.value.trim() !== "") {
            nome.style.borderColor = nomePreenchido ? "" : "red";
        }
        if (email.value.trim() !== "") {
            email.style.borderColor = emailValido ? "" : "red";
        }
        if (mensagem.value.trim() !== "") {
            mensagem.style.borderColor = mensagemPreenchida ? "" : "red";
        }

        // Habilita o botão apenas quando todos os campos estiverem válidos
        if (nomePreenchido && emailValido && mensagemPreenchida) {
            botaoEnviar.disabled = false; // Habilita o botão
        } else {
            botaoEnviar.disabled = true; // Desabilita o botão
        }
    }

    // Adiciona eventos de input para monitorar alterações nos campos
    nome.addEventListener("input", validarFormulario);
    email.addEventListener("input", validarFormulario);
    mensagem.addEventListener("input", validarFormulario);
});
