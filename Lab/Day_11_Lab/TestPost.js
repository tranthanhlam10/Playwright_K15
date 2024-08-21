const PostController = require("./PostController");


const URL = "https://jsonplaceholder.typicode.com/posts";


main();

async function main() {

  const postController = new PostController(URL);

  const getAllPost = await postController.printAllPosts(1);
  console.log(getAllPost);

  const getPost = await postController.printTargetPost(1, 1);
  console.log(getPost);
}