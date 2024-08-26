module.exports = class Account {
    #balance
    #allDeposits
    #allLoans
    #allTransfers
    constructor(user) {
        this.#balance = 0
        this.owner = user
        this.#allDeposits = []
        this.#allLoans = []
        this.#allTransfers = []
    }
    get balance(){
        return this.#balance
    }
    newDeposit(deposit){
        this.#balance += deposit.value
        this.#allDeposits.push(deposit)
    }
    newLoan(loan){
        this.#balance += loan.value
        this.#allLoans.push(loan)
    }
    newTransfer(transfer){
        if (this.owner.email === transfer.recivedUser.email) {
            this.#balance += transfer.value
            this.#allTransfers.push(transfer)
        } else if (this.owner.email === transfer.enviedUser.email) {
            this.#balance -= transfer.value
            this.#allTransfers.push(transfer)
        } else {
            console.log("O usuario não é válido!")
        }
    }
}
