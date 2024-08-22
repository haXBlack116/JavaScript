const Post = require("./Post")

class Author {
    constructor(authorName) {
        this.authorName = authorName
        this.posts = []
    }
    createPost(title,body){
        const post0 = new Post(title,body,this)
        this.posts.push(post0)
        return post0
    }
}

module.exports = Author
