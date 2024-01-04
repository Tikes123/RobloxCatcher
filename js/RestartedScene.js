export default class Restart extends Phaser.Scene{
    constructor(){
        super("Restart")
    }

    preload(){
        this.load.image("scenetwo-back", "assets/back.png")
        this.load.image("character", "assets/character.png")
        this.load.image("hand", "assets/hand.png")
        this.load.image("arrow", "assets/arrow.png")
        this.load.image("ellipse", "assets/ellipse.png")
        this.load.image("barrier", "assets/rectScore.png")
    }

    create(){
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 100
        })
        // setting the background image for the scene
        const back = this.add.image(160, 240, "scenetwo-back")
        back.setScale(0.9)

        // adding and styling the texts for this scene
        this.moveText1 = this.add.text(160, 240, "Now Move Right", {fontFamily: "Moul",  fill: "#C759F6",})
        this.moveText1.setOrigin(0.5,12)
        this.moveText1.setScale(1)
        this.moveText1.stroke = "#FFFFFF"
        this.moveText1.strokeThickness = 16
        this.moveText1.setShadow(1, 1, "#FFFFFF",1, true, true)

        this.moveText2 = this.add.text(160, 240, "Excellent", {fontFamily: "Moul",  fill: "#C759F6",})
        this.moveText2.setOrigin(0.5,12)
        this.moveText2.setScale(1)
        this.moveText2.stroke = "#FFFFFF"
        this.moveText2.strokeThickness = 16
        this.moveText2.setShadow(1, 1, "#FFFFFF",1, true, true)
        this.moveText2.visible = false


        //adding all the sprites/images for this scene

        this.character = this.add.image(160,240, "character", true)
        this.character.setScale(0.7)
        this.character.setOrigin(0.5, 0.3)
        this.cursor = this.input.keyboard.createCursorKeys()


        // adding the images for the movement of the hand
        const arrow = this.add.image(160, 240, "arrow")
        arrow.setScale(0.5)
        arrow.setOrigin(0.5,-8)

        const ellipse = this.add.image(160, 240, "ellipse")
        ellipse.setScale(0.5)
        ellipse.setOrigin(0.5, -4.55)


        // adding the hand 
        this.hand = this.add.image(195, 422, "hand")
        this.hand.setOrigin(1.9, 0.5)
        this.hand.setScale(0.1)


        // setting tweens movement of the hand towards the right
        let tween = this.tweens.add({
            targets: this.hand,
            x: this.hand.x + 100,
            duration: 2000,
            ease: "Linear",
            repeat: -1,
            yoyo: false
        })

    }

    update(){
        // setting the right key movement ((remember to add the drag function as well))
        let rightKey = this.cursor.right.isDown
        if (rightKey == true) {
            this.character.x += 3
           
            //limiting the movement of the avatar
            if (this.character.x > 250.40000000000006) {
                this.character.setPosition(250.40000000000006, this.character.y)
                this.moveText1.visible = false
                this.hand.visible = false
                this.moveText2.visible = true
                this.time.delayedCall(2, ()=>this.scene.start("SceneThree"))
            }
        }
    
    
}

}