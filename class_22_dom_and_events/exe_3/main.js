const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const generatingBoxes = () => {
  const container = document.getElementById("container");
  for (let i = 0; i < 10; i++) {
    const box = document.createElement("div");
    box.classList.toggle("box");
    box.onmouseenter = () => {
      box.style.backgroundColor = getRandomColor();
      const message = document.getElementById("message");
      if (isAllSameColor()) {
        message.textContent = "Nice Job! All Colors are the same!";
      } else {
        message.textContent = "";
      }
    };
    container.appendChild(box);
  }
};
const isAllSameColor = () => {
  const boxes = [...document.getElementsByClassName("box")].map(
    (box) => box.style.backgroundColor,
  );

  return new Set(boxes).size <= 1;
};

window.addEventListener("load", generatingBoxes);
