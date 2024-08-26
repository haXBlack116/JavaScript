const App = require("./App")

App.createUser("Bernardo Eckert Wesoly", "bernardoW@gmail.com")
App.createUser("Henrique Eckert Wesoly", "henriqueW@gmail.com")
App.createUser("Victória Eckert Wesoly", "vicW@gmail.com")


App.deposit("bernardoW@gmail.com", 500)

App.transfer("bernardoW@gmail.com", "henriqueW@gmail.com", 200)

App.changeInterestRate(10)
App.takeLoan("vicW@gmail.com", 2000, 24)

console.table(App.findUserByEmail("bernardoW@gmail.com"))
console.table(App.findUserByEmail("bernardoW@gmail.com").account)
console.table(App.findUserByEmail("henriqueW@gmail.com"))
console.table(App.findUserByEmail("henriqueW@gmail.com").account)
console.table(App.findUserByEmail("vicW@gmail.com"))
console.table(App.findUserByEmail("vicW@gmail.com").account)
