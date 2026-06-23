const Twitter = () => {
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2;
  let commentIdcounter = 6;
  let postIdIndex = 2;
  let commentIdIndex = 6;

  const getPosts = () => {
    return structuredClone(posts);
  };

  const addPost = (text) => {
    posts.push({
      text: text,
      id: `p${++postIdIndex}`,
      comments: [],
    });
    postIdCounter++;
  };

  const removePost = (postID) => {
    const postToRemove = posts.find((post) => post.id === postID);
    posts = posts.filter((post) => post.id !== postID);
    postIdCounter--;
    commentIdcounter -= postToRemove.comments.length;
  };

  const addComment = (postID, text) => {
    const post = posts.find((post) => post.id === postID);
    post.comments.push({
      id: `c${++commentIdIndex}`,
      text: text,
    });
    commentIdcounter++;
  };

  const removeComment = (postID, commentID) => {
    const post = posts.find((post) => post.id === postID);
    post.comments = post.comments.filter((comment) => comment.id !== commentID);
    commentIdcounter--;
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
const twitter = Twitter();

// Test adding a post
twitter.addPost("This is my own post!");
console.dir(twitter.getPosts(), { depth: null });
// Should add: {text: "This is my own post!", id: "p3", comments: []}
console.log("================================================\n");

// Test removing a post
twitter.removePost("p1");
console.dir(twitter.getPosts(), { depth: null });
// Should only have two posts left
console.log("================================================\n");

// Test adding comments
twitter.addComment("p3", "Damn straight it is!");
twitter.addComment("p2", "Second the best!");
console.dir(twitter.getPosts(), { depth: null });
console.log("================================================\n");

// Test removing comments
twitter.removeComment("p2", "c6");
console.dir(twitter.getPosts(), { depth: null });
console.log("================================================\n");
