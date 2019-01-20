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
        this.mainChar = this.add.sprite(game.config.width / 2, game.config.height / 2, "mainChar");

        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'mainChar',frame:0 },
                { key: 'mainChar',frame:1 },
                { key: 'mainChar',frame:2 },
                { key: 'mainChar',frame:3 },
                { key: 'mainChar',frame:4 },
                { key: 'mainChar',frame:5 },
            ],
            frameRate: 8,
            repeat: -1
        });

        this.mainChar.play('walk');
    }
    update() {
        // constantly runnning loop
    }

    // *NOTE: you can add custom functions, as well
}

const newScene = new SceneMain();