import * as PIXI from "pixi.js";
import { Main } from "./Main";
import gsap from "gsap";
export default class Character extends PIXI.Container {
    private app: Main;
    public container: PIXI.Container;
    public click = false;
    public body;
    public spine;
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
    public mapMoviment = {
        "body": [
            {
                x: 140,
                y: 200,
                rotation: 0.2,
                duration: 0.8,
            },
            {
                x: 140,
                y: 197,
                rotation: 0,
                duration: 0.5
            }
        ],
        "armR": [
            {
                rotation: -0.5,
                duration: 0.8,
            },
            {
                rotation: 1.4,
                duration: 0.5,
            },
            {
                rotation: 0,
                duration: 1,
            }
        ],
        "armL": [
            {
                rotation: 1.4,
                duration: 0.8,
            },
            {
                rotation: -0.5,
                duration: 0.5,
            },
            {
                rotation: 0,
                duration: 1,
            }
        ],
        "thighL": [
            {
                x: 32,
                y: 128,
                rotation: -0.6,
                duration: 0.8,
            },
            {
                x: 28,
                y: 125,
                rotation: 0,
                duration: 0.5,
            }
        ],
        "legL": [
            {
                rotation: 0.2,
                duration: 0.8,
            },
            {
                rotation: 0,
                duration: 0.5,
            }
        ],
        "thighR": [
            {
                x: 17,
                rotation: 0.7,
                duration: 0.8,
            },
            {
                x: 30,
                rotation: -0.7,
                duration: 0.5,
            },
            {
                x: 17,
                rotation: 0.2,
                duration: 1,
            }
        ],
        "legR": [
            {
                rotation: 0.7,
                duration: 0.8,
            }, 
            {
                rotation: 0,
                duration: 0.5,
            }
        ]
    }
    constructor(app: Main) {
        super();
        this.app = app;
        // console.log(this.mapMoviment);

        this.container = new PIXI.Container();
        this.addChild(this.container);

        this.body = this.setters(140, 197, 0, 0, `tronco`);

        this.base = this.setters(90, 455, 0, 0, `base`, true);
        this.container.addChild(this.base);

        //coxa esquerda
        this.thighL = this.setters(28, 125, 0.4, 0.09, `coxa`, true);
        this.body.addChild(this.thighL);

        this.shortsL = this.setters(-4, -27, 0.4, 0.09, `bermuda`, true);
        this.thighL.addChild(this.shortsL);

        this.legL = this.setters(7, 60, 0.6, 0.09, `canela`, true);
        this.thighL.addChild(this.legL);

        this.footL = this.setters(-7, 71, 0.25, 0.1, `pe`, true);
        this.legL.addChild(this.footL);


        //coxa direita
        this.thighR = this.setters(17, 120, 0.4, 0.09, `coxa`, true, 0.2);
        this.body.addChild(this.thighR);

        this.shortsR = this.setters(-4, -27, 0.4, 0.09, `bermuda`, true);
        this.thighR.addChild(this.shortsR);

        this.legR = this.setters(7, 60, 0.6, 0.09, `canela`, true);
        this.thighR.addChild(this.legR);

        this.footR = this.setters(-7, 71, 0.25, 0.1, `pe`, true);
        this.legR.addChild(this.footR);

        //braço esquerdo 
        this.armL = this.setters(12, 12, 0.22, 0.15, `braco`, true);
        this.body.addChild(this.armL);

        this.head = this.setters(28, 6, 0.5, 0.8, `cabeca`, true);
        this.body.addChild(this.head);

        this.spine = this.setters(0, 0, 0, 0, `tronco`, true);
        this.body.addChild(this.spine);

        //braço direito 
        this.armR = this.setters(12, 13, 0.22, 0.15, `braco`, true, 0.4);
        this.body.addChild(this.armR);
        this.container.addChild(this.body);

        this.scale.set(0.96);

    }

    setters(x: number, y: number, ax = 0, ay = 0, image: PIXI.TextureSource, pointer = false, rotation = 0) {
        let peace = PIXI.Sprite.from(image);
        peace.anchor.set(ax, ay);
        peace.rotation = rotation;
        peace.position.set(x, y);
        if (pointer && false) {
            let pointer = this.pointer();
            peace.addChild(pointer);
        }
        return peace;
    }

    pointer() {
        // Crie um círculo vermelho para indicar a âncora
        let anchorIndicator = new PIXI.Graphics();
        anchorIndicator.beginFill(0xFFfF00);
        anchorIndicator.drawCircle(0, 0, 5);
        anchorIndicator.endFill();
        return anchorIndicator;
    }

    move(obj: PIXI.Sprite, map: {}[], index: number = 0) {
        if (index >= map.length) {
            // Todas as animações foram concluídas
            return;
        }

        gsap.to(obj, {
            ...map[index],
            onComplete: () => {
                this.move(obj, map, index + 1); // Inicia a próxima animação
            }
        });
    }


    play() {
        if (!this.click) {
            this.click = true;
            this.move(this.body, this.mapMoviment["body"]);
            this.move(this.armL, this.mapMoviment["armL"]);
            this.move(this.armR, this.mapMoviment["armR"]);
            this.move(this.thighR, this.mapMoviment["thighR"]);
            this.move(this.legR, this.mapMoviment["legR"]);
            this.move(this.thighL, this.mapMoviment["thighL"]);
            this.move(this.legL, this.mapMoviment["legL"]);
        }

    }

}