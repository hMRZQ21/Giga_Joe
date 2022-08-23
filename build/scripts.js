// Variables
const fatMan = document.getElementById('fatMan');
let weight = document.getElementById('weightNumber');

// Makes character jump if space is pressed
function jump(event) {
  if (fatMan.classList != 'jump' && event.which === 32) {
    fatMan.classList.add('jump');
    weight.innerHTML = parseInt(weight.innerHTML) - 10;
    setTimeout(function () {
      fatMan.classList.remove('jump');
    }, 300);
  }
}

// Event handlers
document.addEventListener('keydown', function (event) {
  jump(event);
});
