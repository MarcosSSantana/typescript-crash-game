import * as PIXI from "pixi.js";
import { Main } from "./Main";
import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";
export default class GameScene {
    private app: Main;
    private container: PIXI.Container;
    public Menu: PIXI.Sprite = PIXI.Sprite.from("menu-desk");
    public Butons: PIXI.Sprite = PIXI.Sprite.from("buttuns-desk");
    public Scene: PIXI.Container;
    public animating = false;
    public time = 0;
    public speed = 0.01;
    public FontStyle = new PIXI.TextStyle({
        fontFamily: "sofiapro",
        fill: "#ffffff",
        fontSize: 40,
        fontWeight: 'bold'
    });
    public Text: PIXI.Text = new PIXI.Text('0.00X', this.FontStyle);

    constructor(app: Main) {
        this.app = app;
        this.app.event.emit("endGameLoading");

        this.container = new PIXI.Container();

        this.app.stage.addChild(this.container);

        this.Scene = new SceneOne(this.app);
        this.container.addChild(this.Scene);

        this.Menu.anchor.set(0.5, 1);
        this.Menu.position.set(this.app.screen.width / 2, this.app.screen.height);
        this.container.addChild(this.Menu);

        this.Butons.anchor.set(0.5, 1);
        this.Butons.position.set(0, 0);
        this.Menu.addChild(this.Butons);

        this.Butons.interactive = true;
        this.Butons.on('pointerdown', () => {
            if (!this.animating) {
                this.app.event.emit("playing");
            }
        });

        this.app.ticker.add(this.update.bind(this));

        app.event.on("endSceneOne", () => {
            this.container.removeChild(this.Scene);

            this.Scene = new SceneTwo(this.app);

            this.container.addChild(this.Scene);
            this.container.setChildIndex(this.Scene, 0);
        })
    }

    update(delta: number) {
        if (this.animating) {
            this.time += delta * this.speed;
            this.Text.text = `${this.time.toFixed(2)}X`
        }
    }

    setText() {
        this.Text.anchor.set(0.5, 0.5);
        this.Text.position.set(this.app.screen.width / 2, 430)
        this.container.addChild(this.Text);
        this.animating = true;
    }




}