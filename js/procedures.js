const formulario = document.querySelector("form");
const contato_form = document.getElementById("contato_section");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const descricao = document.getElementById("message");


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nome.trim() === '' || !telefone || !email  ) { 
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
    contato_form.classList.remove('contato_form_conteudo')
    contato_form.classList.add('apresentacao_conteudo_obrigado')
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

    setInterval(() => {   
        window.location.href = "contato.html";
    }, 6000);
    return
}