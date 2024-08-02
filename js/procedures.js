

const formulario = document.querySelector("form");

const contato_form = document.getElementById("contato_section");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const descricao = document.getElementById("message");


formulario.addEventListener('click', (event) => {
    event.preventDefault();
    sendForm();
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
        clearInterval();
        carregarPagina('https://rogercorb.github.io/exercicio4/contato.html'); 
        //window.location.href = "contato.html";
    }, 6000);
}

const carregarPagina = async(url) =>  {
    try {
      const response = await fetch(url);
      const html = await response.text();
      
    } catch (error) {
      console.error('Erro ao carregar a página:', error);
    }

}

  

 