class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // preload all assets
        this.load.spritesheet('mainChar', 'images/mainChar.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        // defines all objects for the scene
        // this.mainChar = this.add.sprite(game.config.width / 2, game.config.height / 2, "mainChar");

        // var frameNames = this.anims.generateFrameNumbers('mainChar'); // auto generates the frames from the sprite sheet

        // this.anims.create({
        //     key: 'walk',
        //     frames: frameNames,
        //     frameRate: 8,
        //     repeat: -1
        // });

        // this.mainChar.play('walk');
        // this.doWalk();   

        this.testText = this.add.text(game.config.width / 2, game.config.height / 2, "Howdy");
        this.testText.setOrigin(.5, .5);
    }

    doWalk(){
        this.tweens.add({ 
            targets: this.mainChar, 
            duration: 1000, 
            x: game.config.width, 
            onComplete: this.onCompleteHandler ,
            onCompleteParams: this
        });
    }

    onCompleteHandler(tween, targets, scope){
        scope.mainChar.x = 0;
    }

    update() {
        // constantly runnning loop
    }

    // *NOTE: you can add custom functions, as well
}

const newScene = new SceneMain();