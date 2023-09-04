import * as PIXI from "pixi.js";
import { Application, Loader } from "pixi.js";
import GameScene from './GameScene';
import { sound } from '@pixi/sound';

export class Main extends Application {

    public game: GameScene | any = '';

    public txtLoading;
    public event = new PIXI.utils.EventEmitter();

    constructor(data: any) {
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
        this.txtLoading.position.set(this.screen.width / 2, this.screen.height / 2)
        this.stage.addChild(this.txtLoading);

        this.LoadAll(data)
    }
    LoadAll(data: any) {
        const loader = new Loader();
        loader
            .add("background", `${data.background}`)
            .add("menu-desk", `${data.menudesk}`)
            .add("ball", `${data.ball}`)
            .add("ballTwo", `${data.ballTwo}`)
            .add("buttuns-desk", `${data.buttunsdesk}`)
            // .add("character", `${data.character}`)
            .add("base", `${data.base}`)
            .add("bermuda", `${data.bermuda}`)
            .add("braco", `${data.braco}`)
            .add("cabeca", `${data.cabeca}`)
            .add("canela", `${data.canela}`)
            .add("coxa", `${data.coxa}`)
            .add("pe", `${data.pe}`)
            .add("tronco", `${data.tronco}`)


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