let display = document.getElementById('display');
let buttons = document.querySelectorAll('input[type=button]');

for (let button of buttons) {
    button.addEventListener('click', function() {
        changeDisplay(this.value);
    })
}

function changeDisplay(value) {
    display.value = value;
}