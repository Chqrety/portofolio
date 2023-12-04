const hamburger__menu = document.querySelector('.hamburger__menu');
const mobile__menu = document.querySelector('.mobile__menu');

hamburger__menu.addEventListener('click', () => {
    mobile__menu.classList.toggle('show');
    mobile__menu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger__menu');
    const mobileMenu = document.querySelector('.mobile__menu');

    // Saat salah satu link di mobile menu diklik
    mobileMenu.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            // Sembunyikan mobile menu
            mobileMenu.classList.toggle('hidden');
        });
    });

    // Ketika hamburger menu diklik
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});