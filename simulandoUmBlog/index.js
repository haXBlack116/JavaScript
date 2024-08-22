const Author = require('./Author')

const author1 = new Author("Bernardo")
const post = author1.createPost("Top 3 melhores jogos", "1.RD2 2.GTA5 3.DL1", author1.authorName)

post.addComment("SoldierBoy22", "Muito Maneiro!")
post.addComment("Absolute44", "Legal!")

console.log(author1)
console.log(post)
