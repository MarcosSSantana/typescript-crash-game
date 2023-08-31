import * as PIXI from "pixi.js";
import { Main } from "./Main";
import Character from "./Character";
export default class SceneOne extends PIXI.Container {
    private app: Main;
    public container: PIXI.Container;
    public Background: PIXI.Sprite = PIXI.Sprite.from("background");
    public Character;
    constructor(app: Main) {
        super();
        this.app = app;

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.container.addChild(this.Background);

        this.Character = new Character(this.app);
        this.container.addChild(this.Character);

    }

}