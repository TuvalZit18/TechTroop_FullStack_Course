// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    if (user) {
      const response2 = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );
      if (!response.ok) {
        throw new Error("No posts found");
      }
      const posts = await response2.json();
      console.log({ user, posts });
      return { user, posts };
    }
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

getUserWithPosts(1);
