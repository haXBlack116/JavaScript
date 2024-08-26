const Installment = require("./Installment")

module.exports = class Loan { //Empréstimo
    static #interestRate = 1.05
    
    constructor(value, installments) {
        this.value = value
        this.installments = []
        for (let i = 0; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#interestRate) / installments), i)
        }
        this.creationDate = new Date()
    }
    static get interestRate(){
        return Loan.#interestRate
    }
    static set interestRate(newRate){
        if (typeof newRate === "number") {
            Loan.#interestRate = 1 + (newRate/100)
        }        
    }
}