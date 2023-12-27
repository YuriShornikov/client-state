const editor = document.getElementById('editor');

const saveText = localStorage.getItem('text');

if (saveText) {
    editor.textContent = saveText;
}

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.textContent);
})