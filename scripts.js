let btn1;
let btn2;
let resetTimeout; // Variable to store the timeout

function init() {
  btn1 = document.getElementById("btn1");
  btn2 = document.getElementById("btn2");

  const initialOrderBtn1 = window.getComputedStyle(btn1).order;
  const initialOrderBtn2 = window.getComputedStyle(btn2).order;
  const initialMarginLeftBtn2 = window.getComputedStyle(btn2).marginLeft;
  const initialMarginTopBtn2 = window.getComputedStyle(btn2).marginTop;

  function swapButtons() {
    const order1 = window.getComputedStyle(btn1).order;
    const order2 = window.getComputedStyle(btn2).order;

    btn1.style.order = order2;
    btn2.style.order = order1;
    resetTimeoutFunction(); // Reset the timeout on interaction
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
    btn2.style.marginLeft = newPosition.x + "px";
    btn2.style.marginTop = newPosition.y + "px";
    resetTimeoutFunction(); // Reset the timeout on interaction
  }

  function resetButtonPositions() {
    btn1.style.order = initialOrderBtn1;
    btn2.style.order = initialOrderBtn2;
    btn2.style.marginLeft = initialMarginLeftBtn2;
    btn2.style.marginTop = initialMarginTopBtn2;
    resetTimeoutFunction(); // Reset the timeout on reset
  }

  function resetTimeoutFunction() {
    clearTimeout(resetTimeout); // Clear previous timeout
    resetTimeout = setTimeout(resetButtonPositions, 2000); // Reset positions after 5 seconds
  }

  // Event listeners
  btn1.addEventListener("click", swapButtons);
  btn2.addEventListener("mouseover", moveButton);

  // Start the reset cycle
  resetTimeoutFunction();
}

// Run the init function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
