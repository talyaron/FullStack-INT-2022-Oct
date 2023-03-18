document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
  
    // Set initial state
    body.classList.add('fadein');
  
    // Add event listener for link clicks
    const aboutLink = document.getElementById('about');
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Fade out effect
      body.classList.add('fadeout');
  
      // Change page after fade out is complete
      setTimeout(function() {
        window.location.href = e.target.href;
      }, 1000); // Change to match the duration of the animation
    });
  
    // Remove fadeout class after animation is complete
    body.addEventListener('animationend', function() {
      body.classList.remove('fadeout');
    });
  });
  