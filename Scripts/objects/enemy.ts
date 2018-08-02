module objects {
    export class Enemy extends objects.GameObject{
        
        //private instance variables
        public health:number = 30;

        // constructor
        constructor(assetManager: createjs.LoadQueue, assetName:string, _scaleX: number = 1, _scaleY: number = 1) {
            super(assetManager, assetName);

            this.scaleX =_scaleX;
            this.scaleY = _scaleY;

            this.Start();
        }

        public Start(): void {
            this.rotation = 180;
            this.health = 30;
            this.name = "enemy"
        }

        public Update(): void {

            this.CheckBounds();
        }


        public CheckBounds(): void{

            if(this.y >= 800){
                objects.Game.stage.removeChild(this);
                console.log("Enemy removed")
            }
            
        }
    }
}