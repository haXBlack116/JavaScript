const Character = require('./Character');

class Thief extends Character{
    constructor(name, healthPoints, attackPoints, defensePoints){
        super(name, healthPoints, attackPoints, defensePoints)
    }
    attack(target){
        if (target instanceof Character) {
            target.healthPoints -= (this.attackPoints - target.defensePoints)*2
        }else{
            console.log("O alvo deve ser uma instância de Character!")
        }
    }
}

module.exports = Thief
