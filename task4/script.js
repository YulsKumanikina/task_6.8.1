userTextField.addEventListener('click', function (event) { 
    event.preventDefault(); 
    const userText = prompt('Введите текст'); 
    const userTextField = document.querySelector('#userTextField'); 
    userTextField.textContent = userText; 
})