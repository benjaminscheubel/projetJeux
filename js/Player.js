class Player {
    name;
    personnage = new Player();
    constructor(playerName) {
        this.name = playerName;
        this.personnage = this.personnage
    }


}
class Mage extends Player {
    pv;
    attack;
    constructor(pv, attack) {
        this.pv = pv;
        this.attack = attack
    }

    getPv() {
        return this.pv;
    }

    getAttack(){
        return this.attack
    }

}

class Guerrier extends Player {
    pv;
    attack;
    constructor(pv, attack) {
        this.pv = pv;
        this.attack = attack
    }

    getPv() {
        return this.pv;
    }

    getAttack(){
        return this.attack
    }

}

class Soigneur extends Player {
    pv;
    attack;
    constructor(pv, attack) {
        this.pv = pv;
        this.attack = attack
    }

    getPv() {
        return this.pv;
    }

    getAttack(){
        return this.attack
    }

}

