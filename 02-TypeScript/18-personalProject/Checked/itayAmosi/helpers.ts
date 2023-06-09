const crusor: any = document.querySelector<HTMLElement>('.cursor');
window.addEventListener('mousemove', (e) =>{

    crusor.style.top = e.pageY + 'px';
    crusor.style.left = e.pageX + 'px';

});


