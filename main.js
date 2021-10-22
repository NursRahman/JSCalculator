const body = document.body

VANTA.NET({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 500.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x483fff,
    backgroundColor: 0x0,
    maxDistance: 22.00,
    spacing: 18.00
  })
  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




// Calculator
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {display.value !== '' ? display.value = eval(display.value) : null} 
  else if (clickedButtonValue === 'C') display.value = ''
  else display.value += clickedButtonValue
}