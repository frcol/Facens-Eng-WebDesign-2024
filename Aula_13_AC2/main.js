
let lstTitulos = ["Teste 1", "Teste 2", "Teste 3"];

function cadastrar() {
    let titulo = document.querySelector('#titulo').value;
    if (titulo == '') { return; }

    lstTitulos.push(titulo);
    document.querySelector('#titulo').value ="";
    atualizarLista();
    
}

function atualizarLista() {
    let index = 0;
    let cards = document.querySelector('#cards');
    cards.innerHTML = '';

    lstTitulos.forEach(titulo => {
        let item = `<div id="${index}" class="card" style="width: 15rem;">
                        <img src="https://picsum.photos/200/100?random=${index}" class="card-img-top" alt="...">
                        <div class="card-body  text-center">
                            <h5 class="card-title">${titulo}</h5>
                            <button onclick="apagar(${index})" class="btn btn-danger">Apagar</button>
                        </div>
                    </div>`
        cards.innerHTML += item;
        index++;
    });
}

function apagar(index) {
    lstTitulos.splice(index, 1);
    atualizarLista();
}

function apagarTodos() {
    lstTitulos = [];
    atualizarLista();
}   

atualizarLista();