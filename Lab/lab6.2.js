
const readlineSync = require("readline-sync");


main();

async function fetchPost(userId, postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        
        if (post.userId == userId) {
            console.log(`Post with postId ${postId} by userId ${userId}:`);
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
        } else {
            console.log(`No post found with postId ${postId} for userId ${userId}`);
        }
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}

async function fetchAllPostsByUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        
        if (posts.length > 0) {
            console.log(`All posts by userId ${userId}:`);
            posts.forEach(post => {
                console.log(`Title: ${post.title}`);
                console.log(`Body: ${post.body}`);
            });
        } else {
            console.log(`No posts found for userId ${userId}`);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}


async function main() {
    const userId = readlineSync.question("Enter User ID");
    const postId = readlineSync.question("Enter Post ID");
    
    await fetchPost(userId, postId);
    await fetchAllPostsByUser(userId);
}



