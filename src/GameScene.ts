import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { Main } from "./Main";
import gsap from "gsap";
import { sound } from "@pixi/sound";
import Character from "./Character";
export default class GameScene {
    private app: Main;
    private container: PIXI.Container;
    public Background: PIXI.Sprite = Sprite.from("background");
    public Text: PIXI.Text = new PIXI.Text();

    constructor(app: Main) {
        this.app = app;
        this.app.event.emit("endGameLoading");
        // if (!this.app.mute) { // sound.play('ambiente', { loop: true });  }
        this.container = new PIXI.Container();

        this.app.stage.addChild(this.container);
        this.container.addChild(this.Background);
        this.container.addChild(new Character(this.app));

        this.app.ticker.add(this.update.bind(this));
    }

    update(delta: number) {
        // console.log(delta);

    }


}