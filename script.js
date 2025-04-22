document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav__toggle');
    const closeButton = document.querySelector('.nav__close');
    const menu = document.querySelector('.nav__link');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    closeButton.addEventListener('click', function () {
        menu.classList.remove('show');
    });
    
});