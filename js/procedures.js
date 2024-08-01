

const formulario = document.querySelector("form");

const contato_form = document.getElementById("contato_section");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const descricao= document.getElementById("message"); 

function sendForm() { 

    formulario.reset(); 

    contato_form.style.justifyContent = 'center';
    contato_form.style.alignItems = 'center';

    contato_form.innerHTML = "<h1>Agradecemos por seu contato. Em breve retornaremos a sua solicitação<h1>"   
  
    setInterval(() => {  
        window.location.href = 'contato.html';        
    }, 5000);  
}