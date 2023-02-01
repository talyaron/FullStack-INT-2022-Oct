// const crusor: any = document.querySelector<HTMLElement>('.cursor');
// window.addEventListener('mousemove', (e) =>{
//     crusor.style.top = e.pageY + 'px';
//     crusor.style.left = e.pageX + 'px';
// });
var bloodSpot = document.querySelector('.bloodSpot');
window.addEventListener('click', function (e) {
    bloodSpot.style.top = e.pageY + 'px';
    bloodSpot.style.left = e.pageX + 'px';
});
