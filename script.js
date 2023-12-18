// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Exemplo de interatividade (mostrar/esconder detalhes)
  const servicosSection = document.getElementById('servicos');
  const detalhesServicos = document.getElementById('detalhes-servicos');

  servicosSection.addEventListener('click', function () {
    detalhesServicos.classList.toggle('visivel');
  });

  // Exemplo de validação de formulário (substitua com sua lógica)
  const formularioContato = document.getElementById('formulario-contato');

  formularioContato.addEventListener('submit', function (e) {
    // Lógica de validação aqui
    // Se a validação falhar, use e.preventDefault() para evitar o envio do formulário
  });
});
