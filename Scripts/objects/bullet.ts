module objects {
    export class Bullet extends objects.GameObject{

        // constructor
        constructor(assetManager: createjs.LoadQueue, assetName:string) {
            super(assetManager, assetName);

            this.Start();
        }

        public Start(): void {
            this.name = "bullet"
        }

        public Update(): void {
            this.CheckBounds();
        }


        public CheckBounds(): void{
        }
    }
}