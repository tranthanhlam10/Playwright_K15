const Post = require("./Post.js");

class PostController {

    constructor(url){
        this.url = url; 
    }
  async printTargetPost(userId, post_id) {
    const response = await this.printAllPosts(userId);
    return response.find((post) => post._id === post_id);
  }

  async printAllPosts(userId) {
    const response = await this._getAllPosts(userId); 
      return response.filter((post) => post._id == userId);    
  }

  async _getAllPosts() {
    const response = await fetch(this.url);
    const data = await response.json();   
    return data.map(post => {
         const {userId, id, title, body} = post;
            return new Post(userId, id, title, body);
    })
  }
}

module.exports = PostController;    

