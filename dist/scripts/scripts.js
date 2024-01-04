const editor = document.getElementById('editor');

function init() {
    if(localStorage.getItem('page1') === null) {
        localStorage.setItem('page1', 'Hello world!');
    }

    editor.value = localStorage.getItem('page1');
    editor.focus();
}

editor.oninput = function() {
    localStorage.setItem('page1', editor.value);
}