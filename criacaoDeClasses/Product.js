class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(percent){
        const descount = this.price*percent
        return this.price-descount
    }
}

const product1 = new Product("Banana", "Fruta", 5.69)

product1.addToStock(70)
console.log(product1.calculateDiscount(0.5))
console.log(product1)

