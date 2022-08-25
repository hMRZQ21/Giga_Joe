// Variables
const joe = document.getElementById('joe');
const hamburger = document.getElementById('hamburger');
const apple = document.getElementById('apple');
let weight = document.getElementById('weightNumber');
let joeShapes = ['imgs/joe.png', 'imgs/joeBetterShape.png'];

let audio = new Audio('audios/theme_song.mp3');
audio.volume = 0.1;
audio.loop = true;
audio.play();

// Makes character jump if space is pressed
function jump(event) {
  if (joe.classList != 'jump' && event.which === 32) {
    joe.classList.add('jump');
    joe.classList.remove('joeOverweightWalk');
    weight.innerHTML = parseInt(weight.innerHTML) - 10;
    setTimeout(function () {
      joe.classList.remove('jump');
      joe.classList.add('joeOverweightWalk');
    }, 700);
  }
}

function joeOverweightAnimation() {
  if (joe.classList != 'joeOverweightWalk') {
    joe.classList.add('joeOverweightWalk');
  }
}

// Collision function
let collision = setInterval(() => {
  //Joe's current Y postion
  let joeTop = parseInt(window.getComputedStyle(joe).getPropertyValue('top'));

  //get Hamburger's current x position
  let hamburgerLeft = parseInt(
    window.getComputedStyle(hamburger).getPropertyValue('left')
  );

  let appleLeft = parseInt(
    window.getComputedStyle(apple).getPropertyValue('left')
  );

  // Detecting collison of hamburger, and apple
  if (hamburgerLeft < 60 && hamburgerLeft > 0 && joeTop >= 300) {
    weight.innerHTML = parseInt(weight.innerHTML) + 20;
    if (weight.innerHTML > 320) {
      toggleGameOver();
      document
        .querySelector('.restart-btn')
        .addEventListener('click', function () {
          window.location.reload();
          return false;
        });
    }
    if (weight.innerHTML <= 100) {
      alert('You won! Joe is in the best shape of his life.');
    }
  }
  if (appleLeft < 60 && appleLeft > 0 && joeTop >= 100) {
    weight.innerHTML = parseInt(weight.innerHTML) - 5;
  }
}, 150);

// Changes shape depending on Joe's weight
let checkWeight = setInterval(() => {
  if (weight.innerHTML > 150) {
    joe.style.backgroundImage = `url(${joeShapes[0]})`;
  }

  if (weight.innerHTML <= 150) {
    joe.style.backgroundImage = `url(${joeShapes[1]})`;
  }
});

// Event handlers
document.addEventListener('keydown', function (event) {
  if (event.repeat) return;
  jump(event);
});

// Functions for restart
function toggleGameOver() {
  let myGame = document.getElementById('game-over');
  myGame.style.display = 'block';
  document.getElementById('game').style.animationPlayState = 'paused';
  document.getElementById('joe').style.animationPlayState = 'paused';
  document.getElementById('hamburger').style.animationPlayState = 'paused';
  document.getElementById('apple').style.animationPlayState = 'paused';
}

// Function calls
joeOverweightAnimation();
