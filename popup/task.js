const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');

const delActive = localStorage.getItem('save');

// проверка на закрытие окна
if (!delActive) {
    modal.classList.add('modal_active');
}

// обработка события
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');

    localStorage.setItem('save', 'true');
})

