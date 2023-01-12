var names = ['Matanel', 'Shalev', 'Johnson', 'David', 'Ori', 'Jorj', 'Madina', 'Drake', 'DaBaby', 'INT'];
var intervalId;
function onVideoClick(videoElement) {
    resetNames();
}
function toggleNames() {
    var namesButton = document.getElementById('names-button');
    var namesList = document.getElementById('names-list');
    if (namesList.style.display === 'none') {
        namesList.style.display = 'block';
        namesButton.textContent = 'Hide names';
        intervalId = setInterval(function () {
            namesList.innerHTML = '';
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name = names_1[_i];
                var nameElement = document.createElement('p');
                nameElement.textContent = name + " has already watched this video.";
                namesList.appendChild(nameElement);
            }
        }, 250);
    }
    else {
        resetNames();
    }
}
function resetNames() {
    var namesButton = document.getElementById('names-button');
    var namesList = document.getElementById('names-list');
    clearInterval(intervalId);
    namesList.style.display = 'none';
    namesList.innerHTML = '';
    namesButton.textContent = 'Who watched?';
}
