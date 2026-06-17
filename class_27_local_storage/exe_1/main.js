document.addEventListener("DOMContentLoaded", () => {
  const inputMessage = document.querySelector(".inputMessage");
  const btnAdd = document.querySelector(".btnAdd");
  const btnClear = document.querySelector(".btnClear");
  let wisdom = JSON.parse(localStorage.wisdom || "[]");
  const wisdomContainer = document.querySelector(".wisdom-container");
  const emptyState = document.querySelector(".empty-state");
  const eyebrow = document.querySelector(".header-eyebrow");
  eyebrow.textContent = isDay() ? `est. today` : `est. tonight`;
  renderAll();

  btnAdd.addEventListener("click", () => {
    const text = inputMessage.value.trim();
    if (!text) return;

    wisdom.push({
      text,
      id: crypto.randomUUID(),
    });
    inputMessage.value = "";
    if (wisdom.length % 2 == 0)
      localStorage.setItem("wisdom", JSON.stringify(wisdom));
    renderAll();
  });

  inputMessage.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnAdd.click();
  });

  btnClear.addEventListener("click", () => {
    localStorage.clear();
    wisdom.splice(0, wisdom.length);
    renderAll();
  });

  function renderAll() {
    wisdomContainer.innerHTML = "";
    for (const item of wisdom) {
      wisdomContainer.appendChild(createWisdomCard(item));
    }
    emptyState.classList.toggle("visible", wisdom.length === 0);
  }

  function createWisdomCard(item) {
    const div = document.createElement("div");
    div.className = "wisdom-card";
    div.textContent = item.text;

    const btnRemove = document.createElement("button");
    btnRemove.className = "remove-btn";
    btnRemove.textContent = "x";
    btnRemove.addEventListener("click", () => {
      wisdom = wisdom.filter((element) => element.id !== item.id);
      localStorage.clear();
      localStorage.setItem("wisdom", JSON.stringify(wisdom));
      renderAll();
    });
    div.appendChild(btnRemove);
    return div;
  }

  function isDay() {
    const hour = new Date().getHours() + 12;
    return hour >= 6 && hour < 18;
  }
});
