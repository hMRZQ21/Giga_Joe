// Variables
const fatMan = document.getElementById('fatMan');

// Makes character jump if space is pressed
function jump(event) {
  if (fatMan.classList != 'jump' && event.which === 32) {
    fatMan.classList.add('jump');
    setTimeout(function () {
      fatMan.classList.remove('jump');
    }, 300);
  }
}

// Event handlers
document.addEventListener('keydown', function (event) {
  jump(event);
});
