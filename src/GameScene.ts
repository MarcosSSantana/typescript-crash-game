import * as PIXI from "pixi.js";
import { Main } from "./Main";
import SceneOne from "./SceneOne";
export default class GameScene {
    private app: Main;
    private container: PIXI.Container;
    public Menu: PIXI.Sprite = PIXI.Sprite.from("menu-desk");
    public Butons: PIXI.Sprite = PIXI.Sprite.from("buttuns-desk");
    public Scene;
    public animating = false;
    public time = 0;
    public FontStyle = new PIXI.TextStyle({
        fill: "#ffffff",
        fontSize: 40,
        fontWeight: '700'
    });
    public Text: PIXI.Text = new PIXI.Text('0.00X', this.FontStyle);

    constructor(app: Main) {
        this.app = app;
        this.app.event.emit("endGameLoading");

        this.container = new PIXI.Container();

        this.app.stage.addChild(this.container);

        this.Scene = new SceneOne(this.app)
        this.container.addChild(this.Scene);

        this.Menu.anchor.set(0.5, 1);
        this.Menu.position.set(this.app.screen.width / 2, this.app.screen.height);
        this.container.addChild(this.Menu);

        this.Butons.anchor.set(0.5, 1);
        this.Butons.position.set(0, 0);
        this.Menu.addChild(this.Butons);

        this.Butons.interactive = true;
        this.Butons.on('pointerdown', () => {
            this.Scene.Character.play()
        });

        this.app.ticker.add(this.update.bind(this));
    }

    update(delta: number) {
        if (this.animating) {
            this.time += delta * 0.01;
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