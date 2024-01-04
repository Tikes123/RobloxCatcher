export default class BackgroundScene extends Phaser.Scene{
    constructor(){
        super("BackgroundScene");
    }
    preload(){
      // adding all images and assets
        this.load.image("back", "assets/character2.png")
        this.load.image("gcc", "assets/greenCoinCenter.png")
        this.load.image("gcl", "assets/greenCoinTiltLeft.png")
        this.load.image("hepCoin", "assets/Robux.png")
        this.load.image("greenTrail", "assets/greenTrail.png")
        this.load.image("goldTrail", "assets/goldTrail.png")
        this.load.image("greenTrail2", "assets/greenTrail2.png")
    }
    create(){

       // setting the cameras alpha for this scene, this is because the scene needs to come in with an animation and not just appear randomly
       this.cameras.main.alpha = 1;

       // this code defines the animation of the scene using the tween animation 
       this.tween = this.tweens.add({
           targets: this.cameras.main,
           alpha: 1,
           ease: "Linear",
           duration: 10
       })

      // adding the background image
        const image =  this.add.image(160, 240, "back")
        image.setOrigin(0.5,0.5)
        image.setScale(0.67)

      // the first text collect the
        const text =  this.add.text(160, 240, "Collect the", {fontFamily: "Moul",  fill: "#C759F6", } )
        text.setOrigin(0.5, 8)
        text.setScale(1.5)
        text.stroke = "#FFFFFF"
        text.strokeThickness = 16
        text.setShadow(1, 1, "#FFFFFF",1, true, true)
      
      // the second text falling roblox
        const text2 = this.add.text(160, 240, "Falling Robuxs",{fontFamily: "Moul",  fill: "#C759F6",} )
        text2.setOrigin(0.5, 7)
        text2.setScale(1.5)
        text2.stroke = "#FFFFFF"
        text2.strokeThickness = 16
        text2.setShadow(1, 1, "#FFFFFF",1, true, true)
      // adding all the images of coin
        this.gcc = this.add.image(160, 240, "gcc")
        this.gcc.setScale(0.8)
        this.gcl = this.add.image(160, 240, "gcl")
        this.gcl.setScale(0.8)
        this.hepCoin = this.add.image(160, 240, "hepCoin")
        this.hepCoin.setScale(0.8)
        this.hepCoin2 = this.add.image(160, 240, "hepCoin")
        this.hepCoin2.setScale(0.8)
        this.greenTrail = this.add.image(160,240, "greenTrail")
        this.greenTrail.setScale(0.8)
        this.greenTrail2 = this.add.image(160, 240, "greenTrail2")
        this.greenTrail2.setScale(0.8)
        this.goldTrail = this.add.image(160,240, "goldTrail")
        this.goldTrail.setScale(0.5)
        this.goldTrail2 = this.add.image(160,240, "goldTrail")
        this.goldTrail2.setScale(0.5)

      // setting the position of the coin
      this.hepCoin.setOrigin(3.2, 4.5)
      this.hepCoin2.setOrigin(-0.9, 3)
      this.gcl.setOrigin(1.5,3)
      this.gcc.setOrigin(-2, 4)
      this.greenTrail.setOrigin(-2,2.5)
      this.greenTrail2.setOrigin(1.59, 2.355)
      this.goldTrail.setOrigin(4.2, 5)
      this.goldTrail2.setOrigin(-1.5, 3.6)

      // need to add the falling animation on all the coins using the matter.js physics engine
      this.add.tween({
        targets: [this.gcl,this.gcc,this.greenTrail, this.greenTrail2,],
        duration:2000,
        y: "+=500",
        ease: "Linear.easeNone",
        repeat: -1,

      })

      this.add.tween({
        targets: [ this.hepCoin2,this.goldTrail2],
        duration: 1500,
        y: "+=500",
        ease: "Linear.easeOut",
        repeat: -1
      })

      this.add.tween({
        targets: [ this.hepCoin,this.goldTrail,],
        duration: 1500,
        y: "+=500",
        ease: "Linear.easeOut",
        repeat: -1
      })

     
    
      // this makes the transition from scene one to scene two very smooth
      this.time.delayedCall(500, ()=>this.scene.start("SceneTwo"))
       
    }

    
    
}