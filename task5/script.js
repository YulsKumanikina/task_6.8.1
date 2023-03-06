const input = document.querySelector('input') 
// поле ввода
const button = document.querySelector('button') 
// кнопка
const duplicateField = document.querySelector('#duplicateField') 
// текстовый блок duplicateField


input.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
})


button.addEventListener('click', function (event) {
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})