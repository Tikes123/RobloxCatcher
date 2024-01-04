export default class GamePlay1 extends Phaser.Scene{
    constructor(var1){
        super("GamePlay1")
        // variable for the game score
        this.gameScore = "0036"
        this.createGcc1 = var1        
    }
    preload(){
        // this loads all the images, sprites and spritesheets for this scene
        this.load.image("gameplay", "assets/gameplay.png")
        this.load.image("character3", "assets/character3.png")
        this.load.image("scoreBg", "assets/scoreBg.png")
        this.load.image("emptyBag", "assets/emptyBag.png")
        this.load.image("robux", "assets/Robux.png")
        this.load.image("rectScore", "assets/rectScore.png")
        this.load.image("gcc", "assets/greenCoinCenter.png")
        this.load.image("gcl", "assets/greenCoinTiltLeft.png")
        this.load.image("gcr", "assets/greenCoinRight.png")
        this.load.image("greenTrail2", "assets/greenTrail2.png")
        this.load.image("goldTrail", "assets/goldTrail.png")
        this.load.image("bag", "assets/emptyBag.png")
        this.load.image("yellow", "assets/yellow.png")
        this.load.image("green", "assets/green.png")
        this.load.image("groupCoin", "assets/groupCoin.png")
        this.load.image("one", "assets/one.png")
        this.load.image("two", "assets/two.png")
        this.load.image("three", "assets/three.png")
        this.load.image("four", "assets/four.png")
        this.load.image("five", "assets/five.png")
        this.load.image("six", "assets/six.png")
        this.load.image("seven", "assets/seven.png")
        this.load.image("eight", "assets/eight.png")
        this.load.image("nine", "assets/nine.png")
        this.load.image("ten", "assets/ten.png")
        this.load.image("eleven", "assets/eleven.png")
        this.load.image("twelve", "assets/twelve.png")
        this.load.image("thirteen", "assets/thirteen.png")
        this.load.image("fourteen", "assets/fourteen.png")
        this.load.image("fifteen", "assets/fifteen.png")
       
        
    }

    create(){
        this.cameras.main.alpha = 0;

        // this code defines the animation of the scene using the tween animation 
            this.tween = this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            ease: "Linear",
            duration: 10
        })
        

        // these blocks of code adds all the needed sprites and spritesheets to this scene
        const gameplay = this.add.image(160,240, "gameplay")
        gameplay.setScale(1)

   

        this.avatar = this.add.image(160, 370, "character3",)
        this.avatar.setScale(0.4)
        this.cursor = this.input.keyboard.createCursorKeys()
        
        this.bag = this.add.image(165, 362, "bag")
        this.bag.setScale(0.25)
        this.physics.add.existing(this.bag)

        this.scoreBg = this.add.image(60, 50, "scoreBg")
        this.scoreBg.setScale(1)

        this.timeText = this.add.text(40, 55, "Secs", {fontFamily: "Moul"})
        this.text = this.add.text(53, 40, "16", {fontFamily: "Moul"})
        this.num = Number(this.text.text)        

        this.fifteen = this.add.image(60, 52, "fifteen")
        this.fifteen.setVisible(false)
        this.fourteen = this.add.image(60, 52, "fourteen")
        this.fourteen.setVisible(false)
        this.thirteen = this.add.image(60, 52, "thirteen")
        this.thirteen.setVisible(false)
        this.twelve = this.add.image(60, 52, "twelve")
        this.twelve.setVisible(false)
        this.eleven = this.add.image(62, 52, "eleven")
        this.eleven.setVisible(false)
        this.ten = this.add.image(67, 52, "ten")
        this.ten.setVisible(false)
        this.nine = this.add.image(74, 52, "nine")
        this.nine.setVisible(false)
        this.eight = this.add.image(80, 52, "eight")
        this.eight.setVisible(false)
        this.seven = this.add.image(80, 56, "seven")
        this.seven.setVisible(false)
        this.six =this.add.image(80, 61, "six")
        this.six.setVisible(false)
        this.five = this.add.image(80, 69, "five")
        this.five.setVisible(false)
        this.four = this.add.image(79, 77, "four")
        this.four.setVisible(false)
        this.three = this.add.image(74, 84, "three")
        this.three.setVisible(false)
        this.two = this.add.image(71, 87, "two")
        this.two.setVisible(false)
        this.one = this.add.image(71, 87, "one")
        this.one.setVisible(false)
 

        this.rectScore = this.add.image(160, 240, "rectScore")
        this.rectScore.setScale(0.8)
        this.rectScore.setOrigin(-0.4 , 6.64)

        this.robux = this.add.image(160, 240, "robux")
        this.robux.setScale(0.6)
        this.robux.setOrigin(-3.8, 7.3)

        // adding the game score text

        this.mark = this.add.text(210, 36, `${this.gameScore}`, {fontFamily: "Moul"})

        this.createGreen1 = () => {
          this.green1 = this.add.image(160, 40, "gcc")
          this.green1.setScale(0.4)
          this.physics.add.existing(this.green1)

          this.greenTrail1 = this.add.image(160, 20, "greenTrail2")
          this.greenTrail1.setScale(0.4)

          this.tweens.add({
            targets: [this.green1, this.greenTrail1],
            y: "+= 500",
            duration: 2000,
            ease: "Linear.easeOut",
            repeat: -1
          })
        }

        this.createGreen2 = () => {
          this.green2 = this.add.image(30, 140, "gcc")
          this.green2.setScale(0.4)
          this.physics.add.existing(this.green2)

          this.greenTrail2 =  this.add.image(30, 120, "greenTrail2")
          this.greenTrail2.setScale(0.4)

          this.tweens.add({
            targets: [this.green2, this.greenTrail2],
            y: "+= 500",
            duration: 2500,
            repeat: -1
          })
        }

        this.createGreen3 = () => {
          this.green3 = this.add.image(220, 90, "gcc")
          this.green3.setScale(0.4)
          this.physics.add.existing(this.green3)

          this.greenTrail3 = this.add.image(220, 70, "greenTrail2")
          this.greenTrail3.setScale(0.4)

          this.tweens.add({
            targets: [this.green3, this.greenTrail3],
            y: "+= 500",
            ease: "Linear.easeOut",
            repeat: -1,
            duration: 1500
          })
        }

        this.createGreen4 = () => {
          this.green4 = this.add.image(240, 240, "gcc")
          this.green4.setScale(0.4)
          this.physics.add.existing(this.green4)

          this.greenTrail4 = this.add.image(240, 220, "greenTrail2")
          this.greenTrail4.setScale(0.4) 

          this.tweens.add({
            targets: [this.green4, this.greenTrail4],
            y: "+= 500",
            duration: 3000,
            repeat: -1
          })
        }

        this.createGold1 = () => {
          this.gold1 =  this.add.image(100,40, "robux")
          this.gold1.setScale(0.5)
          this.physics.add.existing(this.gold1)

          this.goldTrail1 = this.add.image(100, 20, "goldTrail")
          this.goldTrail1.setScale(0.4)

          this.tweens.add({
            targets: [this.gold1, this.goldTrail1],
            y: "+= 500",
            duration: 2500,
            repeat: -1
          })
        }

        this.createGold2 = () => {
          this.gold2 = this.add.image(300,40, "robux")
          this.gold2.setScale(0.5)
          this.physics.add.existing(this.gold2)

          this.goldTrail2 = this.add.image(300, 20, "goldTrail")
          this.goldTrail2.setScale(0.4)

          this.tweens.add({
              targets: [this.gold2, this.goldTrail2],
              y: "+= 500",
              duration: 2000,
              repeat: -1
            })
        }

        this.createGold3 = () => {
          this.gold3 = this.add.image(180, 80, "robux")
          this.gold3.setScale(0.5)
          this.physics.add.existing(this.gold3)

          this.goldTrail3 = this.add.image(180, 60, "goldTrail")
          this.goldTrail3.setScale(0.4)

          this.tweens.add({
              targets: [this.gold3, this.goldTrail3],
              y: "+= 500",
              duration: 1500,
              repeat: -1
            })
        }

        this.createGold4 = () => {
          this.gold4 = this.add.image(120, 160, "robux")
          this.gold4.setScale(0.5)
          this.physics.add.existing(this.gold4)

          this.goldTrail4 = this.add.image(120, 140, "goldTrail")
          this.goldTrail4.setScale(0.4)

          this.tweens.add({
              targets: [this.gold4, this.goldTrail4],
              y: "+= 500",
              duration: 1500,
              repeat: -1
            })
        }

       
          this.greenAdded1 = this.add.image(260, -10, "gcc")
          this.greenAdded1.setScale(0.4)
          this.physics.add.existing(this.greenAdded1)
        
        this.tweenGreen1 = () => {
          this.tweens.add({
            targets: this.greenAdded1,
            y: "+= 500",
            duration: 3000,
            repeat: -1,
            duration: 1000
          })
        }

        this.greenAdded2 =  this.add.image(80,-10, "gcc")
        this.greenAdded2.setScale(0.4)
        this.physics.add.existing(this.greenAdded2)

        this.tweenGreen2 = () => {
          this.tweens.add({
            targets: this.greenAdded2,
            y: "+=500",
            duration: 3000,
            repeat: -1,
            duration: 1000
          })
        }

        this.goldAdded1 = this.add.image(210, -10, "robux")
        this.goldAdded1.setScale(0.5)
        this.physics.add.existing(this.goldAdded1)

        this.tweenGold1 = () => {
          this.tweens.add({
            targets: this.goldAdded1,
            y: "+=500",
            duration: 3000,
            repeat: -1,
            duration: 1000
          })
        }

        this.oneSecond = () => {
          this.one.setVisible(true)
        }
        this.twoSeconds = () => {
          this.one.setVisible(false)
          this.two.setVisible(true)
        }
        this.threeSeconds = () =>{
          this.one.setVisible(false)
          this.two.setVisible(false)
          this.three.setVisible(true)
        }
        this.fourSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(true)
        }
        this.fiveSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(true)
        }
        this.sixSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(true)
              this.touch.setVisible(true)

        }
        this.sevenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(true)
        }
        this.eightSeconds = () => {
          this.one.setVisible(false)
          this.two.setVisible(false)
          this.three.setVisible(false)
          this.four.setVisible(false)
          this.five.setVisible(false)
          this.six.setVisible(false)
          this.seven.setVisible(false)
          this.eight.setVisible(true)
        }

        this.nineSeconds = () => {
          this.one.setVisible(false)
          this.two.setVisible(false)
          this.three.setVisible(false)
          this.four.setVisible(false)
          this.five.setVisible(false)
          this.six.setVisible(false)
          this.seven.setVisible(false)
          this.eight.setVisible(false)
          this.nine.setVisible(true)
        }
        this.tenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(true)
        }
        this.elevenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(false)
              this.eleven.setVisible(true)
        }
        this.twelveSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(false)
              this.eleven.setVisible(false)
              this.twelve.setVisible(true)
        }
        this.thirteenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(false)
              this.eleven.setVisible(false)
              this.twelve.setVisible(false)
              this.thirteen.setVisible(true)
        }
        this.fourteenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(false)
              this.eleven.setVisible(false)
              this.twelve.setVisible(false)
              this.thirteen.setVisible(false)
              this.fourteen.setVisible(true)
        }
        this.fifteenSeconds = () => {
              this.one.setVisible(false)
              this.two.setVisible(false)
              this.three.setVisible(false)
              this.four.setVisible(false)
              this.five.setVisible(false)
              this.six.setVisible(false)
              this.seven.setVisible(false)
              this.eight.setVisible(false)
              this.nine.setVisible(false)
              this.ten.setVisible(false)
              this.eleven.setVisible(false)
              this.twelve.setVisible(false)
              this.thirteen.setVisible(false)
              this.fourteen.setVisible(false)
              this.fifteen.setVisible(true)
        }

        
        this.touch =  this.add.image(163, 350, "groupCoin")    
        this.touch.setScale(0.3)
        this.touch.setVisible(false)
        this.physics.add.existing(this.touch)

          this.updatedTime = () =>{
            this.newNum = Number(this.num)
            var newNum2 = this.newNum-=1
            this.num = newNum2

            if (this.num === 15) {
              this.oneSecond()
            }
            else if (this.num === 14){
              this.twoSeconds()
            }

            else if (this.num === 13){
             this.threeSeconds()
            }
            else if (this.num === 12){
              this.fourSeconds()
            }

            else if (this.num === 11){
              this.fiveSeconds()
            }

            else if (this.num === 10){
              this.sixSeconds()
            }

            else if (this.num === 9){
              this.sevenSeconds()
            }
            else if (this.num === 8){
             this.eightSeconds()
            }

            else if (this.num === 7){
             this.nineSeconds()
            }

            else if (this.num === 6){
              this.tenSeconds()
            }

            else if (this.num === 5){
              this.elevenSeconds()
            }

            else if (this.num === 4){
              this.twelveSeconds()
            }
            else if (this.num === 3){
              this.thirteenSeconds()
            }

            else if (this.num === 2){
              this.fourteenSeconds()
            }
            
            else if (this.num === 1){
              this.fifteenSeconds()
            }
             

            if (this.num === 15) {
             this.createGreen1()
             this.createGreen2()
             this.createGreen3()
             this.createGreen4()
             this.createGold1()
             this.createGold2()
             this.createGold3()
             this.createGold4()
            }
            //this updates the time text in the game
            this.text.setText(`${this.num}`, {fontFamily: "Moul"})
              if (this.num <= 0) {
                this.time.delayedCall(50, ()=>this.scene.start("Collected"))
                setTimeout(()=>{
                  clearInterval(intervalId)
                })
              }
          }

          
          
          // this calls the function that reduces the time by one every one second
          let intervalId = setInterval(this.updatedTime, 1000)

          // this function updates the score of the game when the green coin is collected
          this.updateScoreGreen = () =>{
            let newvar = this.mark.text
            let digit = Number(newvar)
            this.gameScore = digit
            this.gameScore += 50
            this.mark.setText(`${this.gameScore}`, {fontFamily: "Moul"})
          }

          // this function updates the game score when the gold coin is collected
          this.updateScoreGold = () =>{
            let newvar = this.mark.text
            let digit = Number(newvar)
            this.gameScore = digit
            this.gameScore += 10
            this.mark.setText(`${this.gameScore}`, {fontFamily: "Moul"})
          }

          this.green1Overlap = () => {
            this.green1.destroy()
            this.greenTrail1.destroy()
            this.updateScoreGreen()
            this.tweenGreen1()
  
          }

          this.greenAdded1Overlap = () =>{
            this.updateScoreGreen()
            this.greenAdded1.destroy()
            this.createGreen1()
          }

          this.goldAdded1Overlap = () => {
            this.goldAdded1.destroy()
            this.updateScoreGold()
            this.createGreen2()
          }

          this.green3Overlap = () => {
            this.green3.destroy()
            this.greenTrail3.destroy()
            this.updateScoreGreen()
            this.tweenGreen2()
          }

          this.greenAdded2Overlap = () => {
            this.updateScoreGreen()
            this.greenAdded2.destroy()
            this.createGreen3()
          }

          this.green4Overlap = () => {
            this.green4.destroy()
            this.greenTrail4.destroy()
            this.updateScoreGreen()
            this.tweenGreen1()
          }

          this.gold1Overlap = () => {
            this.gold1.destroy()
            this.goldTrail1.destroy()
            this.updateScoreGold()
            this.tweenGreen1()
          }

          this.gold2Overlap = () => {
            this.gold2.destroy()
            this.goldTrail2.destroy()
            this.updateScoreGold()
            this.createGreen3()
          }

        this.gold3Overlap = () => {
          this.gold3.destroy()
          this.goldTrail3.destroy()
          this.updateScoreGold()
          this.createGreen1()
        }

        this.gold4Overlap = () => {
          this.gold4.destroy()
          this.goldTrail4.destroy()
          this.updateScoreGold()
        }

        this.green2Overlap = () => {
          this.green2.destroy()
          this.greenTrail2.destroy()
          this.updateScoreGreen()
        }

          
    }
          
    update(){
        let leftkey = this.cursor.left.isDown
        let rightkey =  this.cursor.right.isDown

        if (leftkey) {
          this.avatar.x -= 3;
          this.bag.x -= 3;
          this.touch.x -= 3;

          if (this.touch.x <= 7) {
            this.avatar.x = 8
            this.bag.x = 10;
            this.touch.x = 9
          }

        this.physics.add.overlap(this.touch, this.green1, this.green1Overlap )
        this.physics.add.overlap(this.touch, this.greenAdded1,this.greenAdded1Overlap)
        this.physics.add.overlap(this.touch, this.goldAdded1, this.goldAdded1Overlap)
        this.physics.add.overlap(this.touch, this.green3, this.green3Overlap)
        this.physics.add.overlap(this.touch, this.greenAdded2, this.greenAdded2Overlap)
        this.physics.add.overlap(this.touch, this.green4, this.green4Overlap)
        this.physics.add.overlap(this.touch, this.gold1, this.gold1Overlap)
        this.physics.add.overlap(this.touch, this.gold2, this.gold2Overlap)
        this.physics.add.overlap(this.touch, this.gold3, this.gold3Overlap)
        this.physics.add.overlap(this.touch, this.gold4, this.gold4Overlap)
        this.physics.add.overlap(this.touch, this.green2, this.green2Overlap)
        
        }

        else if(rightkey){
          this.avatar.x += 3;
          this.bag.x += 3;
          this.touch.x += 3;


          if (this.touch.x >= 316) {
            this.avatar.x = 313;
            this.bag.x = 318;
            this.touch.x = 316;
          }

          
        this.physics.add.overlap(this.touch, this.green1, this.green1Overlap)
        this.physics.add.overlap(this.touch, this.greenAdded1, this.greenAdded1Overlap)
        this.physics.add.overlap(this.touch, this.goldAdded1, this.goldAdded1Overlap)
        this.physics.add.overlap(this.touch, this.green3, this.green3Overlap)
        this.physics.add.overlap(this.touch, this.greenAdded2, this.greenAdded2Overlap)
        this.physics.add.overlap(this.touch, this.green4, this.green4Overlap)
        this.physics.add.overlap(this.touch, this.gold1, this.gold1Overlap)
        this.physics.add.overlap(this.touch, this.gold3, this.gold3Overlap)
        this.physics.add.overlap(this.touch, this.gold4, this.gold4Overlap)
        this.physics.add.overlap(this.touch, this.green2, this.green2Overlap)
        




          
          
        }

        
        
         }
       
      }

     
     
    
