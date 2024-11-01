// function displayConsole(msg) {
//     console.log(msg);
// }

// function displayHTML(msg) {
//     document.querySelector('titulo').innerHTML = msg;
// }


// function soma(num1, num2, callback) {
//     let result = num1 + num2;
//     callback(result);
// }

// soma(2, 3, displayConsole);

let file = "https://663c040017145c4d8c34f832.mockapi.io/clientes";

fetch(file)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
        document.querySelector('#txt').innerHTML = myArray[0].nome;
        document.querySelector('#foto').src = myArray[0].avatar;
        document.querySelector('#id').innerHTML = myArray[0].id;
    })
    .catch(err => {
        console.log(err);
    });


    function adicionar() {
        fetch(file, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: 'Fábio Colombini',
                avatar: 'https://www.google.com.br'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
    }
