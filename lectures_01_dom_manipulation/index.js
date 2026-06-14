const button = document.getElementById("btn");
const shoppingList = document.getElementById("shoppingList");
const input = document.querySelector("input");
button.addEventListener("click", () => {
  //create new li item
  const item = document.createElement("li");
  item.textContent = input.value;
  //Add item to the list
  shoppingList.appendChild(item);
  //Reset Input
  input.value = "";
});
