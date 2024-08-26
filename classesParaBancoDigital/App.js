const Loan = require("./Loan")
const Deposit = require("./Deposit")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App{
    static #usersList = []

    static findUserByEmail(email){
        const user = this.#usersList.find(user => user.email === email)
        return user ?? null
    }
    
    static createUser(name, email){
        const userExists = App.findUserByEmail(email)
        if (!userExists) {
            this.#usersList.push(new User(name, email))
        }
    }
    
    static deposit(email, value){
        const user = App.findUserByEmail(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.newDeposit(newDeposit)
        }
    }

    static transfer(enviedEmail, recivedEmail, value){
        const enviedUser = App.findUserByEmail(enviedEmail)
        const recivedUser = App.findUserByEmail(recivedEmail)
        if (enviedUser && recivedUser) {
            const newTransfer = new Transfer(enviedUser, recivedUser, value)
            enviedUser.account.newTransfer(newTransfer)
            recivedUser.account.newTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments){
        const user = App.findUserByEmail(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.newLoan(newLoan)
        }
    }

    static changeInterestRate(newRate){
        Loan.interestRate = newRate
    }
}
