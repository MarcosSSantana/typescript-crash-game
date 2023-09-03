import * as PIXI from "pixi.js";
import { Application, Loader } from "pixi.js";
import GameScene from './GameScene';
import { sound } from '@pixi/sound';

export class Main extends Application {

    public game: GameScene | any = '';

    public txtLoading;
    public event = new PIXI.utils.EventEmitter();

    constructor(data:{src:string}) {
        super({
            // backgroundColor: 0x2c9e0b,
            width: 1040,
            height: 582,
            backgroundAlpha: 1
            // autoStart: false
        });


        this.txtLoading = new PIXI.Text('0', new PIXI.TextStyle({
            align: "center",
            fontSize: 44,
            fill: '#ff0000'
        }));
        this.txtLoading.anchor.set(0.5);
        this.txtLoading.position.set(this.screen.width / 2, this.screen.height / 2 )
        this.stage.addChild(this.txtLoading);

        this.LoadAll(data)
    }
    LoadAll(data: any) {
        const loader = new Loader();
        loader
            .add("background", `${data.src}/img/background.png`)
            .add("menu-desk", `${data.src}/img/menu-desk.png`)
            .add("ball", `${data.src}/img/ball.png`)
            .add("ballTwo", `${data.src}/img/ballTwo.png`)
            .add("buttuns-desk", `${data.src}/img/buttuns-desk.png`)
            .add("character", `${data.src}/img/character.json`)


        loader.load(() => {

            this.stage.removeChild(this.txtLoading);
            this.onAssetsLoaded();

        });
        loader.onProgress.add((e) => {
            this.txtLoading.text = e.progress.toFixed(0) + "%";
        });
    }

    public onAssetsLoaded() {
        this.game = new GameScene(this);
    }

}