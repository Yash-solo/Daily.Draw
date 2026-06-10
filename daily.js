function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}
function login_website() {
    window.location.href = 'login.html';
}
function signin_website() {
    window.location.href = 'sign_up.html';
}
let slides = document.querySelectorAll('.slide')
let current = 0;
function Show_slide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
}
function current_slide(step) {
    Show_slide(step + current);
}
setInterval(() => {
    Show_slide(current + 1);
}, 10000);