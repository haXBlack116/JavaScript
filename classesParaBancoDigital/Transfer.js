module.exports = class Transfer {
    constructor(enviedUser, recivedUser, value) { //usuario que enviou, usuario que recebeu
        this.enviedUser = enviedUser
        this.recivedUser = recivedUser
        this.value = value
        this.creationDate = new Date()
    }
}