export default class FinalScene extends Phaser.Scene {
    constructor(){
        super("FinalScene")
    }
    preload(){
        this.load.image("background", "assets/collectedbg.png")
        this.load.image("celeb1", "assets/celeb1.png")
        this.load.image("bottom", "assets/bottomwing.png")
        this.load.image("top", "assets/topwing.png")
        this.load.image("background","assets/collectedbg.png")
        this.load.image("pot", "assets/emptyBag.png")
        this.load.image("green1", "assets/greenCoinCenter.png")
        this.load.image("green2", "assets/greenCoinRight.png")
        this.load.image("green3", "assets/greenCoinTiltLeft.png")
        this.load.image("hepCoin", "assets/heptagonCoin.png")
        this.load.image("claim", "assets/buttonClaim.png")
    }
    create(){
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 1000
        })

        
        const backG = this.add.image(160, 240, "background")
        backG.setScale(0.855)

        const top = this.add.image(160, 240, "top")
        top.setScale(0.8)
        top.setOrigin(0.5, 1.3)

        const bottom = this.add.image(160, 240, "bottom")
        bottom.setScale(0.8)
        bottom.setOrigin(0.5, -0.3)

        const pot = this.add.image(160, 300, "pot")
        pot.setScale(0.7)

        const celeb = this.add.image(160, 240, "celeb1")
        celeb.setScale(0.5)

        const text =  this.add.text(160, 240, "You Won !", {fontFamily: "Moul",  fill: "#C759F6", } )
        text.setOrigin(0.5, 8)
        text.setScale(1)
        text.stroke = "#FFFFFF"
        text.strokeThickness = 16
        text.setShadow(1, 1, "#FFFFFF",1, true, true)

        const text2 =  this.add.text(160, 240, "10360 Points", {fontFamily: "Moul",  fill: "#C759F6", } )
        text2.setOrigin(0.5, 4)
        text2.setScale(1.5)
        text2.stroke = "#FFFFFF"
        text2.strokeThickness = 16
        text2.setShadow(1, 1, "#FFFFFF",1, true, true)

        const green1 = this.add.image(140, 240, "green1")
        green1.setScale(0.8)
        const green2 = this.add.image(190, 240, "green1")
        green2.setScale(0.8)
        const hepCoin =  this.add.image(100, 240, "hepCoin")
        hepCoin.setScale(0.8)
        const hepCoin1 =  this.add.image(170, 260, "hepCoin")
        hepCoin1.setScale(0.8)
        const tiltleft = this.add.image(100, 270, "green3")
        tiltleft.setScale(0.5)
        const tiltleft2 = this.add.image(120, 270, "green3")
        tiltleft2.setScale(0.5)
        const hepCoin2 =  this.add.image(140, 260, "hepCoin")
        hepCoin2.setScale(0.8)
        const tiltright = this.add.image(210, 250, "green2")
        tiltright.setScale(0.8)
        const tiltright2 = this.add.image(180, 260, "green2")
        tiltright2.setScale(0.6)
        const tiltleft3 = this.add.image(70, 270, "green3")
        tiltleft3.setScale(0.6)
        const tiltright3 = this.add.image(80, 330, "green2")
        tiltright3.setScale(0.8)
        const hepCoin4 = this.add.image(30, 380, "hepCoin")
        hepCoin4.setScale(1.5)
        const green4 = this.add.image(30, 440, "green1")
        green4.setScale(2.0)
        const hepCoin5 = this.add.image(300, 370, "hepCoin")
        hepCoin5.setScale(1.5)
        const green5 = this.add.image(230, 310, "green1")
        green5.setScale(0.5)
        const button = this.add.image(160, 420, "claim").setInteractive()
        button.setScale(0.7)
    }
    
}