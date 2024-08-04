const formulario = document.querySelector("form");
const contato_form = document.getElementById("contato_section");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const descricao = document.getElementById("message");
const sectionContact = document.getElementById("section3")


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nome.value === '' || telefone.value === '' || email.value === ''  ) { 
        document.getElementById('message').innerText = 'Todos os campos são obrigatórios !';
        setInterval(() => {   
            window.location.href = "contato.html";
        }, 3000);
        
    } else { 
        sendForm();
    }
    
});

function sendForm() {

    formulario.reset();
    
    //contato_form.classList.remove('contato_form_conteudo')
    contato_form.classList.toggle('apresentacao_conteudo_obrigado')
    contato_form.innerHTML = `<div>
     <h2>Agradecemos por seu contato. Em breve retornaremos a sua solicitação</h2>
     <h3>Redirecionamento em: <span id="contador-segundos">6</span> seg</h3>
    </div>`;

    let segundos = 6;

    document.querySelector('span').style.color = 'black';      
   
    const contador = setInterval(() => {
        segundos--;
        document.getElementById('contador-segundos').innerText = segundos;

        if (segundos <= 0) {
            clearInterval(contador);
        }
    }, 1000);

    const count = setInterval(() => {  
        clearInterval(count); 
        //contato_form.classList.remove('apresentacao_conteudo_obrigado');
        contato_form.classList.toggle('contato_form_conteudo'); 
        document.getElementById("section3").innerHTML = sectionContact;       
        window.location.href = "#section1";
    }, 6000);
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