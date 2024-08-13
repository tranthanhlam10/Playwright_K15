
const readlineSync = require("readline-sync");

function fetchPost(userId, postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                if (post.userId == userId) {
                    console.log(`Post with postId ${postId} by userId ${userId}:`);
                    console.log(`Title: ${post.title}`);
                    console.log(`Body: ${post.body}`);
                    resolve(); 
                } else {
                    console.log(`No post found with postId ${postId} for userId ${userId}`);
                    reject('Post not found or userId mismatch'); 
                }
            })
            .catch(error => reject('Error fetching post: ' + error)); 
    });
}


function fetchAllPostsByUser(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                if (posts.length > 0) {
                    console.log(`All posts by userId ${userId}:`);
                    posts.forEach(post => {
                        console.log(`Title: ${post.title}`);
                        console.log(`Body: ${post.body}`);
                        console.log('---');
                    });
                    resolve(); 
                } else {
                    console.log(`No posts found for userId ${userId}`);
                    reject('No posts found for the given userId'); // 
                }
            })
            .catch(error => reject('Error fetching posts: ' + error));
    });
}


//Test

const userId = readlineSync.question("Enter User ID");
const postId = readlineSync.question("Enter Post ID");


fetchPost(userId, postId)
    .then(() => fetchAllPostsByUser(userId))
    .catch(error => console.error('Error:', error));
