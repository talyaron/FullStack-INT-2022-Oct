const names = ['Matanel', 'Shalev', 'Johnson', 'David', 'Ori', 'Jorj', 'Madina', 'Drake', 'DaBaby', 'INT'];
let intervalId;

function onVideoClick(videoElement) {
  resetNames();
}

function toggleNames() {
  const namesButton = document.getElementById('names-button');
  const namesList = document.getElementById('names-list');

  if (namesList.style.display === 'none') {
    namesList.style.display = 'block';
    namesButton.textContent = 'Hide names';

    intervalId = setInterval(function() {
      namesList.innerHTML = '';
      for (const name of names) {
        const nameElement = document.createElement('p');
        nameElement.textContent = `${name} has already watched this video.`;
        namesList.appendChild(nameElement);
      }
    }, 250);
  } else {
    resetNames();
  }
}

function resetNames() {
  const namesButton = document.getElementById('names-button');
  const namesList = document.getElementById('names-list');

  clearInterval(intervalId);
  namesList.style.display = 'none';
  namesList.innerHTML = '';
  namesButton.textContent = 'Who watched?';
}