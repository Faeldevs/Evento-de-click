const botao = document.querySelector('#botao');
const lista = document.querySelector('.lista');


botao.addEventListener('click' , function() {

    if (lista.style.display === 'block') {
        lista.style.display = 'none';
    }else{
        lista.style.display = 'block';
    }

});
    