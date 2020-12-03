const img = document.querySelector("#img");
const buttons = document.querySelector("#buttons");
let interval = null;
let colorIndex = 0;

const trafficLight = event => {
  stopLight();
  turnOn[event.target.id]();
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green'];
  const color = colors[colorIndex];
  
  turnOn[color]();
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

const stopLight = () => {
  clearInterval(interval);
}

const turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => {
    colorIndex = 0;
    interval = setInterval(changeColor, 1000)
  }
}

buttons.addEventListener('click', trafficLight);