import type {Vector2Like} from "../math/vector2.ts";
import type {Renderer} from "../core/renderer.ts";

export abstract class Entity implements Vector2Like {
    x: number;
    y: number;

    protected constructor(vector2: Vector2Like) {
        this.x = vector2.x;
        this.y = vector2.y;
    }

    get positionVector(): Vector2Like {
        return {
            x: this.x,
            y: this.y,
        }
    }

    update(delta: number) {}
    render(renderer: Renderer) {}
}