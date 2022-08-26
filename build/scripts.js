// Variables
const toggle = document.querySelector('.toggle-button');
const switchIcon = document.querySelector('.fas');
const joe = document.getElementById('joe');
const hamburger = document.getElementById('hamburger');
const apple = document.getElementById('apple');
let weight = document.getElementById('weightNumber');
let joeShapes = ['imgs/joe.png', 'imgs/joeBetterShape.png'];
let winDisplay = document.getElementById('win');
let gameOverDisplay = document.getElementById('game-over');

// Play audio
let audio = new Audio('audios/theme_song.mp3');
audio.volume = 0.1;
audio.loop = true;


// Makes character jump if space is pressed
function jump(event) {
  if (joe.classList != 'jump' && event.which === 32) {
    joe.classList.add('jump');
    joe.classList.remove('joeOverweightWalk');
    weight.innerHTML = parseInt(weight.innerHTML) - 5;
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
  //Checking if weight under an amount and win
  if (weight.innerHTML <= 250) {
    toggleWin();
    document
      .querySelector('.restart-btn2')
      .addEventListener('click', function () {
        window.location.reload();
        return false;
      });
  }
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
    } else {
      weight.innerHTML = parseInt(weight.innerHTML) + 20;
    }

    if (weight.innerHTML <= 100) {
      alert('You won! Joe is in the best shape of his life.');
    }
  }
  if (appleLeft < 60 && appleLeft > 0 && joeTop >= 100) {
    weight.innerHTML = parseInt(weight.innerHTML) - 5;
  }
}, 100);

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
// Dark/light mode
toggle.addEventListener('click', function () {
  if (switchIcon.classList.contains('fa-moon')) {
    switchIcon.classList.remove('fa-moon');
    switchIcon.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = 'background-color .5s linear';
    document.getElementById('command').style.color = 'white';
  } else {
    switchIcon.classList.remove('fa-sun');
    switchIcon.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = 'background-color .5s linear';
    document.getElementById('command').style.color = 'black';
  }

  switchIcon.classList.add('toggle-animation');
  setTimeout(() => {
    switchIcon.classList.remove('toggle-animation');
  }, 500);
});

document.addEventListener('keydown', function (event) {
  if (event.repeat) return;
  if (
    winDisplay.style.display == 'block' ||
    gameOverDisplay.style.display == 'block'
  )
    return;
  jump(event);
});

// Functions for restart
function toggleGameOver() {
  gameOverDisplay.style.display = 'block';
  document.getElementById('game').style.animationPlayState = 'paused';
  document.getElementById('joe').style.animationPlayState = 'paused';
  document.getElementById('hamburger').style.animationPlayState = 'paused';
  document.getElementById('apple').style.animationPlayState = 'paused';
  clearInterval(collision);

  return true;
}

function toggleWin() {
  winDisplay.style.display = 'block';
  document.getElementById('game').style.animationPlayState = 'paused';
  joe.style.animationPlayState = 'paused';
  hamburger.style.animationPlayState = 'paused';
  apple.style.animationPlayState = 'paused';
  clearInterval(collision);

  return true;
}

// Function calls
joeOverweightAnimation();

// Play game
let play_btn = document.querySelector(".play-btn")
let play_btn_display = document.querySelector("#start-game")
play_btn.addEventListener("click", function() {
  document.body.classList.remove("preload")
  audio.play();
  play_btn_display.style.display = 'none';
})
