document.addEventListener('DOMContentLoaded', () => {

    const bar    = document.getElementById('bar');
    const close  = document.getElementById('close');
    const navbar = document.querySelector('.nav-list');

    if (!navbar) return;

    if (bar) {
        bar.addEventListener('click', () => {
            navbar.style.right = "0px";
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            navbar.style.right = "-300px";
        });
    }

});
