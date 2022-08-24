// Variables
const joe = document.getElementById('joe');
const hamburger = document.getElementById('hamburger');
let weight = document.getElementById('weightNumber');

// Makes character jump if space is pressed
function jump(event) {
  if(joe.classList != 'jump' && event.which === 32) {
    joe.classList.add('jump');
    weight.innerHTML = parseInt(weight.innerHTML) - 10;
    setTimeout(function () {
      joe.classList.remove('jump');
    }, 700);
  }
}

//Collision function
let isAlive = setInterval(function() {
    //Joe's current Y postion
    let joeTop = parseInt(window.getComputedStyle(joe).getPropertyValue("top"));

    //get Hamburger's current x position
    let hamburgerLeft = parseInt(window.getComputedStyle(hamburger).getPropertyValue('left'));

    //detecting collison
    if(hamburgerLeft < 60 && hamburgerLeft > 0 && joeTop >= 300){
        weight.innerHTML = parseInt(weight.innerHTML) + 5;
        if(weight.innerHTML > 300){ alert("Game Over!"); } 
    }
}, 150);

// Event handlers
document.addEventListener('keydown', function (event) {
  if (event.repeat) return;
  jump(event);
});
