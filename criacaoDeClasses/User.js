class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login Bem Sucedido!")
        }else{
            console.log("Email ou senha inválidos!")
        }
    }
}

const user1 = new User("Bernardo Eckert Wesoly", "@bernardo116", "12345")
const user2 = new User("Henrique Eckert Wesoly", "@henrique116", "54321")

console.log(user1)
console.log(user2)

user1.login("@bernardo116", "12345")
user2.login("@henri", "1111")

