
if (stars === 'undefined') {
    let stars, mountains_behind, text1, text2, btn, mountains_front1, mountains_front2, astronaut, initialTextOffsetTop, initialTextOffsetTop2;
}

stars = document.getElementById('stars');
mountains_behind = document.getElementById('mountains_behind');
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
btn = document.getElementById('btn');
mountains_front1 = document.getElementById('mountains_front1');
mountains_front2 = document.getElementById('mountains_front2');
astronaut = document.getElementById('astronaut');

initialTextOffsetTop = text1.offsetTop;
initialTextOffsetTop2 = text2.offsetTop;
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    text1.style.top = (initialTextOffsetTop + value * 0.5) + 'px';
    text2.style.top = (initialTextOffsetTop2 + value * 0.5) + 'px';
    btn.style.bottom = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.45 + 'px';
    btn.style.marginTop = value * 1.25 + 'px';
})
