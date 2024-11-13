
let url = "https://663c040017145c4d8c34f832.mockapi.io/Animal/";

function read(id) {
    fetch(url+id)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector("#titulo").innerHTML = data.name;
    })
    .catch(error => {
        console.log("Erro: " + error);
    });
}

function salvar(nome, avatar) {
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "name": nome,
            "avatar": avatar 
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erro:', error));
    
    
}

//read(1); 
salvar("Sebastião", "https://www.google.com.br");