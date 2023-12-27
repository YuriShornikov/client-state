// const form = document.querySelector('form');
const rownName = document.getElementsByName('login')[0];
const rowPassword = document.getElementsByName('password')[0];
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


// обработчик события кнопки
btn.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData();
    console.log(rownName.value)
    formData.append('login', rownName.value);
    formData.append('password', rowPassword.value);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    // обрабатываем событие отправки на сервер и получение ответа
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                console.log('Авторизация успешна!');
                console.log('ID пользователя:', response.user_id);

                // добавляем класс актив
                welcome.classList.add('welcome_active');

                userId.textContent = response.user_id;
            } else {
                console.error('Авторизация не удалась. Ответ сервера:', response);
            }
        } else {
            console.error('Ошибка при отправке данных на сервер:', xhr.statusText);
            console.error('Ответ сервера:', xhr.responseText);
        }
    })
    xhr.send(formData);
})
