window.addEventListener('scroll', function(){
    let value = window.scrollY;
    document.getElementById('stars').style.left = value * 0.25 + 'px';
    document.getElementById('text1').style.top = (document.getElementById('text1').offsetTop + value * 0.5) + 'px';
    document.getElementById('text2').style.top = (document.getElementById('text2').offsetTop + value * 0.5) + 'px';
    document.getElementById('btn').style.bottom = value * 1.05 + 'px';
    document.getElementById('mountains_behind').style.top = value * 0.45 + 'px';
    document.getElementById('btn').style.marginTop = value * 1.25 + 'px';
})
