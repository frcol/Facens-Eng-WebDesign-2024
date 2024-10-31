document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript para acessar elementos do HTML vai aqui
    //alert('Olá, mundo!');
});


document.querySelector('#btnImg').onclick = function () {
    document.querySelector('img').src = '../images/horse.png';
};

document.querySelector('#btnAudio').onclick = function () {
    document.querySelector('audio').play();
};

document.querySelector('#btnTitulo').onclick = function () {
    document.querySelector('#titulo').innerHTML = 'Novo Título';
}

document.querySelector('#btnParagrafo').onclick = function () {
    document.querySelector('#paragrafo').style.color = 'red';
}

document.querySelector('#btnAltera').onclick = function () {
    const buttons = document.querySelectorAll('.btn2');
    buttons.forEach(button => {
        button.classList.toggle('btnDisabled');
    });
}
