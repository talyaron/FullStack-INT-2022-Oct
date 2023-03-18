// document.addEventListener('DOMContentLoaded', function() {
//     const body = document.querySelector('body');
//     body.classList.add('fadein');

//     const aboutLink = document.getElementById('about');
//     aboutLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       body.classList.add('fadeout');
  
//       setTimeout(function() {
//         window.location.href = e.target.href;
//       }, 500);
//     });
  
//     body.addEventListener('animationend', function() {
//       body.classList.remove('fadeout');
//     });
//   });
  



const transitionOverlay = document.getElementById('transition-overlay');

document.getElementById('about').addEventListener('click', (event) => {
  event.preventDefault();

  transitionOverlay.style.pointerEvents = 'auto';

  setTimeout(() => {
    window.location.href = event.target.href;
  }, 1000);
});
