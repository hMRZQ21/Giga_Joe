// Variables
const joe = document.getElementById('joe');
const hamburger = document.getElementById('hamburger');
let weight = document.getElementById('weightNumber');

// Makes character jump if space is pressed
function jump(event) {
  if (joe.classList != 'jump' && event.which === 32) {
    joe.classList.add('jump');
    weight.innerHTML = parseInt(weight.innerHTML) - 10;
    setTimeout(function () {
      joe.classList.remove('jump');
    }, 500);
  }
}

//Collision function
let isAlive = setInterval(function () {
    //Joe's current Y postion
    let joeTop = parseInt(window.getComputedStyle(joe).getPropertyValue("top"));

    //get Hamburger's current x position
    let hamburgerLeft = parseInt(window.getComputedStyle(hamburger).getPropertyValue("left"));

    //detect collison
    if(hamburgerLeft < 60 && hamburgerLeft > 0 && joeTop >=300){
        console.log("Game Over!");
        weight.innerHTML = parseInt(weight.innerHTML) + 5;
    }

}, 100);

// Event handlers
document.addEventListener('keydown', function (event) {
  jump(event);
});
