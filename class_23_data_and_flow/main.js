import model from "./model.js";

//UI
const refreshPosts = (posts) => {
  let ul = document.querySelector("#posts");
  if (!ul) {
    ul = document.createElement("ul");
    ul.id = "posts";
    document.querySelector("body").appendChild(ul);
  }
  ul.innerHTML = "";

  for (const post of posts) {
    const li = document.createElement("li");
    const postCard = document.createElement("div");
    postCard.classList.toggle("postCard");

    const name = document.createElement("span");
    name.classList.toggle("name-text");
    name.textContent = `${post.name}: `;
    const wish = document.createElement("span");
    wish.classList.toggle("wish-text");
    wish.textContent = `${post.wish}`;

    postCard.appendChild(name);
    postCard.appendChild(wish);

    li.appendChild(postCard);
    ul.appendChild(li);
  }
};

// Controller
addEventListener("DOMContentLoaded", () => {
  refreshPosts(model.getPosts());

  document.querySelector("#btnAdd").addEventListener("click", () => {
    const nameInput = document.querySelector("#inputName");
    const name = nameInput.value;
    const wishInput = document.querySelector("#inputWish");
    const wish = wishInput.value;
    model.addPost(name, wish);
    refreshPosts(model.getPosts());
    nameInput.value = "";
    wishInput.value = "";
  });

  document.querySelector("body").addEventListener("click", (e) => {
    const card = e.target.closest(".postCard");
    if (!card) return;
    const name = card.querySelector(".name-text").textContent.replace(": ", "");
    model.removePost(name);
    refreshPosts(model.getPosts());
  });
});
