// Variables
const joe = document.getElementById('joe');
let weight = document.getElementById('weightNumber');

// Makes character jump if space is pressed
function jump(event) {
  if (joe.classList != 'jump' && event.which === 32) {
    joe.classList.add('jump');
    weight.innerHTML = parseInt(weight.innerHTML) - 10;
    setTimeout(function () {
      joe.classList.remove('jump');
    }, 300);
  }
}

// Event handlers
document.addEventListener('keydown', function (event) {
  jump(event);
});
