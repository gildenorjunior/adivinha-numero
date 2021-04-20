const input = document.querySelector('#adivinha-numero');
const botaoJogar = document.querySelector('#botaoJogar');
const mostraTentativas = document.querySelector('.mostra-tentativas');
const h2 = mostraTentativas.querySelector('h2');
const span = mostraTentativas.querySelector('span');
const botaoJogarDenovo = document.querySelector('#jogar-denovo');

let numeroSorteado = geraNumeroAleatorio();
let tentativas = 0

function geraNumeroAleatorio() {
    return Math.round(Math.random() * 10);   
}

function limpaCampo() {
    input.value = '';
}
 
botaoJogar.addEventListener('click', () => {

    valorJogado = input.value;

    if(valorJogado === ''){
        alert('Por favor, preencha o campo corretamente...')
    }

    tentativas++
    span.innerHTML = `Tentativa: ${tentativas}`

    if(numeroSorteado < valorJogado){
        mostraTentativas.style.color = '#de4251'
        h2.innerHTML = 'Chute muito alto!';
        mostraTentativas.style.backgroundColor = '#fff'
        limpaCampo();
    } else if(numeroSorteado > valorJogado){
        mostraTentativas.style.color = '#de4251'
        mostraTentativas.style.backgroundColor = '#fff'
        h2.innerHTML = 'Chute muito baixo!';
        limpaCampo();
    } else if(numeroSorteado == valorJogado) {
        mostraTentativas.style.backgroundColor = '#37c978';
        mostraTentativas.style.color = '#fff'
        h2.innerHTML = 'Você acertou!';

        botaoJogarDenovo.style.display = 'block'
        input.setAttribute("disabled", "disabled")

        limpaCampo();   
    }
})

botaoJogarDenovo.addEventListener('click', () => {
    document.location.reload();
})

