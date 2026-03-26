import {Entity} from "./entity.ts";
import {config} from "../config.ts";
import type {Renderer} from "../core/renderer.ts";

export class HeartDisplay extends Entity {
    static readonly maxLifes: number = 3;
    static readonly padding: number = 7
    static readonly gap: number = 5
    static readonly heartSize: number = 15

    constructor(public lifes: number = 3) {
        super(
            config.canvas_width - HeartDisplay.padding - HeartDisplay.maxLifes * HeartDisplay.heartSize - (HeartDisplay.maxLifes - 1) * HeartDisplay.gap,
            HeartDisplay.padding,
            0,
            0
        );
    }

    render(r: Renderer) {
        for (let i = 0; i < HeartDisplay.maxLifes; i++) {
            if (this.lifes >= i + 1) {
                r.drawRect(this.x + (HeartDisplay.heartSize + HeartDisplay.gap) * i, this.y, HeartDisplay.heartSize, HeartDisplay.heartSize, "#f00")
            } else {
                r.drawRect(this.x + (HeartDisplay.heartSize + HeartDisplay.gap) * i, this.y, HeartDisplay.heartSize, HeartDisplay.heartSize, "#444")
            }
        }
    }
}