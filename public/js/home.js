let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let btn = document.getElementById('btn');
let mountains_front1 = document.getElementById('mountains_front1');
let mountains_front2 = document.getElementById('mountains_front2');
let astronaut = document.getElementById('astronaut');

const initialTextOffsetTop = text1.offsetTop;
const initialTextOffsetTop2 = text2.offsetTop;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    text1.style.top = (initialTextOffsetTop + value * 0.5) + 'px';
    text2.style.top = (initialTextOffsetTop2 + value * 0.5) + 'px';
    btn.style.bottom = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.45 + 'px';
    btn.style.marginTop = value * 1.25 + 'px';
})
