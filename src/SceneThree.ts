import * as PIXI from "pixi.js";
import { Main } from "./Main";
import { gsap } from "gsap";
import Character from "./Character";
export default class SceneThree extends PIXI.Container {
    private app: Main;
    public container: PIXI.Container;
    public Background: PIXI.Sprite = PIXI.Sprite.from("background");
    public Ball: PIXI.Sprite = PIXI.Sprite.from("ball");
    public animating = true;
    public curva = 0.5;
    public speed = 0.5;
    public Character;
    constructor(app: Main) {
        super();
        this.app = app;

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.Background.anchor.set(0, 1);
        this.Background.y = 690;
        this.Background.scale.set(0.255);
        this.container.addChild(this.Background);

        this.Ball.anchor.set(0.5);
        this.Ball.scale.set(0.6);
        this.Ball.position.set(this.app.screen.width / 2, 350);
        this.container.addChild(this.Ball);

        this.Character = new Character(this.app);
        this.Character.scale.set(0.4);
        this.Character.y = 300;
        this.container.addChild(this.Character);

        this.app.ticker.add(this.update.bind(this));
    }

    update(delta: number) {
        if (this.animating) {
            this.Ball.x += 15 * delta; // Controla a velocidade da animação
            if (this.Ball.x > this.app.screen.width + 100) {
                this.animating = false;
                this.app.event.emit("endGame");
            }

            const decrementAmount = this.curva * delta; // Ajuste esse valor para controlar a velocidade da desaceleração
            this.Ball.y += decrementAmount;
            this.curva = this.curva + 0.2;
            
            this.Ball.rotation += 0.08 * delta;

        }

    }

}