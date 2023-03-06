const console = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для ввода сообщеня в веб консоль')
})

const showAlert = document.querySelector('#alert');

showAlert.addEventListener('click', () => {
    alert('При помощи alert() можно вывести на экран пользователя модальное окно с каким-нибудь текстом.')
})

const showPrompt = document.querySelector('#prompt');

showPrompt.addEventListener('click', () => {
    alert('При помощи функции prompt() можно вывести на экран пользователя модальное окно c полем ввода и текстом-пояснением.')
})
function checkAnswer() {
    var result = prompt ('Как вас зовут?', 'Имя');
    if (result === null) {
        document.querySelector('#answer').textContent = 'Вы отказались от опроса';
    } 
    else if (result.length > 0) {
        document.querySelector('#answer').textContent = 'Здравствуйте,' + result;
    }


}