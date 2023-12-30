class player {
    constructor(name) {
        this.name = name;
      }
}

class attackset {
    constructor(name) {
        this.attack.damage = None;
        this.attack.knockback = None;
        if(name == "player1"){
            this.forward.damage = 10;
            this.backward.damage = 10;
            this.up.damage = 10;
            this.down.damage = 10;
            this.forward.knockback = 10;
            this.backward.knockback = 10;
            this.up.knockback = 10;
            this.down.knockback = 10;
        }
        if(name == "player2"){
            this.forward.damage = 5;
            this.backward.damage = 20;
            this.up.damage = 10;
            this.down.damage = 7;
            this.forward.knockback = 2;
            this.backward.knockback = 30;
            this.up.knockback = 10;
            this.down.knockback = 10;
        }
    }
}


function greaterDamage(player1.attack.damage, player2.attack.damage){
    if(player1.attack.damage > player2.attack.damage){
        player2.state = "stun";
    } else if(player1.attack.damage < player2.attack.damage){
        player1.state = "stun";
    } else {
        player2.state = "stun";
        player1.state = "stun";
    }
}
