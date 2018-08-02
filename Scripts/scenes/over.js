var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        //Public Properties
        //Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //Private Methods
        OverScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        //Public Methods
        OverScene.prototype.Start = function () {
            objects.Scene.music.stop();
            objects.Scene.music = createjs.Sound.play("music_gameOver");
            objects.Scene.music.loop = -1;
            objects.Scene.music.volume = 1;
            this._OverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#FFFFFF", 400, 200, true);
            this._backButton = new objects.Button(this.assetManager, "btn_back", 400, 300, true);
            this._backButton.on("click", this._backButtonClick);
            this._background = new objects.Background(this.assetManager);
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.Main = function () {
            this.addChild(this._background);
            // add the welcome kabek to the scene
            this.addChild(this._OverLabel);
            this.addChild(this._backButton);
            //add the startbutton to the scene
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map