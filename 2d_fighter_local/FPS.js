export class fps {
    constructor() {
        this.fps = 0
    }
    
    update(seconds) {
        this.fps = Math.trunc(1/seconds)
    }
    
    draw(info) {
        info.font = "bold 20px Arial"
        info.fillStyle = "black"
        info.textAlign = "center"
        info.fillText('FPS: ${this.fps}', info.canvas.width/2, 30)
    }

}