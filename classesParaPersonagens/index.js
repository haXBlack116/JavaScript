const Character = require('./Character');
const Mage = require('./Mage');
const Thief = require('./Thief');
const Warrior = require('./Warrior');

const mage1 = new Mage("Gojo", 10000, 500, 5000, 8000)
const mage2 = new Mage("Megumi", 8000, 300, 4000, 10000)

const character1 = new Character("Nanami", 5000, 500, 500)
const character2 = new Character("Geto", 9000, 450, 6000)

const thief1 = new Thief("Benjiro", 6500, 350, 7000)
const thief2 = new Thief("Hiori", 7000, 200, 8000)

const warrior1 = new Warrior("Goku", 9500, 650, 8000, 200, "defending")
const warrior2 = new Warrior("Vegeta", 9000, 600, 8000, 350, "attacking")

console.table({character1,character2,mage1,mage2,thief1,thief2,warrior1,warrior2})