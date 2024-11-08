window.menubar = document.querySelector('#menu-bar');
window.navbar = document.querySelector('.navbar');

window.menubar.onclick = () =>{
    window.menubar.classList.toggle('fa-times');
    window.navbar.classList.toggle('active');
}
