const input = document.querySelector('input') 
// ввод
const button = document.querySelector('button') 
// кнопка
const duplicateField = document.querySelector('#duplicateField') 
// блок 


input.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
})

button.addEventListener('click', function (event) {
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})