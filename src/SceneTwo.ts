import * as PIXI from "pixi.js";
import { Main } from "./Main";
import { gsap } from "gsap";
export default class SceneTwo extends PIXI.Container {
    private app: Main;
    public container: PIXI.Container;
    public Background: PIXI.Sprite = PIXI.Sprite.from("background");
    public Ball: PIXI.Sprite = PIXI.Sprite.from("ballTwo");
    public speed = 0.5;
    constructor(app: Main) {
        super();
        this.app = app;

        this.container = new PIXI.Container();
        this.addChild(this.container);
        this.Background.scale.set(0.7);
        this.Background.y = -1100;
        this.container.addChild(this.Background);

        this.Ball.anchor.set(0.5);
        this.Ball.position.set(this.app.screen.width/2, 300);
        this.container.addChild(this.Ball);

        this.app.ticker.add(this.update.bind(this));
    }

    update(delta: number) {

        this.Background.x -= delta * this.speed;
        
        if(this.Background.x <= -this.Background.width){
            this.Background.x = this.app.screen.width;
        }

        this.Ball.rotation += 0.08 * delta;
        
    }

}