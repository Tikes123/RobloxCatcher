export default class SceneTwo extends Phaser.Scene{
    constructor(){
        // the key for this scene, should be called when there is need to start the scene

        super("SceneTwo");
    }

    preload(){
        // loading the background image asset for this scene

        this.load.image("scenetwo-back", "assets/back.png")
        this.load.image("character", "assets/character.png")
        this.load.image("hand", "assets/hand.png")
        this.load.image("arrow", "assets/arrow.png")
        this.load.image("ellipse", "assets/ellipse.png")
        this.load.image("barrier", "assets/rectScore.png")
        
    }

    create(){

        // setting the cameras alpha for this scene, this is because the scene needs to come in with an animation and not just appear randomly
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 500
        })

        // this adds the already preloaded background image to the scene 
        this.add.image(160, 240, "scenetwo-back")

        // constant declaration for all the texts in this scene
        this.textL1 = this.add.text(160, 240, " Drag The Avatar", {fontFamily: "Moul",  fill: "#C759F6", } )
        this.textL2 = this.add.text(160, 240, " Left Aand Right To",{fontFamily: "Moul",  fill: "#C759F6", } )
        this.textL3 = this.add.text(160, 240, " Collect The Falling Robuxs",{fontFamily: "Moul",  fill: "#C759F6", } )


        // setting the position of the texts on the scene for the first line
        this.textL1.setOrigin(0.5,12)
        this.textL1.setScale(1)
        this.textL1.stroke = "#FFFFFF"
        this.textL1.strokeThickness = 16
        this.textL1.setShadow(1, 1, "#FFFFFF",1, true, true)


        // setting the position of the text on the scene for the second line
        this.textL2.setOrigin(0.5, 11)
        this.textL2.setScale(1)
        this.textL2.stroke = "#FFFFFF"
        this.textL2.strokeThickness = 16
        this.textL2.setShadow(1, 1, "#FFFFFF",1, true, true)

        

        // setting the position of the text on the scene for the third line
        this.textL3.setOrigin(0.5,10)
        this.textL3.setScale(1)
        this.textL3.stroke = "#FFFFFF"
        this.textL3.strokeThickness = 16
        this.textL3.setShadow(1, 1, "#FFFFFF",1, true, true)
        
        // the instruction text on the tutorial scene
        this.moveText = this.add.text(160, 240, "Looking good", {fontFamily: "Moul",  fill: "#C759F6",})
        this.moveText.setOrigin(0.5,12)
        this.moveText.setScale(1)
        this.moveText.stroke = "#FFFFFF"
        this.moveText.strokeThickness = 16
        this.moveText.setShadow(1, 1, "#FFFFFF",1, true, true)
        this.moveText.visible = false

        
        // the text that shows up after the avatar has moved left
        this.moveText3 = this.add.text(160, 240, "Move the Avatar Left", {fontFamily: "Moul",  fill: "#C759F6",})
        this.moveText3.setOrigin(0.5,12)
        this.moveText3.setScale(1)
        this.moveText3.stroke = "#FFFFFF"
        this.moveText3.strokeThickness = 16
        this.moveText3.setShadow(1, 1, "#FFFFFF",1, true, true)
        this.moveText3.visible = false

        // this line adds the avatar and also sets its position and size
        this.character = this.add.image(160,240, "character");
        this.character.setScale(0.7)
        this.character.setOrigin(0.5, 0.3)
        this.cursor = this.input.keyboard.createCursorKeys()
        
        // this line adds the hand icon and also sets its position and size

        const arrow = this.add.image(160, 240, "arrow")
        arrow.setScale(0.5)
        arrow.setOrigin(0.5,-8)
        

        //adding the images for the hand movement
        const ellipse = this.add.image(160, 240, "ellipse")
        ellipse.setScale(0.5)
        ellipse.setOrigin(0.5, -4.55)
        

        // adding the hand
        this.hand = this.add.image(195, 422, "hand")
        this.hand.setOrigin(1.9, 0.5)
        this.hand.setScale(0.1)

        // adding a tween animation to enable the hand indicate the movement of the avatar

        this.tween2 = this.tweens.add({
            targets: this.hand,
            x:0,
            duration: 3000,
            ease: "Linear",
            repeat: -1,
        })

       
        
        

        
        
    }

   
    update() {
        //  /** @type {Phaser.Physics.Arcade.StaticBody} */

        let leftKey = this.cursor.left.isDown 
        
        // conditional for left movement
        if (leftKey == true) {
            this.character.x -= 3
            this.textL1.visible = false
            this.textL2.visible = false
            this.textL3.visible = false
            this.hand.visible = false
            this.moveText.visible = true
            
            //limit for the avatar
            if (this.character.x < 50.59999900999952) {
                this.hand.visible = false
                
                // reloading the next scene for the other hand movement quickly
                this.time.delayedCall(2, ()=>this.scene.start("Restart"))
                  
            }
        }
       
        }
}
