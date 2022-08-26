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

// Start Joe animation
joe.classList.add('joeOverweightWalk');

// Makes character jump if space is pressed
function jump(event) {
  if (joe.classList != 'jump' && event.which === 32) {
    joe.removeAttribute('class');
    joe.classList.add('jump');
    weight.innerHTML = parseInt(weight.innerHTML) - 5;
    setTimeout(function () {
      joe.classList.remove('jump');
    }, 700);
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
  if (weight.innerHTML == 100) {
    toggleWinLose(winDisplay);
    document
      .querySelector('.restart-btn2')
      .addEventListener('click', function () {
        window.location.reload();
        return false;
      });
  }
  // Detecting collison of hamburger, and apple
  if (hamburgerLeft < 60 && hamburgerLeft > 0 && joeTop >= 300) {
    if (weight.innerHTML > 350) {
      toggleWinLose(gameOverDisplay);
      document
        .querySelector('.restart-btn')
        .addEventListener('click', function () {
          window.location.reload();
          return false;
        });
    } else {
      weight.innerHTML = parseInt(weight.innerHTML) + 20;
    }
  }
  if (appleLeft < 60 && appleLeft > 0 && joeTop >= 180) {
    weight.innerHTML = parseInt(weight.innerHTML) - 15;
  }
}, 170);

// Changes shape depending on Joe's weight
let checkWeight = setInterval(() => {
  if (weight.innerHTML > 190 && !joe.classList.contains('jump')) {
    joe.style.backgroundImage = `url(${joeShapes[0]})`;
    joe.classList.add('joeOverweightWalk');
    joe.classList.remove('joeBetterShapeWalk');
    document.getElementById('game').style.animationDuration = '6s';
    hamburger.style.animationDuration = '2s';
    apple.style.animationDuration = '4.5s';
    audio.playbackRate = 1;
  }
  if (weight.innerHTML <= 190 && !joe.classList.contains('jump')) {
    joe.style.backgroundImage = `url(${joeShapes[1]})`;
    joe.classList.add('joeBetterShapeWalk');
    joe.classList.remove('joeOverweightWalk');
    document.getElementById('game').style.animationDuration = '2s';
    hamburger.style.animationDuration = '1s';
    apple.style.animationDuration = '2s';
    audio.playbackRate = 1.5;
  }
});

// Event handlers
toggle.addEventListener('click', function () {
  // Dark and light mode
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

function toggleWinLose(condition) {
  condition.style.display = 'block';
  document.getElementById('game').style.animationPlayState = 'paused';
  joe.style.animationPlayState = 'paused';
  hamburger.style.animationPlayState = 'paused';
  apple.style.animationPlayState = 'paused';
  clearInterval(collision);
}

// Play game
let play_btn = document.querySelector('.play-btn');
let play_btn_display = document.querySelector('#start-game');
play_btn.addEventListener('click', function () {
  document.body.classList.remove('preload');
  audio.play();
  play_btn_display.style.display = 'none';
});
