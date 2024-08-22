const Character = require('./Character');

class Warrior extends Character {
    constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints, position){
        super(name,healthPoints,attackPoints,defensePoints)
        this.shieldPoints = shieldPoints
        this.position = position
        }
        attack(target){
            if (target instanceof Character) {
                if (this.position === "attacking") {
                   super.attack(target)
                }else{
                    console.log("O personagem está em posição de Defesa!")
                }
            }else{
                console.log("O alvo deve ser uma instância de Character!")
            }
        }
        changePosition(position){
            if (this.position === position) {
                this.position = "defending"
                this.defensePoints += this.shieldPoints
            }else if (this.position === position) {
                this.position = "attacking"
                this.defensePoints -= this.defensePoints
        }
    }
}

module.exports = Warrior
