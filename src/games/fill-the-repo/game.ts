import {Entity} from "../../engine/entity/entity.ts";
import {config} from "../../engine/config.ts";
import type {Renderer} from "../../engine/core/renderer.ts";

type Subject = "POS" | "WMC" | "SYP" | "DBI"
type Direction = "top" | "right" | "bottom" | "left";

class Cube extends Entity {
    private sides: Subject[] = ["POS", "WMC", "SYP", "DBI"];

    constructor() {
        super(config.canvas_width / 2 - 30, config.canvas_height / 2 - 30, 60, 60);
    }

    rotateRight() {
        const last = this.sides.pop()!;
        this.sides.unshift(last);
    }

    rotateLeft() {
        const first = this.sides.shift()!;
        this.sides.push(first);
    }

    getSubjectAt(direction: Direction): Subject {
        switch (direction) {
            case "top":
                return this.sides[0]
            case "right":
                return this.sides[1]
            case "bottom":
                return this.sides[2]
            case "left":
                return this.sides[3]
        }
    }

    render(r: Renderer) {
        r.drawRect(this.x, this.y, this.w, this.h, "#333333");

        r.text(this.sides[0], this.x + 15, this.y + 15, "#ffffff");
        r.text(this.sides[1], this.x + 35, this.y + 35, "#ffffff");
        r.text(this.sides[2], this.x + 15, this.y + 55, "#ffffff");
        r.text(this.sides[3], this.x - 5, this.y + 35, "#ffffff");

    }
}
class SubjectProjectile extends Entity {
    type: Subject;
    originDir: Direction;
    speed: number = 100;

    constructor(type: Subject, originDir: Direction) {
        let startX = 0;
        let startY = 0;
        const size = 30;

        switch (originDir) {
            case "top":
                startX = config.canvas_width / 2 - size / 2;
                startY = -size;
                break;
            case "right":
                startX = config.canvas_width;
                startY = config.canvas_height / 2 - size / 2;
                break;
            case "bottom":
                startX = config.canvas_width / 2 - size / 2;
                startY = config.canvas_height;
                break;
            case "left":
                startX = -size;
                startY = config.canvas_height / 2 - size / 2;
                break;
        }
        super(startX, startY, size, size);
        this.type = type;
        this.originDir = originDir;
    }
    update(dt: number) {
        switch (this.originDir) {
            case "top":
                this.y += this.speed * dt;
                break;
            case "right":
                this.x -= this.speed * dt;
                break;
            case "bottom":
                this.y -= this.speed * dt;
                break;
            case "left":
                this.x += this.speed * dt;
                break;
        }
    }
    render(r: Renderer) {
        r.drawRect(this.x, this.y, this.w, this.h, "#ffffff");
        r.text(this.type, this.x + 2, this.y + 20, "#000000");
    }
}
