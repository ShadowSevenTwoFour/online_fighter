const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0, canvas.width, canvas.height)
const gravity = 20

player1.draw()
player2.draw()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}

function rectCollision(p1, p2){
    if(p1.attackBox.position.x + p1.attackBox.width >= p2.position.x && 
        p1.attackBox.position.x <= p2.position.x + p2.width &&
        p1.attackBox.position.y <= p2.position.y + p2.height &&
        p1.attackBox.position.y + p1.attackBox.height >= p2.position.y){
            return true
        }
    return false
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width, canvas.height)
    player1.update()
    player2.update()

    //player 1
    player1.velocity.x = 0
    if(keys.w.pressed && player1.lastKeyVert == 'w' && !player1.isJumping){
        player1.velocity.y = -10
        player1.isJumping = true
    } else if(keys.s.pressed && player1.lastKeyVert == 's' && player1.onPlatform){
        player1.velocity.y = 10
    }

    if(keys.a.pressed && player1.lastKeyHoriz == 'a'){
        player1.velocity.x = -5
    } else if(keys.d.pressed && player1.lastKeyHoriz == 'd'){
        player1.velocity.x = 5
    }

    //player 2
    player2.velocity.x = 0
    if(keys.ArrowUp.pressed && player2.lastKeyVert == 'ArrowUp' && !player2.isJumping){
        player2.velocity.y = -10
        player2.isJumping = true
    } else if(keys.ArrowDown.pressed && player2.lastKeyVert == 'ArrowDown' && player2.onPlatform){
        player2.velocity.y = 10
    }

    if(keys.ArrowLeft.pressed && player2.lastKeyHoriz == 'ArrowLeft'){
        player2.velocity.x = -5
    } else if(keys.ArrowRight.pressed && player2.lastKeyHoriz == 'ArrowRight'){
        player2.velocity.x = 5
    }

    //collision detection 
    //player 1 hits player 2
    if(rectCollision(player1,player2) && player1.isAttacking){
        player1.isAttacking = false
        console.log("player 1 hits player 2")
    }
    if(rectCollision(player2,player1) && player2.isAttacking){
        player2.isAttacking = false
        console.log("player 2 hits player 1")
}
    

}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        //player 1
        case 'w':
            keys.w.pressed = true
            player1.lastKeyVert = 'w'
            break
        case 'a':
            keys.a.pressed = true
            player1.lastKeyHoriz = 'a'
            break
        case 's':
            keys.s.pressed = true
            player1.lastKeyVert = 's'
            break
        case 'd':
            keys.d.pressed = true
            player1.lastKeyHoriz = 'd'
            break
        case ' ':
            if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
                player1.attack(keys.w.pressed ? 'w' :
                               keys.a.pressed ? 'a' :
                               keys.s.pressed ? 's' :
                               keys.d.pressed ? 'd' : '');
            }
            break

        //player 2
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            player2.lastKeyVert = 'ArrowUp'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            player2.lastKeyHoriz = 'ArrowLeft'
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            player2.lastKeyVert = 'ArrowDown'
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            player2.lastKeyHoriz = 'ArrowRight'
            break
        case 'z':
            player2.attack()
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key){
        //player 1
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        //player 2
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break

    }
})