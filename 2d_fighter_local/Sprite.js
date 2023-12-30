class Sprite {
    constructor({position, velocity, dim, colour, offset, attackset, spritepath}){
        //maintainence
        this.current_attack = null
        this.current_sprite = spritepath.one
        this.position = position
        this.velocity = velocity
        this.height = dim.height
        this.width = dim.width
        this.colour = colour
        this.attackset = attackset
        // overlapping keys
        this.lastKeyVert
        this.lastKeyHoriz
        //jumping and falling
        this.onPlatform = false
        this.isJumping = false
        //attacks
        this.isAttacking = false
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 100,
            height: 50,
            rotation: 0,
            offset: offset
        }
    }
    draw(){
        //player
        c.fillStyle = this.colour
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        //attackbox
        // if(this.isAttacking){
            c.fillStyle = "blue"
        c.fillRect(this.attackBox.position.x + this.attackBox.offset.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        //}

    }
    update(){
        this.draw()
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
            this.isJumping = false
        } else {
            this.velocity.y += 0.2
        }
    }
    attack(directionKey) {
        this.isAttacking = true

        switch (directionKey) {
            case 'w':
                if (this.isJumping){
                    this.current_attack = this.attackset.upward_air
                } else {
                    this.current_attack = this.attackset.upward
                }
                break
            case 'a': 
                if (this.isJumping){
                    if(this.lastKeyHoriz == 'a'){
                        this.current_attack = this.attackset.forward_air
                    } else {
                        this.current_attack = this.attackset.backward_air
                    }
                } else {
                    this.current_attack = this.attackset.forward
                }
                break
            case 's':
                if (this.isJumping){
                    this.current_attack = this.attackset.downward_air
                } else {
                    
                }
                
                break
            case 'd':
                if (this.isJumping){
                    if(this.lastKeyHoriz == 'd'){
                        this.current_attack = this.attackset.forward_air
                    } else {
                        this.current_attack = this.attackset.backward_air
                    }
                } else {
                    this.current_attack = this.attackset.forward
                }
                break
            default:
                
        }
        setTimeout(() => {
            this.isAttacking = false
        }, current_attack.time)
    }
}
