class Character{
    constructor(name, healthPoints, attackPoints, defensePoints){
        this.name = name
        this.healthPoints = healthPoints
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }
    attack(target){
        if (target instanceof Character) {
            target.healthPoints -= this.attackPoints - target.defensePoints
        }else{
            console.log("O alvo deve ser uma instância de Character!")
        }
    }
}

module.exports = Character
