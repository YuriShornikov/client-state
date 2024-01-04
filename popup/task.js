const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');

const saveCookie = getCookie('save');

if (saveCookie !== 'false') {
    modal.classList.add('modal_active');
}


// обработка события
modalClose.addEventListener('click', () => {
    const removeClass = modal.classList.remove('modal_active');

    setCookie('save', 'false');
})

// функция для установки значения в куки
function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

// функция извлечения куки
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(i => i.startsWith(name + '='));

    if (cookie) {
        return cookie.substring(name.length + 1);
    }

    return null;
}