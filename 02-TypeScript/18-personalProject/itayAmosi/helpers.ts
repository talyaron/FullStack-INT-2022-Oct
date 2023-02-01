// const crusor: any = document.querySelector<HTMLElement>('.cursor');
// window.addEventListener('mousemove', (e) =>{
//     crusor.style.top = e.pageY + 'px';
//     crusor.style.left = e.pageX + 'px';
// });


const bloodSpot: any = document.querySelector<HTMLElement>('.bloodSpot');
 window.addEventListener('click', (e) =>{
    bloodSpot.style.top = e.pageY + 'px';
    bloodSpot.style.left = e.pageX + 'px';
 });