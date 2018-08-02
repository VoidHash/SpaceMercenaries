module scenes {
    export class OverScene extends objects.Scene {

        //Private Instance Variables
        private _OverLabel: objects.Label;
        private _backButton: objects.Button;

        private _background: objects.Background;

        //Public Properties

        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        //Private Methods
        
        private _backButtonClick(): void {
            objects.Game.currentScene = config.Scene.PLAY;
        }

        //Public Methods

        public Start(): void {

            objects.Scene.music.stop();
            objects.Scene.music = createjs.Sound.play("music_gameOver");
            objects.Scene.music.loop = -1;
            objects.Scene.music.volume = 1;

            this._OverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#FFFFFF", 400, 200, true);

            this._backButton = new objects.Button(this.assetManager, "btn_back", 400, 300, true);
            this._backButton.on("click", this._backButtonClick);

            this._background = new objects.Background(this.assetManager);

            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            this.addChild(this._background);
            // add the welcome kabek to the scene
            this.addChild(this._OverLabel);
            this.addChild(this._backButton);

            //add the startbutton to the scene
            
        }
    }
}