const formulario = document.querySelector("form");
const contato_form = document.getElementById("contato_section");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const descricao = document.getElementById("message");

formulario.addEventListener('submit', (event) => {

    event.preventDefault();    
    sendForm();
    
});

function sendForm() {

    formulario.reset();    
    
    contato_form.classList.toggle('apresentacao_conteudo_obrigado')
    contato_form.innerHTML = `<div>
     <h2>Agradecemos por seu contato. Em breve retornaremos a sua solicitação</h2>
     <h3>Redirecionamento em: <span id="contador-segundos">8</span> seg</h3>
    </div>`;

    let segundos = 8;

    document.querySelector('span').style.color = 'black';      
   
    const contador = setInterval(() => {
        segundos--;
        document.getElementById('contador-segundos').innerText = segundos;

        if (segundos <= 0) {
            clearInterval(contador);
            window.location.href = "index.html";
        }
    }, 1000);
    
    return
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
});