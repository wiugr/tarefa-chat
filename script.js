let input = document.querySelector(".input_mensagem");
let btn_enviar = document.querySelector(".btn_enviar");
let container = document.querySelector(".container");

btn_enviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    mensagem = input.value;
    input.value = '';
    let caixa_mensagem = document.createElement('div');
    caixa_mensagem.classList.add('caixa_mensagem');
    
    let text = document.createElement('p');
    text.classList.add('texto');
    caixa_mensagem.append(text);
    text.textContent = mensagem;
    
    let editar_excluir = document.createElement('div');
    editar_excluir.classList.add('editar_excluir');
    
    let botao_excluir = document.createElement('p');
    botao_excluir.classList.add('botao_excluir');
    botao_excluir.textContent = 'Excluir';
    editar_excluir.append(botao_excluir);
    
    botao_excluir.onclick = () => {
        editar_excluir.remove();
        caixa_mensagem.remove();
    }

    let botao_editar = document.createElement('p');
    botao_editar.classList.add('botao_editar');
    botao_editar.textContent = 'Editar';
    editar_excluir.append(botao_editar);

    botao_editar.onclick = () => {
        const mensagemEditada = prompt('Qual a nova mensagem?');
        texto.textContent = mensagemEditada;
    }

    container.append(caixa_mensagem);
    container.append(editar_excluir);
});
