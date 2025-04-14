const texto = "Leo – Um pedacinho eterno da mamãe.";
let i = 0;

function escrever() {
  if (i < texto.length) {
    document.getElementById("textoAnimado").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 100); // velocidade da digitação
  } else {
    document.getElementById("textoAnimado").style.borderRight = "none"; // tira cursor depois
  }
}

window.onload = escrever;


document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio real do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  if (nome && email && mensagem) {
    // Aqui você poderia enviar os dados para um backend, se quiser
    console.log("Formulário enviado:", { nome, email, mensagem });

    mensagemSucesso.style.display = "block";

    // Limpa os campos
    this.reset();

    // Esconde a mensagem depois de 5 segundos
    setTimeout(() => {
      mensagemSucesso.style.display = "none";
    }, 5000);
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
