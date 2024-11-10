window.stars = document.getElementById('stars');
window.mountains_behind = document.getElementById('mountains_behind');
window.text1 = document.getElementById('text1');
window.text2 = document.getElementById('text2');
window.btn = document.getElementById('btn');
window.mountains_front1 = document.getElementById('mountains_front1');
window.mountains_front2 = document.getElementById('mountains_front2');
window.astronaut = document.getElementById('astronaut');

window.initialTextOffsetTop = window.text1.offsetTop;
window.initialTextOffsetTop2 = window.text2.offsetTop;
window.addEventListener('scroll', function(){
    window.value = window.scrollY;
    window.stars.style.left = window.value * 0.25 + 'px';
    window.text1.style.top = (window.initialTextOffsetTop + window.value * 0.5) + 'px';
    window.text2.style.top = (window.initialTextOffsetTop2 + window.value * 0.5) + 'px';
    window.btn.style.bottom = window.value * 1.05 + 'px';
    window.mountains_behind.style.top = window.value * 0.45 + 'px';
    window.btn.style.marginTop = window.value * 1.25 + 'px';
})
