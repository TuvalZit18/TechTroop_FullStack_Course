let posts = [
  { name: "David", wish: "become a NBA player" },
  { name: "Michael", wish: "become a football player" },
  { name: "Sarah", wish: "become a doctor" },
  { name: "Stehpany", wish: "become an astronout" },
];

const getPosts = () => {
  return [...posts];
};

const addPost = (name, wish) => {
  posts.push({ name, wish });
};

const removePost = (name) => {
  posts = posts.filter((post) => post.name !== name);
};

export default { getPosts, addPost, removePost };
