// Starter code structure:
async function getDashboard() {
  try {
    // 1. Kick off requests simultaneously
    const [users, posts, comments] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }),
      fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }),
      fetch(`https://jsonplaceholder.typicode.com/comments`).then(
        (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        },
      ),
    ]);
    // --- summary ---

    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;
    const avgPostsPererUser = parseInt(totalPosts / totalUsers);
    const avgCommentsPerPost = parseInt(totalComments / totalPosts);
    const summary = {
      totalUsers,
      totalPosts,
      totalComments,
      avgPostsPererUser,
      avgCommentsPerPost,
    };

    // --- topUsers ---
    // Count posts per user
    const postCountByUser = {}; // userId -> count
    const postIdsByUser = {}; // userId -> [postIds] save all post related to user

    posts.forEach((post) => {
      postCountByUser[post.userId] = (postCountByUser[post.userId] || 0) + 1;

      if (!postIdsByUser[post.userId]) postIdsByUser[post.userId] = [];
      postIdsByUser[post.userId].push(post.id);
    });

    // Count comments per post, then aggregate by user
    const commentCountByPost = {}; // postId -> count
    comments.forEach((c) => {
      commentCountByPost[c.postId] = (commentCountByPost[c.postId] || 0) + 1;
    });

    const topUsers = Object.entries(postCountByUser)
      .sort((a, b) => b[1] - a[1]) // sort by postCount desc
      .slice(0, 3) //Top 3 users
      .map(([userId, postCount]) => {
        const user = users.find((u) => u.id === Number(userId));
        const commentCount = postIdsByUser[userId].reduce(
          (sum, postId) => sum + (commentCountByPost[postId] || 0),
          0,
        );
        return { name: user.name, postCount, commentCount };
      });

    // --- recentPosts ---
    const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 5);
    console.log({
      summary,
      topUsers,
      recentPosts,
    });
    return {
      sumamry,
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Error message:", error.message);
    return null;
  }
}

getDashboard();
