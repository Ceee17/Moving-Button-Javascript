let textDisplay = document.getElementById("textDisplay");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

function swapText() {
  let tempPosition = btn1.style.order;
  btn1.style.order = btn2.style.order;
  btn2.style.order = tempPosition;
}

function getRandomPosition() {
  let x = window.innerWidth - btn2.clientWidth;
  let y = window.innerHeight - btn2.clientHeight;

  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);

  return { x: randomX, y: randomY };
}

function moveButton() {
  const newPosition = getRandomPosition();
  btn2.style.position = "absolute";
  btn2.style.left = newPosition.x + "px";
  btn2.style.top = newPosition.y + "px";
}
