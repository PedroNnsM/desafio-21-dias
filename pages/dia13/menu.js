const $menu = document.querySelector('.mobile-menu')
const $navbar = document.querySelector('.nav-list')
$menu.addEventListener('click', () => {
    $navbar.classList.toggle('active')
})