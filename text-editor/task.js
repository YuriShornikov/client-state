const editor = document.getElementById('editor');

const saveText = localStorage.getItem('text');
editor.textContent = saveText;

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.textContent);
});