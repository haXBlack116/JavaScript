const Character = require('./Character');

class Mage extends Character {
    constructor(name, healthPoints, attackPoints, defensePoints, magic){
        super(name,healthPoints,attackPoints,defensePoints)
        this.magic = magic
        }
        attack(target){
            if (target instanceof Character) {
                target.healthPoints -= (this.attackPoints + this.magic) - target.defensePoints
            }else{
                console.log("O alvo deve ser uma instância de Character!")
            }
        }
        heal(target){
            if (target instanceof Character) {
                target.healthPoints += (this.magic)*2
            }else{
                console.log("O alvo deve ser uma instância de Character!")
        }
    }
}

module.exports = Mage


