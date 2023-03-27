var crusor = document.querySelector('.cursor');
window.addEventListener('mousemove', function (e) {
    crusor.style.top = e.pageY + 'px';
    crusor.style.left = e.pageX + 'px';
});
