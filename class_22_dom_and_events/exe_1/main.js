const moveRight = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + "px";
};

const moveLeft = function () {
  const ball = document.getElementById("ball");
  let left = parseInt(ball.style.left) || 0;
  left -= 15;
  ball.style.left = left + "px";
};

const moveUp = function () {
  const ball = document.getElementById("ball");
  let top = parseInt(ball.style.top) || 0;
  top -= 15;
  ball.style.top = top + "px";
};

const moveDown = function () {
  const ball = document.getElementById("ball");
  let top = parseInt(ball.style.top) || 0;
  top += 15;
  ball.style.top = top + "px";
};

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      return; // Exit function if it's a different key
  }

  // Optional: Block page scrolling when arrow keys are pressed
  event.preventDefault();
});
