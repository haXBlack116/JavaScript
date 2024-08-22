const Comment = require("./Comment")

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.commentList = []
        this.createdAt = new Date()
    }
    addComment(username,text){
        this.commentList.push(new Comment(username,text))
    }
}

module.exports = Post
