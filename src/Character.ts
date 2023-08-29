import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { Main } from "./Main";
import gsap from "gsap";
export default class Character extends PIXI.Container {
    private app: Main;
    private container: PIXI.Container;
    public Background: PIXI.Sprite = Sprite.from("background");
    public Text: PIXI.Text = new PIXI.Text();
    public body;
    public head;
    public armR;
    public armL;
    public footR;
    public footL;
    public legR;
    public legL;
    public thighR;
    public thighL;
    public shortsR;
    public shortsL;
    public base;
    constructor(app: Main) {
        super();
        this.app = app;

        this.container = new PIXI.Container();

        this.app.stage.addChild(this.container);

        this.body = PIXI.Sprite.from(PIXI.Texture.from(`tronco.png`));
        this.container.addChild(this.body);

        this.head = PIXI.Sprite.from(PIXI.Texture.from(`cabeca.png`));
        this.container.addChild(this.head);

        this.armR = PIXI.Sprite.from(PIXI.Texture.from(`braco-d.png`));
        this.container.addChild(this.armR);

        this.armL = PIXI.Sprite.from(PIXI.Texture.from(`braco-e.png`));
        this.container.addChild(this.armL);

        this.footR = PIXI.Sprite.from(PIXI.Texture.from(`pe-d.png`));
        this.container.addChild(this.footR);

        this.footL = PIXI.Sprite.from(PIXI.Texture.from(`pe-e.png`));
        this.container.addChild(this.footL);

        this.legR = PIXI.Sprite.from(PIXI.Texture.from(`canela-d.png`));
        this.container.addChild(this.legR);

        this.legL = PIXI.Sprite.from(PIXI.Texture.from(`canela-e.png`));
        this.container.addChild(this.legL);

        this.thighR = PIXI.Sprite.from(PIXI.Texture.from(`coxa-d.png`));
        this.container.addChild(this.thighR);

        this.thighL = PIXI.Sprite.from(PIXI.Texture.from(`coxa-e.png`));
        this.container.addChild(this.thighL);

        this.shortsR = PIXI.Sprite.from(PIXI.Texture.from(`bermuda-d.png`));
        this.container.addChild(this.shortsR);

        this.shortsL = PIXI.Sprite.from(PIXI.Texture.from(`bermuda-e.png`));
        this.container.addChild(this.shortsL);

        this.base = PIXI.Sprite.from(PIXI.Texture.from(`base.png`));
        this.container.addChild(this.base);
        
        this.app.ticker.add(this.update.bind(this));
    }

    update(delta: number) {
        // console.log(delta);

    }


}