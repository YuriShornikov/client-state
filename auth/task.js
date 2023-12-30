const form = document.querySelector('form');
const btn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id')
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');

const saveId = localStorage.getItem('saveId');

if (saveId) {
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
    userId.textContent = saveId;
} else {
    signin.classList.add('signin_active');
}   

// обработчик события кнопки
btn.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    

    // обрабатываем событие отправки на сервер и получение ответа

    xhr.addEventListener('load', () => {

        const response = xhr.response;

        if (response.success) {
            // добавляем класс актив
            welcome.classList.add('welcome_active');
            signin.classList.remove('signin_active');

            userId.textContent = response.user_id;
            localStorage.setItem('saveId', response.user_id);
        } else {
            console.error('Ошибка при отправке данных на сервер:', xhr.statusText);
            localStorage.removeItem('saveId');
        }              
    })
    xhr.send(formData);
    form.reset();
})
