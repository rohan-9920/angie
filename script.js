const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

let show = document.querySelector('nav');
let button = document.querySelector('.button')
const icon = document.getElementById('myIcon');
console.log(icon);

button.addEventListener('click', () => {
    hide_show();
})

let navLinks = document.querySelectorAll('nav div ul li a')
console.log(navLinks.length);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click',()=>{
        hide_show();
    })    
}

function hide_show(){
    if (show.style.display == 'flex') {
        show.style.display = 'none';
        icon.setAttribute('name', 'menu-outline')
    } else {
        show.style.display = 'flex';
        icon.setAttribute('name', 'close-outline');
    }
}